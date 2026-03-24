import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Stránka nenalezena – Korektura diplomové práce',
  description: 'Požadovaná stránka neexistuje. Vraťte se na hlavní stránku.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <Navbar />

      <section className="py-28 md:py-36" style={{ backgroundColor: '#eef2f0' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">

          {/* Velké 404 */}
          <div
            className="font-headings font-bold select-none mb-6"
            style={{
              fontSize: 'clamp(96px, 20vw, 160px)',
              lineHeight: 1,
              color: 'transparent',
              WebkitTextStroke: '2px #0d1f2d',
              opacity: 0.12,
            }}
            aria-hidden="true"
          >
            404
          </div>

          {/* Ikona */}
          <div
            className="mx-auto mb-8 w-20 h-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(26,122,104,0.10)' }}
          >
            <svg
              width="38" height="38" viewBox="0 0 24 24"
              fill="none" stroke="#1a7a68" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          {/* Nadpis */}
          <h1
            className="font-headings font-bold text-navy mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.2 }}
          >
            Stránka nenalezena
          </h1>

          {/* Popis */}
          <p className="text-text-dark text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Adresa, kterou hledáte, neexistuje nebo byla přesunuta.
            Zkuste se vrátit na hlavní stránku nebo nás kontaktujte.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/" className="btn-primary">
              Zpět na hlavní stránku
            </a>
            <a href="/#zastihnout" className="btn-secondary">
              Kontaktujte nás
            </a>
          </div>

          {/* Zkratky */}
          <div className="mt-14 pt-8 border-t border-gray-200">
            <p className="text-sm text-text-dark/60 mb-4">Hledáte snad některou z těchto stránek?</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                { href: '/#cenik',      label: 'Ceník' },
                { href: '/#objednavka', label: 'Objednávka' },
                { href: '/#postup',     label: 'Jak to funguje?' },
                { href: '/#reference',  label: 'Reference' },
                { href: '/ochrana-osobnich-udaju', label: 'Ochrana osobních údajů' },
                { href: '/obchodni-podminky',      label: 'Obchodní podmínky' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold transition-colors"
                  style={{ color: '#1a7a68' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
