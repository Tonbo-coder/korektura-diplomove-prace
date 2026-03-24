function IconCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a68"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a68"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}
function IconTrend() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a68"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

const BENEFITS = [
  {
    Icon: IconCheck,
    title: 'Každé hodnocení čteme osobně',
    text: 'Váš názor není jen statistika. Každou odpověď si projdeme a bereme ji vážně.',
  },
  {
    Icon: IconUsers,
    title: 'Pomáháte dalším diplomantům',
    text: 'Vaše zkušenost usnadní rozhodování studentům, kteří hledají spolehlivou korekturu.',
  },
  {
    Icon: IconTrend,
    title: 'Neustále se zlepšujeme',
    text: 'Konkrétní podněty od klientů přímo ovlivňují kvalitu našich korektorských služeb.',
  },
]

export default function ReviewThankYouBlock() {
  return (
    <section style={{ backgroundColor: '#eef2f0' }} className="py-20">
      <div className="max-w-5xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: text + benefits */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 text-sm font-semibold"
              style={{ backgroundColor: 'rgba(26,122,104,0.10)', color: '#1a7a68' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Hodnocení odesláno
            </div>

            {/* Headline */}
            <h1 className="font-headings font-bold text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.15 }}>
              Děkujeme za<br />
              <span style={{ color: '#1a7a68' }}>váš čas a názor</span>
            </h1>

            {/* Subtext */}
            <p className="text-text-dark text-lg leading-relaxed mb-10 max-w-md">
              Zpětná vazba je pro nás stejně cenná jako každá zkorigovaná diplomová práce.
              Díky vám se můžeme neustále zlepšovat – a to si velmi vážíme.
            </p>

            {/* Benefit rows */}
            <div className="flex flex-col gap-5 mb-10">
              {BENEFITS.map(({ Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(26,122,104,0.10)' }}>
                    <Icon />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-base leading-snug mb-0.5">{title}</p>
                    <p className="text-text-dark text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="/" className="btn-primary" title="Zpět na hlavní stránku">
              Zpět na hlavní stránku
            </a>
          </div>

          {/* RIGHT: visual stat card */}
          <div>
            <div className="rounded-none shadow-md overflow-hidden"
              style={{ backgroundColor: '#0d1f2d' }}>

              {/* Top – stat */}
              <div className="px-8 pt-10 pb-8 text-center border-b"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="font-headings font-bold text-white mb-1"
                  style={{ fontSize: 'clamp(52px, 8vw, 80px)', lineHeight: 1 }}>
                  98<span style={{ color: '#1a7a68', fontSize: '0.55em' }}>%</span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-3"
                  style={{ color: 'rgba(255,255,255,0.45)' }}>
                  spokojených zákazníků
                </p>
                {/* Stars */}
                <div className="flex justify-center gap-1" aria-hidden="true">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="20" height="20" viewBox="0 0 24 24"
                      fill="#1a7a68" stroke="none" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Middle – quote */}
              <div className="px-8 py-7 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <p className="text-base italic leading-relaxed mb-4"
                  style={{ color: 'rgba(255,255,255,0.75)' }}>
                  „Korektura diplomky proběhla rychle a důkladně. Opravili gramatiku, interpunkci
                  i stylistiku – text najednou působil úplně profesionálně. Doporučuji každému."
                </p>
                <p className="text-sm font-semibold" style={{ color: '#1a7a68' }}>
                  Markéta V., Univerzita Karlova
                </p>
              </div>

              {/* Bottom – small facts */}
              <div className="grid grid-cols-2 divide-x"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                {[
                  { value: '5 000+', label: 'zkorigovaných prací' },
                  { value: '12 let', label: 'na trhu' },
                ].map(({ value, label }) => (
                  <div key={label} className="px-6 py-6 text-center">
                    <div className="font-headings font-bold text-white text-2xl mb-1">{value}</div>
                    <div className="text-xs uppercase tracking-wider"
                      style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
