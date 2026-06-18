/**
 * Product catalogue — static data source.
 * To add or edit a kit, update this file. Drop matching images into
 * /public/images/products/ and reference them via the `image` field.
 */

export type ProductCategory = "kids" | "adult" | "return-gifts" | "characters";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  price: number; // current selling price in INR
  compareAt?: number; // optional original / later price for "intro offer"
  shippingNote?: string;
  /** Accent color key used for the card art gradient. */
  accent: "brand" | "mint" | "peach" | "sky" | "lemon" | "rose";
  /** Local image path. Placeholder gradient renders until a real photo is added. */
  image?: string;
  badge?: string;
  shortDescription: string;
  description: string;
  includes: string[];
  ageGroup: string;
  featured?: boolean;
}

export const categoryLabels: Record<ProductCategory, string> = {
  kids: "Kids' Kits",
  adult: "Adult Edition",
  "return-gifts": "Return Gifts & Bulk",
  characters: "Character Figures",
};

export const products: Product[] = [
  {
    slug: "royal-taj-masterpiece",
    name: "Royal Taj Masterpiece Kit",
    tagline: "Adult Edition · Relax. Paint. Create a Royal Taj.",
    category: "adult",
    price: 149,
    compareAt: 199,
    accent: "brand",
    image: "/images/products/royal-taj-masterpiece.png",
    badge: "Bestseller",
    ageGroup: "12+ / Adults",
    shortDescription:
      "A mindful, screen-free painting experience — sculpt your evening calm around an iconic Taj Mahal POP figure.",
    description:
      "Our Royal Taj Masterpiece is designed for grown-ups who want a calm, screen-free creative ritual. Paint the intricate Taj Mahal POP figure at your own pace and turn it into elegant home décor once it dries. A thoughtful stress-relief activity and a beautiful, premium gift.",
    includes: [
      "1 detailed Taj Mahal POP shape",
      "6 vibrant paint colours",
      "1 fine-tip paint brush",
      "Easy step-by-step guide",
    ],
    featured: true,
  },
  {
    slug: "magic-school-adventure",
    name: "Magic School Adventure Painting Kit",
    tagline: "Wizards, wands & a world of colour.",
    category: "kids",
    price: 99,
    accent: "sky",
    image: "/images/products/hogwarts-magic-school.png",
    badge: "Fan Favourite",
    ageGroup: "5+",
    shortDescription:
      "A magical painting kit with wizard figures and a wizard hat — perfect for little spell-casters.",
    description:
      "Bring the magic home! This kit lets young wizards paint their very own wizard figures plus a magic hat. A wonderful screen-free activity for return gifts, playdates and rainy afternoons.",
    includes: [
      "3 wizard figures",
      "1 wizard hat shape",
      "1 magic scroll shape",
      "6 bright colours + 1 paint brush",
    ],
    featured: true,
  },
  {
    slug: "dolphin-and-friends",
    name: "Dolphin & Friends Art Kit",
    tagline: "Dive into an ocean of creativity.",
    category: "kids",
    price: 99,
    accent: "mint",
    image: "/images/products/dolphin-and-friends.png",
    ageGroup: "4+",
    shortDescription:
      "Seven adorable sea-creature figures to paint — fun, relaxing and completely screen-free.",
    description:
      "An ocean-themed painting kit packed with seven cute sea-creature POP figures. Great for sparking imagination, building focus and keeping little hands happily busy. A top pick for birthday return gifts.",
    includes: [
      "7 sea-creature POP toys",
      "6 colours",
      "1 paint brush",
      "Activity guide",
    ],
    featured: true,
  },
  {
    slug: "little-artist-holiday",
    name: "Little Artist Holiday Kit",
    tagline: "Made for young creators on holiday.",
    category: "kids",
    price: 140,
    shippingNote: "+ shipping",
    accent: "peach",
    image: "/images/products/little-artist-holiday.png",
    badge: "New",
    ageGroup: "6+",
    shortDescription:
      "A specially curated holiday kit with big & mini shapes plus character cards to keep kids creatively busy.",
    description:
      "Designed for young creators, this holiday kit combines big and mini POP shapes with collectible character cards. Perfect for keeping kids engaged during vacations with a hands-on, imaginative activity.",
    includes: [
      "2 big shapes + 3 mini shapes",
      "6 colours + 1 brush",
      "Character cards set",
      "Kids' watch-style accessory",
    ],
    featured: true,
  },
  {
    slug: "rocket-mini-kit",
    name: "Rocket Mini Art Kit",
    tagline: "Blast off into a space-themed painting adventure.",
    category: "kids",
    price: 79,
    accent: "sky",
    image: "/images/products/little-artist-holiday-rocket-small-kit.png",
    badge: "Mini",
    ageGroup: "4+",
    shortDescription:
      "A compact space-themed kit — paint your own rocket and let little imaginations soar.",
    description:
      "A perfectly pocket-sized creative adventure. Little astronauts paint their very own Plaster of Paris rocket figure with bright, non-toxic colours. Great as an affordable gift or a quick, screen-free activity that boosts creativity and focus.",
    includes: [
      "1 rocket POP figure",
      "5 vibrant colours",
      "1 paint brush",
      "Gift-ready packaging",
    ],
  },
  {
    slug: "superhero-squad",
    name: "Superhero Squad Figures",
    tagline: "Paint your favourite heroes.",
    category: "characters",
    price: 129,
    accent: "rose",
    ageGroup: "5+",
    shortDescription:
      "Bring home a squad of superhero POP figures to paint and proudly display.",
    description:
      "Calling all little heroes! Paint your own superhero figures and assemble a colourful squad. A playful, screen-free activity that doubles as room décor and an exciting return gift.",
    includes: [
      "Set of superhero POP figures",
      "6 colours",
      "1 paint brush",
      "Step-by-step guide",
    ],
  },
  {
    slug: "buggy-buddy-return-gifts",
    name: "Buggy Buddy Return-Gift Packs",
    tagline: "Best choice for return gifts & bulk orders.",
    category: "return-gifts",
    price: 59,
    accent: "lemon",
    image: "/images/products/buggy-buddy-return-gifts.png",
    badge: "Bulk Friendly",
    ageGroup: "All ages",
    shortDescription:
      "Cute mini painting kits priced for parties — bulk orders for birthdays and celebrations.",
    description:
      "Our most popular return-gift option. Each compact kit includes a mini toy, colours and a brush — an affordable, memorable and screen-free gift that kids actually love. Bulk pricing available for birthdays, schools and events.",
    includes: [
      "1 cute mini toy / shape",
      "Mini colour set",
      "1 paint brush",
      "Gift-ready packaging",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export const accentGradients: Record<Product["accent"], string> = {
  brand: "from-brand-200 to-brand-400",
  mint: "from-mint to-sky",
  peach: "from-peach to-rose",
  sky: "from-sky to-brand-200",
  lemon: "from-lemon to-peach",
  rose: "from-rose to-peach",
};
