export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Rarest Answer Wins Wiki",
  shortName: "Rarest Answer Wins",
  logoText: "R",
  tagline: "Rare Answers, Smarter Plays & Verified Guides",
  description: "A fan-made Rarest Answer Wins wiki with verified gameplay tips, animal answer strategies, codes, and update guides for the Roblox quiz game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rarest-answer-wins.wiki",
  supportEmail: "support@rarest-answer-wins.wiki",
  gameUrl: "https://www.roblox.com/games/81548692127925/Rarest-Answer-Wins",
  heroVideoId: "e13P3b_OKmc",
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
