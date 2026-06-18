import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — DIY Painting & Clay Kits`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded Open Graph image used when the site is shared on social media,
 * chat apps and surfaced by generative search engines.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #efe9fb 0%, #e3d8f7 55%, #f7e6ef 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 28,
              background: "linear-gradient(135deg, #9d7fd6, #7c5cbf)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
            }}
          >
            🎨
          </div>
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
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#2c2350",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            DIY Painting & Clay Kits
          </div>
          <div style={{ fontSize: 34, color: "#6b5e8c", maxWidth: 900 }}>
            Screen-free creative fun for kids & grown-ups · Return gifts ·
            Workshops · Wholesale
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {["#7ad6c0", "#f7b7a3", "#8fc6f2", "#f6d97a", "#f2a3bf"].map((c) => (
            <div
              key={c}
              style={{ width: 44, height: 44, borderRadius: 999, background: c }}
            />
          ))}
          <div style={{ marginLeft: "auto", fontSize: 28, color: "#7c5cbf", fontWeight: 700 }}>
            {site.instagramHandle}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
