/**
 * Central site configuration — single source of truth for brand strings,
 * contact details and social links used across the app.
 */

export const site = {
  name: "Yaal's Creation",
  shortName: "Yaal's",
  tagline: "Where creativity meets love",
  description:
    "Handmade DIY paint-your-own POP & clay figure kits for kids and grown-ups. Screen-free creative fun, perfect for return gifts, birthday parties and mindful home décor.",
  url: "https://yaals-creation.vercel.app",

  // Contact
  whatsappNumber: "918248044970", // international format, no '+' for wa.me
  whatsappDisplay: "+91 82480 44970",
  email: "shop.yaals.creations@gmail.com",
  location: "Karaikal • Chennai, India",

  // Social
  instagram: "https://instagram.com/shop.yaals_creations",
  instagramHandle: "@shop.yaals_creations",
} as const;

/**
 * Build a wa.me link with a pre-filled message.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hi Yaal's Creation! 👋 I found you through your website and I'd love to know more about your painting kits.";
