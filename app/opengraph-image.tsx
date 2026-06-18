import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name} — DIY Painting & Clay Kits`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded Open Graph image used when the site is shared on social media,
 * chat apps and surfaced by generative search engines. Features the real
 * brand logo centred on a branded landscape canvas (1200×630).
 */
export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/brand/logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "72px 88px",
          background:
            "linear-gradient(135deg, #efe9fb 0%, #e3d8f7 55%, #f7e6ef 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt={site.name}
          width={440}
          height={440}
          style={{
            width: 440,
            height: 440,
            objectFit: "contain",
            flexShrink: 0,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#5b3f96",
              letterSpacing: -1,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#2c2350",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            DIY Painting & Clay Kits
          </div>
          <div style={{ fontSize: 30, color: "#6b5e8c", maxWidth: 560 }}>
            Screen-free creative fun for kids & grown-ups · Return gifts ·
            Workshops · Wholesale
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 8 }}>
            {["#7ad6c0", "#f7b7a3", "#8fc6f2", "#f6d97a", "#f2a3bf"].map((c) => (
              <div
                key={c}
                style={{ width: 40, height: 40, borderRadius: 999, background: c }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

