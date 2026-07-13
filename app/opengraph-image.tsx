import { ImageResponse } from "next/og";

export const alt =
  "Ezekiel (Zeke) Pari — MESR co-founder and product builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#ffffff",
          color: "#262626",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "76px 84px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            display: "flex",
            height: 10,
            width: 92,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1,
            }}
          >
            Ezekiel (Zeke) Pari
          </div>
          <div
            style={{
              color: "#525252",
              display: "flex",
              fontSize: 34,
              marginTop: 28,
            }}
          >
            Student. Builder. MESR co-founder.
          </div>
        </div>
        <div style={{ color: "#737373", display: "flex", fontSize: 24 }}>
          zekepari.dev
        </div>
      </div>
    ),
    size,
  );
}
