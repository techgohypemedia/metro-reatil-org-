const fs = require('fs');

const dataPath = 'c:/Users/GHM/Documents/Metro Retail/metro/src/app/services/[id]/data.ts';
let data = fs.readFileSync(dataPath, 'utf8');

const newItems = `      {
        slug: "clothing-and-fashion",
        img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
        title: "Clothing And Fashion",
        description: "Premium clothing and fashion retail store designs.",
        tags: ["Clothing", "Fashion", "Retail"],
        bullets: ["Boutique layout planning", "Apparel display systems", "Fitting room design"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "luggage",
        img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=800",
        title: "Luggage",
        description: "Specialized retail fitouts for luggage and travel accessories.",
        tags: ["Luggage", "Travel", "Retail"],
        bullets: ["Heavy-duty shelving", "Space optimization", "Brand storytelling"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "beauty-and-personal-care",
        img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800",
        title: "Beauty And Personal Care",
        description: "Completed projects for top brands like Nyka, MAC, Maybelline, and Sephora.",
        tags: ["Beauty", "Cosmetics", "Retail"],
        bullets: ["Nyka store fitouts", "MAC & Sephora displays", "Maybelline kiosks"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "electronics",
        img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
        title: "Electronics",
        description: "State-of-the-art electronics showrooms for brands like SAMSUNG, CROMA, VIVO, and Apple.",
        tags: ["Electronics", "Technology", "Retail"],
        bullets: ["SAMSUNG & VIVO experience zones", "Apple store aesthetics", "CROMA retail layouts"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "jewellery",
        img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
        title: "Jewellery",
        description: "Luxury jewellery store fitouts for Blue stone, Malabar, GIVA, MIA, and Caratlane.",
        tags: ["Jewellery", "Luxury", "Retail"],
        bullets: ["Blue stone & Caratlane designs", "Malabar gold displays", "GIVA & MIA boutique interiors"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "kids-and-toys",
        img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=800",
        title: "Kids & Toys",
        description: "Vibrant and engaging toy stores for Hamleys, ToysRus, and Hot Wheels.",
        tags: ["Kids", "Toys", "Retail"],
        bullets: ["Hamleys magical interiors", "ToysRus large-format stores", "Hot wheels interactive zones"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "watches",
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800",
        title: "Watches",
        description: "Precision watch boutique designs for Titan, Helios, Fossil, and Casio.",
        tags: ["Watches", "Accessories", "Retail"],
        bullets: ["Titan & Helios showrooms", "Fossil vintage displays", "Casio modern kiosks"],
        buttonText: "VIEW DETAILS →"
      },`;

const lines = data.split('\n');
let insertIndex = -1;
for (let i = 2700; i < 2730; i++) {
  if (lines[i].includes('slug: "retail-store-design"')) {
    insertIndex = i - 1; // Insert before the `{` on the previous line
    break;
  }
}

if (insertIndex !== -1) {
  lines.splice(insertIndex, 0, newItems);
  fs.writeFileSync(dataPath, lines.join('\n'));
  console.log('Successfully prepended new retail categories.');
} else {
  console.log('Could not find insertion point.');
}
