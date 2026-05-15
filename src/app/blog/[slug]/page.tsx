import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, getRelatedPosts } from "@/lib/posts";
import type { ContentBlock, InlineImage } from "@/lib/posts";
import type { Metadata } from "next";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `https://peerlo.no/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image ? {
        images: [{ url: post.image, width: 900, height: 450, alt: post.title }],
      } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

function renderInlineLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | { text: string; href: string })[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push({ text: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (parts.length === 0) return text;

  return parts.map((part, i) => {
    if (typeof part === "string") return <span key={i}>{part}</span>;
    return (
      <Link
        key={i}
        href={part.href}
        className="text-forest hover:text-evening-forest underline underline-offset-2 decoration-forest/30 hover:decoration-forest transition-colors duration-200"
      >
        {part.text}
      </Link>
    );
  });
}

function BlogContent({ content, inlineImages }: { content: ContentBlock[]; inlineImages?: InlineImage[] }) {
  const imagesByPosition = new Map<number, InlineImage>();
  inlineImages?.forEach((img) => imagesByPosition.set(img.afterBlock, img));

  return (
    <div className="space-y-4">
      {content.map((block, i) => {
        const inlineImg = imagesByPosition.get(i);
        const imgElement = inlineImg ? (
          <div className="my-8 -mx-4 md:-mx-8">
            <Image
              src={inlineImg.src}
              alt={inlineImg.alt}
              width={900}
              height={500}
              className="w-full rounded-2xl"
            />
          </div>
        ) : null;

        if (typeof block === "string") {
          const isRelatedLink = block.startsWith("Les også:") || block.startsWith("Les mer:");
          if (isRelatedLink) {
            return (
              <div key={i}>
                <div className="bg-bright-forest/20 border border-forest/10 rounded-2xl px-6 py-4 my-8">
                  <p className="text-charcoal/80 font-medium">
                    {renderInlineLinks(block)}
                  </p>
                </div>
                {imgElement}
              </div>
            );
          }

          const lines = block.split("\n");
          if (lines.length > 1) {
            return (
              <div key={i}>
                <div className="space-y-1">
                  {lines.map((line, j) => (
                    <p
                      key={j}
                      className="text-charcoal/80 text-lg leading-relaxed"
                    >
                      {renderInlineLinks(line)}
                    </p>
                  ))}
                </div>
                {imgElement}
              </div>
            );
          }

          return (
            <div key={i}>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                {renderInlineLinks(block)}
              </p>
              {imgElement}
            </div>
          );
        }

        return (
          <div key={i}>
            <ul className="space-y-2 my-4 pl-1">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-charcoal/80 text-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-forest/60 mt-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {imgElement}
          </div>
        );
      })}
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function estimateWordCount(content: ContentBlock[]): number {
  const text = content
    .map((block) => (typeof block === "string" ? block : block.items.join(" ")))
    .join(" ");
  return Math.round(text.split(/\s+/).filter(Boolean).length);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  const wordCount = estimateWordCount(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://peerlo.no/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    ...(post.image
      ? { image: { "@type": "ImageObject", url: `https://peerlo.no${post.image}`, width: 900, height: 450 } }
      : {}),
    author: {
      "@type": "Person",
      "@id": "https://peerlo.no/#ole-aarre",
      name: post.author,
      url: "https://peerlo.no",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://peerlo.no/#organization",
      name: "Peerlo",
      logo: { "@type": "ImageObject", url: "https://peerlo.no/images/peerlo-logo.svg" },
    },
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "nb-NO",
    url: `https://peerlo.no/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://peerlo.no/blog/${post.slug}`,
      isPartOf: { "@id": "https://peerlo.no/#website" },
    },
    about: {
      "@type": "Thing",
      name: "Peer support",
      sameAs: "https://en.wikipedia.org/wiki/Peer_support",
    },
    isPartOf: {
      "@type": "Blog",
      "@id": "https://peerlo.no/blog#blog",
      name: "Peerlo Blogg",
      publisher: { "@id": "https://peerlo.no/#organization" },
    },
    wordCount,
    articleSection: "Psykisk helse og peer support",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: "https://peerlo.no" },
      { "@type": "ListItem", position: 2, name: "Blogg", item: "https://peerlo.no/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://peerlo.no/blog/${post.slug}` },
    ],
  };

  return (
    <div className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-evening-forest pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-[family-name:var(--font-geist-sans)] mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            Tilbake til bloggen
          </Link>

          <h1 className="text-3xl md:text-5xl font-normal text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-white/50 text-sm font-[family-name:var(--font-geist-sans)]">
            <span className="text-white/70 font-medium">{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {post.readingTime} min lesetid
            </span>
          </div>
        </div>
      </section>

      {post.image && (
        <section className="max-w-3xl mx-auto px-6 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src={post.image}
              alt={post.title}
              width={900}
              height={450}
              className="w-full"
              priority
            />
          </div>
        </section>
      )}

      <article className="max-w-2xl mx-auto px-6 pb-16 md:pb-24">
        <BlogContent content={post.content} inlineImages={post.inlineImages} />

        {post.credits && post.credits.length > 0 && (
          <div className="mt-12 pt-6 border-t border-charcoal/10">
            <p className="text-xs text-charcoal/40 font-[family-name:var(--font-geist-sans)]">
              Bilder:{" "}
              {post.credits.map((credit, i) => (
                <span key={i}>
                  {i > 0 && ", "}
                  <a
                    href={credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-charcoal/60 underline underline-offset-2"
                  >
                    {credit.photographer}
                  </a>
                  {" via "}
                  {credit.source}
                </span>
              ))}
            </p>
          </div>
        )}
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-charcoal/10 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-normal text-center mb-12">
              Les også
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group"
                >
                  <article className="bg-paper rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {related.image ? (
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-1.5 bg-forest/25" />
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-medium mb-2 group-hover:text-forest transition-colors duration-300">
                        {related.title}
                      </h3>
                      <p className="text-charcoal/60 text-sm leading-relaxed flex-1">
                        {related.excerpt}
                      </p>
                      <p className="text-forest text-sm font-[family-name:var(--font-geist-sans)] font-medium mt-4 flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                        Les innlegget <ArrowRight size={14} />
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-evening-forest py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-white mb-4">
            Trenger du noen å snakke med?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Peerlo kobler deg med mennesker som har vært gjennom lignende
            utfordringer. Anonymt og tilgjengelig.
          </p>
          <Link
            href="/#cta"
            className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-white text-evening-forest font-[family-name:var(--font-geist-sans)] font-semibold hover:bg-bright-forest transition-colors duration-300"
          >
            Bli med i piloten
          </Link>
        </div>
      </section>
    </div>
  );
}
