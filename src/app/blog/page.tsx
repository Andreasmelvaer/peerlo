import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogg",
  description:
    "Tanker om peer support, psykisk helse og det å tørre å snakke med noen som forstår.",
  alternates: { canonical: "https://peerlo.no/blog" },
  openGraph: {
    title: "Blogg | Peerlo",
    description: "Tanker om peer support, psykisk helse og det å tørre å snakke med noen som forstår.",
    url: "https://peerlo.no/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogg | Peerlo",
    description: "Tanker om peer support, psykisk helse og det å tørre å snakke med noen som forstår.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://peerlo.no/blog#blog",
  name: "Peerlo Blogg",
  url: "https://peerlo.no/blog",
  description:
    "Tanker om peer support, psykisk helse og det å tørre å snakke med noen som forstår.",
  inLanguage: "nb-NO",
  publisher: {
    "@type": "Organization",
    "@id": "https://peerlo.no/#organization",
    name: "Peerlo",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <section className="bg-evening-forest py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
            Peerlo Blogg
          </p>
          <h1 className="text-4xl md:text-6xl font-normal text-white mb-6">
            Tanker om det å være menneske
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Om peer support, psykisk helse, og det å tørre å snakke med noen
            som forstår.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <Link
          href={`/blog/${featured.slug}`}
          className="block group"
        >
          <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                )}
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-xs uppercase tracking-widest mb-3">
                  Siste innlegg
                </p>
                <h2 className="text-2xl md:text-3xl font-normal mb-4 group-hover:text-forest transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-charcoal/60 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-sm text-charcoal/40 font-[family-name:var(--font-geist-sans)]">
                  <span>{featured.author}</span>
                  <span className="w-1 h-1 rounded-full bg-charcoal/20" />
                  <span>{featured.readingTime} min lesetid</span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-16 md:pt-20 pb-4">
        <p className="text-charcoal/70 leading-relaxed text-xl">
          Her skriver vi om peer support, psykisk helse og det å tørre å ta det første steget. Vi tror at det å snakke med noen som har opplevd det samme, eller noe lignende, kan gjøre en stor forskjell.
        </p>
        <p className="text-charcoal/70 leading-relaxed text-xl mt-3">
          Et verktøy for arbeidsgivere som ønsker å ta vare på sine ansatte – også når de ikke er på jobb.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {post.image ? (
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-1.5 bg-forest/25" />
                )}
                <div className={`p-6 flex flex-col flex-1 ${!post.image ? "pt-8" : ""}`}>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-forest transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-charcoal/40 font-[family-name:var(--font-geist-sans)]">
                    <span>{post.readingTime} min lesetid</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
