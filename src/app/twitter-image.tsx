import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const gabarito = await fetch(
    "https://fonts.googleapis.com/css2?family=Gabarito:wght@700&display=swap"
  ).then((res) => res.text());

  const fontUrl = gabarito.match(
    /src: url\(([^)]+)\)/
  )?.[1];

  const fontData = fontUrl
    ? await fetch(fontUrl).then((res) => res.arrayBuffer())
    : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#305043",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle decorative circle top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(56, 133, 102, 0.3)",
            display: "flex",
          }}
        />

        {/* Second subtle circle */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(56, 133, 102, 0.15)",
            display: "flex",
          }}
        />

        {/* Peerlo bubble logo */}
        <svg
          width="80"
          height="90"
          viewBox="0 0 38 43"
          fill="none"
        >
          <path
            d="M22.9624 0C31.2672 0 37.9999 6.73223 38.0001 15.0369C38.0001 23.3418 31.2673 30.0746 22.9624 30.0746H15.0376C14.4985 30.0746 13.9657 30.0453 13.4413 29.99C6.98619 30.0745 1.77973 35.333 1.77962 41.8081V42.1084C1.77961 42.5954 1.3843 42.9901 0.897212 42.9901C0.410191 42.99 0.0155227 42.5954 0.0155056 42.1084V17.0964C0.0155056 16.7228 0.0518791 16.3477 0.0288837 15.9749C0.00975014 15.6647 0 15.3519 0 15.0369C0.00018525 6.73235 6.73235 0.000188656 15.0369 0H22.9624Z"
            fill="white"
          />
        </svg>

        {/* Peerlo text */}
        <div
          style={{
            fontSize: "72px",
            fontFamily: fontData ? "Gabarito" : "sans-serif",
            fontWeight: 700,
            color: "#FFFFFF",
            marginTop: "24px",
            display: "flex",
          }}
        >
          Peerlo
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            fontFamily: fontData ? "Gabarito" : "sans-serif",
            fontWeight: 700,
            color: "#C1F7E1",
            marginTop: "12px",
            display: "flex",
          }}
        >
          Peer support. Gjort tilgjengelig.
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: "18px",
            color: "rgba(193, 247, 225, 0.6)",
            marginTop: "40px",
            fontFamily: fontData ? "Gabarito" : "sans-serif",
            letterSpacing: "2px",
            display: "flex",
          }}
        >
          peerlo.no
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: "Gabarito",
              data: fontData,
              style: "normal",
              weight: 700,
            },
          ]
        : [],
    }
  );
}
