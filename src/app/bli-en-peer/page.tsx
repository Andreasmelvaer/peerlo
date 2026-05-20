"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function PeerForm() {
  const [form, setForm] = useState({ navn: "", epost: "", telefon: "", erfaring: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/bli-en-peer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-bright-forest/20 border border-forest/20 rounded-3xl px-8 py-12 text-center">
        <p className="text-2xl font-normal text-charcoal mb-3">Takk, {form.navn}!</p>
        <p className="text-charcoal/60 leading-relaxed">
          Vi har mottatt interessen din og tar kontakt så snart vi kan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-[family-name:var(--font-geist-sans)] font-medium text-charcoal/70 mb-1.5">
          Navn <span className="text-forest">*</span>
        </label>
        <input
          name="navn"
          type="text"
          required
          value={form.navn}
          onChange={handleChange}
          className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div>
        <label className="block text-sm font-[family-name:var(--font-geist-sans)] font-medium text-charcoal/70 mb-1.5">
          E-postadresse <span className="text-forest">*</span>
        </label>
        <input
          name="epost"
          type="email"
          required
          value={form.epost}
          onChange={handleChange}
          className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all"
          placeholder="din@epost.no"
        />
      </div>

      <div>
        <label className="block text-sm font-[family-name:var(--font-geist-sans)] font-medium text-charcoal/70 mb-1.5">
          Telefonnummer{" "}
          <span className="text-charcoal/40 font-normal">(valgfritt)</span>
        </label>
        <input
          name="telefon"
          type="tel"
          value={form.telefon}
          onChange={handleChange}
          className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all"
          placeholder="+47 000 00 000"
        />
      </div>

      <div>
        <label className="block text-sm font-[family-name:var(--font-geist-sans)] font-medium text-charcoal/70 mb-1.5">
          Hva har du erfaring med? <span className="text-forest">*</span>
        </label>
        <textarea
          name="erfaring"
          required
          maxLength={300}
          rows={4}
          value={form.erfaring}
          onChange={handleChange}
          className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all resize-none"
          placeholder="Beskriv kort hva du har erfaring med..."
        />
        <p className="text-xs text-charcoal/40 font-[family-name:var(--font-geist-sans)] mt-1 text-right">
          {form.erfaring.length}/300
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 font-[family-name:var(--font-geist-sans)]">
          Noe gikk galt. Prøv igjen eller send en e-post til ole@peerlo.no.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-13 rounded-full bg-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold text-base hover:bg-evening-forest transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sender..." : "Meld min interesse"}
      </button>
    </form>
  );
}

export default function BliEnPeerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 bg-paper">

        {/* Hero */}
        <section className="bg-evening-forest pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-5">
              Bli en peer
            </p>
            <h1 className="text-4xl md:text-6xl font-normal text-white leading-tight mb-6">
              Du trenger ikke en tittel for å gjøre en forskjell.
            </h1>
            <p className="text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              Hvis du har stått i noe vanskelig – og kommet deg gjennom det – har du noe ingen utdanning kan gi: egenerfaring. Og det er nettopp det som gjør peer support så kraftfullt.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="max-w-3xl mx-auto px-6 py-20 md:py-28 space-y-20">

          {/* Hvem passer dette for */}
          <div>
            <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              Hvem passer dette for?
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-charcoal mb-6 leading-snug">
              Du som har vært der – og ønsker å hjelpe andre.
            </h2>
            <div className="space-y-4 text-charcoal/70 text-lg leading-relaxed">
              <p>
                Du som har erfaring med psykiske utfordringer, stress, utbrenthet, samlivsbrudd, sorg, avhengighet, eller andre livshendelser – og som ønsker å bruke den erfaringen til å hjelpe andre.
              </p>
              <p>
                Du trenger ikke ha alt på stell selv. Du trenger bare å ha vært der, og ønske å bidra.
              </p>
            </div>
          </div>

          {/* Hva innebærer det */}
          <div>
            <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              Hva innebærer det?
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-charcoal mb-6 leading-snug">
              Du bestemmer selv hva, når og hvor mye.
            </h2>
            <ul className="space-y-4">
              {[
                "Du blir kurset og sertifisert av Peerlo før du starter.",
                "Du setter selv grenser for hva du vil snakke om og hvor mye tid du vil bruke.",
                "Du velger selv når du er tilgjengelig.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-charcoal/70 text-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest/60 mt-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Det viktigste du gjør */}
          <div className="bg-evening-forest rounded-3xl px-8 py-10 md:px-12 md:py-12">
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex-1">
                <p className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
                  Det viktigste du gjør
                </p>
                <h2 className="text-3xl md:text-4xl font-normal text-white mb-6 leading-snug">
                  Du bidrar bare ved å lage en profil.
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  Det viktigste du gjør er egentlig å lage en peer-profil. Ved å stå frem med din erfaring – sammen med alle andre som gjør det samme – er du med på å bygge ned stigmaet rundt psykisk helse. Åpenhet skaper åpenhet.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  Ønsker du å bidra mer aktivt, er du hjertelig velkommen til å ta steget videre. Etter et kort intervju og et kurs kan du bli en aktiv peer – og en del av et av Norges mest meningsfulle frilansfellesskap.
                </p>
              </div>
              <div className="flex justify-center md:justify-end shrink-0">
                <img
                  src="/images/peer-profil-utklipp.png"
                  alt="Peer-profil i Peerlo-appen"
                  className="w-48 md:w-56 rounded-[2.5rem] shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Hvorfor bli peer */}
          <div className="bg-bright-forest/15 rounded-3xl px-8 py-10 md:px-12 md:py-12">
            <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              Hvorfor bli peer?
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-charcoal mb-6 leading-snug">
              Det å hjelpe andre kan hjelpe deg selv.
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Mange som blir peers sier at det å hjelpe andre også hjelper dem selv. Det å sette ord på egne erfaringer, og se at de betyr noe for andre, kan være sterkt.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white border-t border-charcoal/8">
          <div className="max-w-xl mx-auto px-6 py-20 md:py-28 text-center">
            <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              Meld interesse
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-charcoal mb-4 leading-snug">
              Ta det første steget.
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-3">
              Send en e-post til oss med en kort beskrivelse av deg selv:
            </p>
            <ul className="text-charcoal/60 text-lg leading-relaxed mb-10 space-y-1">
              <li>Navn</li>
              <li>Telefonnummer</li>
              <li>Hva du har erfaring med</li>
            </ul>
            <a
              href="mailto:ole@peerlo.no"
              className="inline-flex h-13 items-center px-8 rounded-full bg-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold text-base hover:bg-evening-forest transition-colors duration-300"
            >
              Send e-post til ole@peerlo.no
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
