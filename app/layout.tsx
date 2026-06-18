import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — DIY Painting & Clay Kits`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "DIY painting kit",
    "POP painting kit",
    "kids art kit",
    "return gifts",
    "clay figures",
    "screen-free activity",
    "Yaal's Creation",
  ],
  openGraph: {
    title: `${site.name} — DIY Painting & Clay Kits`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — DIY Painting & Clay Kits`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="bg-aura flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
