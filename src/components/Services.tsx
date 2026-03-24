import Image from 'next/image'

const services = [
  {
    img: '/images/icons/tisk-vazba-diplomovych-praci.png',
    alt: 'Tisk a vazba: finální podoba diplomových prací',
    title: 'Tisk a vazba',
    description:
      'Pevná vazba v deskách dle vašeho výběru s možností zlaté nebo stříbrné ražby. Osobní vyzvednutí v Praze nebo doručení kamkoliv po ČR.',
    price: 'Cena: cca 950 – 1050 Kč / ks',
  },
  {
    img: '/images/icons/tvorba-citaci-diplomova-prace.png',
    alt: 'Citování zdrojů diplomové práce dle norem',
    title: 'Tvorba a úprava citací',
    description:
      'Citace zpracujeme podle norem vaší fakulty – ČSN ISO 690, APA a další. Stačí dodat údaje o zdrojích a zbytek nechat na nás.',
    price: 'Cena: dohodou',
  },
  {
    img: '/images/icons/pisemne-doporuceni-diplomova-prace.png',
    alt: 'Písemné doporučení a zpětná vazba k diplomové práci',
    title: 'Písemné doporučení',
    description:
      'Připravíme podrobný rozbor vaší diplomové práce s komentáři přímo v dokumentu a souhrnem konkrétních doporučení pro posílení argumentace.',
    price: 'Cena: cca 1500 Kč',
  },
  {
    img: '/images/icons/preklad-abstraktu-diplomova-prace.png',
    alt: 'Překlad abstraktu diplomové práce do angličtiny',
    title: 'Překlad abstraktu',
    description:
      'Profesionální překlad abstraktu do angličtiny nebo němčiny – přesná terminologie a akademický styl, který obstojí i u zahraniční komise.',
    price: 'Cena: 490 – 590 Kč',
  },
  {
    img: '/images/icons/kontrola-plagiatorstvi-diplomova-prace.png',
    alt: 'Kontrola originality diplomové práce',
    title: 'Kontrola plagiátorství',
    description:
      'Prověříme originalitu textu ještě před nahráním do IS. Snížíte riziko zamítnutí a odevzdáte diplomku s jistotou.',
    price: 'Cena: 390 Kč',
  },
  {
    img: '/images/icons/prezentace-obhajoba-diplomova-prace.png',
    alt: 'Prezentace k obhajobě diplomové práce',
    title: 'Tvorba prezentace',
    description:
      'Navrhneme prezentaci, která podtrhne hlavní zjištění vaší diplomové práce a dodá obhajobě profesionální nádech.',
    price: 'Cena: cca 2500 Kč',
  },
]

export default function Services() {
  return (
    <section id="sluzby" className="py-20" style={{ backgroundColor: '#0d1f2d' }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="section-title text-white mb-4">S čím vším vám pomůžeme?</h2>
        <p className="section-subtitle mb-12" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Kvalitní korektura diplomky je základ, ale zajistíme i kompletní doprovodný servis –
          od citací a překladu abstraktu přes kontrolu originality až po tisk v pevné vazbě
          a tvorbu prezentace k obhajobě.
        </p>

        {/* 2-column layout – icon circle left, text right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex items-start gap-5 p-6 text-left"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              {/* Icon in teal circle */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(26,122,104,0.18)' }}
              >
                <Image src={s.img} alt={s.alt} width={28} height={28} className="object-contain" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white font-headings font-bold text-base mb-1 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.70)' }}>
                  {s.description}
                </p>
                <span className="text-base font-bold" style={{ color: '#1a7a68' }}>
                  {s.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="font-semibold mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
          – Každou službu lze objednat i samostatně. –
        </p>

        <a href="#objednavka" className="btn-primary" title="Objednat korekturu diplomové práce">
          Objednat
        </a>
      </div>
    </section>
  )
}
