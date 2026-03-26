"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-evening-forest text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/images/logo-light.svg"
                alt="Peerlo"
                width={119}
                height={81}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Peerlo kobler mennesker som står i noe vanskelig med peers som har
              vært gjennom lignende utfordringer. Ikke terapi — bare ekte
              erfaring, delt mellom mennesker.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold uppercase tracking-wider text-white/50 mb-4">
              Produkt
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#hvordan", label: "Hvordan det fungerer" },
                { href: "#bedrifter", label: "For bedrifter" },
                { href: "#hvorfor", label: "Hvorfor Peerlo" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold uppercase tracking-wider text-white/50 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:ole@peerlo.no"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  ole@peerlo.no
                </a>
              </li>
              <li>
                <a
                  href="tel:+4798811908"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  +47 988 11 908
                </a>
              </li>
              <li>
                <Link
                  href="/brand"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Merkevare
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Peerlo. Alle rettigheter
            reservert.
          </p>
          <p>Hallo peers.</p>
        </motion.div>
      </div>
    </footer>
  );
}
