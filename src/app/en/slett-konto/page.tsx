import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delete Account and Data",
  description:
    "How to delete your account and data in Peerlo, whether you're a peer or an anonymous support seeker. Deletion is carried out in line with GDPR.",
  alternates: {
    canonical: "https://peerlo.no/en/slett-konto",
    languages: {
      "nb-NO": "https://peerlo.no/slett-konto",
      en: "https://peerlo.no/en/slett-konto",
    },
  },
  openGraph: {
    title: "Delete Account and Data | Peerlo",
    description:
      "How to delete your account and data in Peerlo, whether you're a peer or an anonymous support seeker.",
    url: "https://peerlo.no/en/slett-konto",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper pt-16">
        {/* Hero */}
        <section className="bg-evening-forest pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              Privacy
            </p>
            <h1 className="text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
              Delete account and data
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              You&rsquo;re in control of your own data. The process is
              slightly different depending on whether you use Peerlo as a
              peer or as an anonymous support seeker — see which one applies
              to you below.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-forest/30 pl-6">
              <h2 className="text-2xl font-medium text-charcoal mb-3">
                Are you a peer?
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Email us from the address linked to your account. We&rsquo;ll
                confirm receipt and delete your account and associated data
                within 30 days.
              </p>
              <a
                href="mailto:ole@peerlo.no?subject=Delete%20account"
                className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-evening-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold hover:bg-charcoal transition-colors duration-300"
              >
                ole@peerlo.no
              </a>
            </div>

            <div className="border-l-4 border-forest/30 pl-6">
              <h2 className="text-2xl font-medium text-charcoal mb-3">
                Are you a support seeker?
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                As a support seeker, you&rsquo;re anonymous — we have no way
                of finding your account from our side. You delete your own
                data directly in the app:
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-pastel-forest/20 px-4 py-2 text-sm font-[family-name:var(--font-geist-sans)] font-medium text-charcoal/80">
                <span>Settings</span>
                <ArrowRight size={14} className="text-forest" />
                <span>Delete user</span>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-pastel-forest/30">
            <p className="text-charcoal/60 leading-relaxed">
              Deletion is carried out in line with GDPR. If you&rsquo;d like
              to know more about what data we store and why, you can read
              our{" "}
              <Link
                href="/personvern"
                className="text-forest hover:text-evening-forest underline underline-offset-2"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
