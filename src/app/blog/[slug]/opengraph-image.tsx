import { ImageResponse } from "next/og";
import { getPost, getAllPosts } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#305043",
            color: "white",
            fontSize: 48,
          }}
        >
          Peerlo
        </div>
      ),
      size
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 70px",
          backgroundColor: "#305043",
          backgroundImage:
            "linear-gradient(135deg, #305043 0%, #388566 50%, #305043 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              backgroundColor: "#C1F7E1",
            }}
          />
          <span
            style={{
              fontSize: 22,
              color: "#C1F7E1",
              fontWeight: 600,
              letterSpacing: "0.1em",
            }}
          >
            PEERLO BLOGG
          </span>
        </div>

        <h1
          style={{
            fontSize: post.title.length > 50 ? 44 : 52,
            color: "white",
            lineHeight: 1.2,
            margin: 0,
            marginBottom: "24px",
            fontWeight: 400,
            maxWidth: "900px",
          }}
        >
          {post.title}
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.8)" }}>{post.author}</span>
          <span>·</span>
          <span>{post.readingTime} min lesetid</span>
        </div>
      </div>
    ),
    size
  );
}
