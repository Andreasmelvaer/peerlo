import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Peerlo",
    short_name: "Peerlo",
    description: "Peer support. Gjort tilgjengelig.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F3F0",
    theme_color: "#305043",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
