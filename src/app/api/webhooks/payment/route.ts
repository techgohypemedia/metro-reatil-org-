import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Universal Payment Webhook Handler (Supports UPI, EMI, Razorpay, Cashfree, PhonePe, Custom Gateways)
 * 
 * Webhook URLs:
 * - Local:      http://localhost:3000/api/webhooks/payment
 * - Production: https://yourdomain.com/api/webhooks/payment
 * 
 * Aliases:
 * - UPI:        http://localhost:3000/api/webhooks/upi
 * - EMI:        http://localhost:3000/api/webhooks/emi
 */

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    let body: Record<string, any> = {};

    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ success: false, message: "Invalid JSON body" }, { status: 400 });
    }

    // Header extraction for signature validation
    const razorpaySignature = req.headers.get("x-razorpay-signature");
    const webhookSecret = process.env.PAYMENT_WEBHOOK_SECRET || process.env.RAZORPAY_WEBHOOK_SECRET || "";

    // Signature verification if secret is configured in .env
    if (webhookSecret && razorpaySignature) {
      const expectedSignature = crypto
        .createHmac("sha256", webhookSecret)
        .update(rawBody)
        .digest("hex");

      if (expectedSignature !== razorpaySignature) {
        console.error("❌ Webhook Signature mismatch");
        return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 });
      }
    }

    // Extract event and payment details
    const event = body.event || body.type || body.status || "payment.received";
    const payload = body.payload?.payment?.entity || body.data || body;

    const paymentId = payload.id || payload.payment_id || payload.txnId || payload.transaction_id || "N/A";
    const orderId = payload.order_id || payload.orderId || "N/A";
    const amount = payload.amount ? (payload.amount / 100).toFixed(2) : payload.order_amount || payload.txnAmount || "0.00";
    const method = payload.method || payload.payment_mode || (payload.vpa ? "upi" : payload.emi ? "emi" : "standard");
    const upiVpa = payload.vpa || payload.upi?.vpa || payload.customer_vpa || null;
    const emiDetails = payload.emi || payload.emi_plan || null;

    console.log("\n🔔 === PAYMENT WEBHOOK RECEIVED ===");
    console.log(`Event:       ${event}`);
    console.log(`Payment ID:  ${paymentId}`);
    console.log(`Order ID:    ${orderId}`);
    console.log(`Amount:      ₹${amount}`);
    console.log(`Method:      ${String(method).toUpperCase()}`);
    if (upiVpa) console.log(`UPI VPA:     ${upiVpa}`);
    if (emiDetails) console.log(`EMI Info:    ${JSON.stringify(emiDetails)}`);
    console.log("===================================\n");

    // Handle specific event types
    switch (event) {
      case "payment.captured":
      case "payment.authorized":
      case "ORDER_PAID":
      case "SUCCESS":
      case "PAYMENT_SUCCESS":
        return NextResponse.json({
          success: true,
          message: "Payment processed successfully",
          payment_id: paymentId,
          method,
          status: "SUCCESS"
        });

      case "payment.failed":
      case "ORDER_FAILED":
      case "FAILED":
      case "PAYMENT_FAILED":
        console.warn(`⚠️ Payment ${paymentId} failed: ${payload.error_description || "Unknown error"}`);
        return NextResponse.json({
          success: true,
          message: "Payment failure recorded",
          payment_id: paymentId,
          status: "FAILED"
        });

      default:
        return NextResponse.json({
          success: true,
          message: `Webhook event '${event}' acknowledged`,
          payment_id: paymentId,
          status: "ACKNOWLEDGED"
        });
    }
  } catch (error: any) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    message: "EMI and UPI Payment Webhook endpoint is active and listening for POST notifications.",
    supported_methods: ["UPI", "EMI", "Card", "Netbanking"],
    endpoints: {
      payment: "/api/webhooks/payment",
      upi: "/api/webhooks/upi",
      emi: "/api/webhooks/emi"
    }
  });
}
