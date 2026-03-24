import Image from 'next/image'

const testimonials = [
  {
    text: 'S korekturou diplomky mi pomohl tým, který odvedl naprosto skvělou práci. Opravili gramatiku, interpunkci i stylistiku – text najednou působil úplně jinak, profesionálně a\u00a0sebejistě. Komunikace byla rychlá a\u00a0přehledná. Vedoucí práce neměl jedinou připomínku k\u00a0jazykové stránce. Rozhodně doporučuji všem, kdo chtějí odevzdat diplomovou práci bez chyb.',
    name: 'Pavel Nerudný',
    school: 'Masarykova univerzita v Brně, 2025',
    img: '/images/reference-2.png',
    imgAlt: 'Reference korektura Pavel',
  },
  {
    text: 'Objednala jsem kompletní korekturu diplomové práce včetně stylistiky a\u00a0kontroly plagiátorství. Tým reagoval bleskově, i\u00a0přestože jsem měla opravdu napjatý termín. Oceňuji především důkladnost – opravili desítky chyb, které bych sama přehlédla, a\u00a0navíc vylepšili formulace a\u00a0slovosled. U\u00a0obhajoby jsem se mohla plně soustředit na prezentaci. Službu využiji znovu u\u00a0případné rigorózní práce.',
    name: 'Lenka Valická',
    school: 'České vysoké učení technické, 2025',
    img: '/images/reference-1.png',
    imgAlt: 'Reference korektura Lenka',
  },
]

function StarRow() {
  return (
    <div className="flex gap-1 mb-5" aria-label="Hodnocení 5 z 5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#1a7a68" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reference" className="bg-bg-light py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="section-title text-navy mb-4">Co říkají naši klienti</h2>
        <p className="section-subtitle text-text-dark mb-12">
          Skutečné zkušenosti studentů, kteří nám svěřili korekturu svých diplomových prací:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-10 shadow-sm text-left flex flex-col relative">
              {/* Decorative quote mark */}
              <div
                className="absolute top-4 right-6 text-6xl leading-none font-serif select-none pointer-events-none"
                aria-hidden="true"
                style={{ color: 'rgba(26,122,104,0.10)' }}
              >
                &ldquo;
              </div>

              <StarRow />

              <p className="text-text-dark leading-relaxed mb-6 flex-1">{t.text}</p>

              <div
                className="flex items-center gap-3 pt-5 border-t"
                style={{ borderColor: 'rgba(13,31,45,0.08)' }}
              >
                <Image
                  src={t.img}
                  alt={t.imgAlt}
                  width={50}
                  height={50}
                  className="rounded-full object-cover grayscale"
                />
                <div>
                  <div className="font-bold text-navy">{t.name}</div>
                  <div className="text-sm text-text-dark/70">{t.school}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
