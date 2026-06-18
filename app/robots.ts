import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * robots.txt — explicitly welcomes search crawlers AND the major AI / answer
 * engines (ChatGPT, Perplexity, Gemini, Claude, etc.) so the store can be cited
 * in generative search results. Points to the sitemap for discovery.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot", // OpenAI / ChatGPT
    "OAI-SearchBot", // ChatGPT Search
    "ChatGPT-User",
    "PerplexityBot", // Perplexity
    "Perplexity-User",
    "Google-Extended", // Gemini / Bard data
    "GoogleOther",
    "Applebot",
    "Applebot-Extended",
    "Amazonbot",
    "Bingbot",
    "CCBot", // Common Crawl (feeds many LLMs)
    "ClaudeBot", // Anthropic / Claude
    "Claude-Web",
    "anthropic-ai",
    "cohere-ai",
    "DuckAssistBot",
    "YouBot",
    "Meta-ExternalAgent",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
    host: site.url,
  };
}
