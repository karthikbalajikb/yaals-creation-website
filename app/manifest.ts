import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Web app manifest — enables install-to-home-screen and gives search engines
 * canonical brand name, theme and icons.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — DIY Painting & Clay Kits`,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1fb",
    theme_color: "#7c5cbf",
    lang: "en-IN",
    categories: ["shopping", "education", "kids", "lifestyle"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
