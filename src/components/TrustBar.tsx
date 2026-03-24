const ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a68"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Expresní zpracování',
    text: 'Korektura hotová i do 24 hodin',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a68"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: 'Transparentní ceny',
    text: 'Nacenění zdarma, bez skrytých příplatků',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a68"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: 'Maximální diskrétnost',
    text: 'Vaše diplomka je u nás v naprostém bezpečí',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a68"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: '5\u202f000+ opravených prací',
    text: 'Prověřený tým korektorů s letitou praxí',
  },
]

export default function TrustBar() {
  return (
    <section className="border-b border-gray-200" style={{ backgroundColor: '#f4f6f5' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex items-center gap-3 px-5 py-5">
              <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(26,122,104,0.10)' }}>
                {item.icon}
              </span>
              <div>
                <div className="font-semibold text-navy text-sm leading-snug">{item.title}</div>
                <div className="text-xs text-gray-500 leading-snug">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
