const fs = require('fs');

const dataPath = 'c:/Users/GHM/Documents/Metro Retail/metro/src/app/services/[id]/data.ts';
let data = fs.readFileSync(dataPath, 'utf8');

const newItems = `
  "clothing-and-fashion": {
    title: "Ready for Clothing & Fashion Retail Fitout?",
    tagline: "High-end boutique and fashion store interiors.",
    heroImage: "/images/retail_ai/clothing_ai.jpg",
    contentTitle: "Clothing & Fashion Interior Design",
    contentDesc: "We design and build premium clothing and fashion retail stores, ensuring optimal space planning, attractive display systems, and luxurious fitting rooms.",
    gallery: [
      { img: "/images/retail_ai/clothing_ai.jpg", title: "Luxury Fashion Store", description: "Bespoke design for clothing retail.", tags: ["Fashion", "Retail"] }
    ]
  },
  "luggage": {
    title: "Ready for Premium Luggage Retail Design?",
    tagline: "Specialized fitouts for luggage and travel accessories.",
    heroImage: "/images/retail_ai/luggage_ai.jpg",
    contentTitle: "Luggage Store Interior Design",
    contentDesc: "Our luggage store interiors are designed for heavy-duty shelving, space optimization, and compelling brand storytelling to elevate the travel retail experience.",
    gallery: [
      { img: "/images/retail_ai/luggage_ai.jpg", title: "Premium Luggage Display", description: "Modern shelving for travel bags.", tags: ["Luggage", "Retail"] }
    ]
  },
  "beauty-and-personal-care": {
    title: "Ready for Beauty & Personal Care Retail Fitout?",
    tagline: "Completed projects for top brands.",
    heroImage: "/images/retail_ai/beauty_ai.jpg",
    contentTitle: "Beauty & Cosmetics Interior Design",
    contentDesc: "Specialized in luxury beauty retail fitouts, featuring brightly lit makeup display counters and aesthetics resembling premium brands like Nyka, MAC, Maybelline, and Sephora.",
    gallery: [
      { img: "/images/retail_ai/beauty_ai.jpg", title: "Luxury Beauty Cosmetics", description: "Completed project for beauty brand.", tags: ["Beauty", "Cosmetics"] }
    ]
  },
  "electronics": {
    title: "Ready for State-of-the-art Electronics Showroom?",
    tagline: "Premium technology store interiors.",
    heroImage: "/images/retail_ai/electronics_ai.jpg",
    contentTitle: "Electronics Retail Store Design",
    contentDesc: "We create minimalist and interactive electronics showrooms, bringing out the best in technology retail for brands like SAMSUNG, CROMA, VIVO, and Apple.",
    gallery: [
      { img: "/images/retail_ai/electronics_ai.jpg", title: "Premium Tech Store", description: "Apple-style electronics showroom.", tags: ["Electronics", "Technology"] }
    ]
  },
  "jewellery": {
    title: "Ready for Luxury Jewellery Store Design?",
    tagline: "Elegant displays and warm lighting.",
    heroImage: "/images/retail_ai/jewellery_ai.jpg",
    contentTitle: "Jewellery Boutique Interior",
    contentDesc: "Our jewellery fitouts feature warm gold lighting and elegant glass display cases, tailored for premium brands like Blue stone, Malabar, GIVA, MIA, and Caratlane.",
    gallery: [
      { img: "/images/retail_ai/jewellery_ai.jpg", title: "Luxury Jewellery Store", description: "Premium jewellery display cases.", tags: ["Jewellery", "Luxury"] }
    ]
  },
  "kids-and-toys": {
    title: "Ready for a Magical Toy Store Fitout?",
    tagline: "Vibrant and engaging spaces for kids.",
    heroImage: "/images/retail_ai/kids_ai.jpg",
    contentTitle: "Toy Store Interior Design",
    contentDesc: "We design vibrant, interactive, and magical toy store interiors, resembling the scale and wonder of brands like Hamleys, ToysRus, and Hot wheels.",
    gallery: [
      { img: "/images/retail_ai/kids_ai.jpg", title: "Magical Toy Store", description: "Interactive displays for kids.", tags: ["Kids", "Toys"] }
    ]
  },
  "watches": {
    title: "Ready for a Luxury Watch Boutique?",
    tagline: "Precision designs for premium timepieces.",
    heroImage: "/images/retail_ai/watches_ai.jpg",
    contentTitle: "Watch Store Interior Design",
    contentDesc: "Dark, elegant aesthetics with specialized glass display cases, creating the perfect ambiance for luxury watch brands like Titan, Helios, Fossil, and Casio.",
    gallery: [
      { img: "/images/retail_ai/watches_ai.jpg", title: "Luxury Watch Boutique", description: "Premium timepiece display.", tags: ["Watches", "Luxury"] }
    ]
  },
};
`;

// Replace the final closing bracket with the new items + the closing bracket
const lastBracketIndex = data.lastIndexOf('};');
if (lastBracketIndex !== -1) {
  const updatedData = data.slice(0, lastBracketIndex) + newItems;
  fs.writeFileSync(dataPath, updatedData);
  console.log('Successfully added top-level keys for new retail categories.');
} else {
  console.log('Could not find the closing bracket.');
}
