import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalDocument } from "@/lib/legalMarkdown";

export default function LegalPageLayout({
  eyebrow,
  doc,
}: {
  eyebrow: string;
  doc: LegalDocument;
}) {
  const [heroIntro, ...restPreamble] = doc.preamble;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper pt-16">
        <section className="bg-evening-forest pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              {eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl font-normal text-white mb-4 leading-tight">
              {doc.title}
            </h1>
            {doc.updated && (
              <p className="text-bright-forest/80 text-sm font-[family-name:var(--font-geist-sans)] mb-6">
                {doc.updated}
              </p>
            )}
            {heroIntro && <div className="text-xl text-white/70 leading-relaxed [&_p]:text-xl [&_p]:text-white/70">{heroIntro}</div>}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          {restPreamble.length > 0 && (
            <div className="space-y-4 mb-12">{restPreamble as ReactNode}</div>
          )}

          <div className="space-y-10">
            {doc.sections.map((section, i) => (
              <div key={i} className="border-b border-pastel-forest/30 pb-10 last:border-0">
                <h2 className="text-xl font-semibold text-charcoal mb-3">{section.heading}</h2>
                <div className="space-y-4">{section.body as ReactNode}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
