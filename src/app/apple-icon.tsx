import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#388566",
          borderRadius: "40px",
        }}
      >
        <svg
          width="110"
          height="124"
          viewBox="0 0 38 43"
          fill="none"
        >
          <path
            d="M22.9624 0C31.2672 0 37.9999 6.73223 38.0001 15.0369C38.0001 23.3418 31.2673 30.0746 22.9624 30.0746H15.0376C14.4985 30.0746 13.9657 30.0453 13.4413 29.99C6.98619 30.0745 1.77973 35.333 1.77962 41.8081V42.1084C1.77961 42.5954 1.3843 42.9901 0.897212 42.9901C0.410191 42.99 0.0155227 42.5954 0.0155056 42.1084V17.0964C0.0155056 16.7228 0.0518791 16.3477 0.0288837 15.9749C0.00975014 15.6647 0 15.3519 0 15.0369C0.00018525 6.73235 6.73235 0.000188656 15.0369 0H22.9624Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
