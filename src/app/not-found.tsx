import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-paper flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-[8rem] md:text-[10rem] font-bold leading-none text-forest">
          404
        </h1>
        <p className="mt-4 text-lg md:text-xl text-charcoal">
          Denne siden finnes ikke.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center px-8 rounded-full bg-evening-forest text-white text-sm font-[family-name:var(--font-geist-sans)] font-semibold hover:opacity-90 transition-opacity duration-300"
        >
          Tilbake til forsiden
        </Link>
      </main>
      <Footer />
    </>
  );
}
