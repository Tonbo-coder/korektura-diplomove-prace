import Image from 'next/image'

const steps = [
  {
    img: '/images/icons/vyber-sluzeb-korektura-diplomky.png',
    alt: 'Výběr služeb pro korekturu diplomové práce',
    name: 'Výběr',
    description: 'Zvolte korekturu diplomové práce nebo jinou službu.',
    highlight: true,
  },
  {
    img: '/images/icons/odeslani-diplomove-prace-korektura.png',
    alt: 'Odeslání diplomové práce ke korektuře',
    name: 'Zaslání',
    description: 'Nahrajte soubor s diplomkou a případně směrnici školy.',
    highlight: false,
  },
  {
    img: '/images/icons/naceneni-korektura-diplomky.png',
    alt: 'Nacenění korektury diplomové práce',
    name: 'Nacenění',
    description: 'Diplomovou práci naceníme a nabídku dostanete obratem.',
    highlight: false,
  },
  {
    img: '/images/icons/potvrzeni-korektura-diplomky.png',
    alt: 'Potvrzení objednávky korektury diplomové práce',
    name: 'Potvrzení',
    description: 'Jakmile nabídku potvrdíte, ihned se pustíme do práce.',
    highlight: true,
  },
  {
    img: '/images/icons/vyhotoveni-korektura-diplomky.png',
    alt: 'Vyhotovení korektury diplomových prací',
    name: 'Finále',
    description: 'Opravenou diplomovou práci vám zašleme ke kontrole.',
    highlight: false,
  },
  {
    img: '/images/icons/schvaleni-korektura-diplomky.png',
    alt: 'Schválení finální verze korektury diplomové práce',
    name: 'Schválení',
    description: 'Pokud je potřeba, doladíme poslední detaily.',
    highlight: false,
  },
  {
    img: '/images/icons/tisk-vazba-diplomova-prace.png',
    alt: 'Tisk a vazba diplomové práce po korektuře',
    name: 'Tisk a vazba',
    description: 'Na přání zajistíme i profesionální tisk a pevnou vazbu.',
    highlight: true,
  },
  {
    img: '/images/icons/predani-korektura-diplomky.png',
    alt: 'Předání hotové diplomové práce',
    name: 'Předání',
    description: 'Výtisky si vyzvednete v Praze nebo je doručíme na adresu.',
    highlight: false,
  },
  {
    img: '/images/icons/platba-korektura-diplomky.png',
    alt: 'Platba za korekturu diplomové práce',
    name: 'Platba',
    description: 'Zašleme fakturu – platba pohodlně převodem na účet.',
    highlight: false,
  },
]

export default function Process() {
  return (
    <section id="postup" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="section-title text-navy mb-4">Jak probíhá spolupráce?</h2>
        <p className="section-subtitle text-text-dark mb-14">
          Celý proces je navržen tak, abyste měli co nejméně starostí. Od prvního
          kontaktu po odevzdání hotové diplomové práce – vše zvládneme rychle,
          přehledně a bez komplikací.
        </p>

        {/* Desktop – timeline with horizontal connector line */}
        <div className="hidden lg:block relative">
          {/* Horizontal connector */}
          <div
            className="absolute"
            style={{
              top: '32px',
              left: `${100 / steps.length / 2}%`,
              right: `${100 / steps.length / 2}%`,
              height: '1px',
              backgroundColor: 'rgba(13,31,45,0.12)',
            }}
          />
          <div className="flex justify-between">
            {steps.map((step) => (
              <div
                key={step.name}
                className="flex flex-col items-center relative"
                style={{ width: `${100 / steps.length}%` }}
              >
                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-3 relative z-10"
                  style={{
                    backgroundColor: step.highlight ? '#1a7a68' : 'white',
                    border: step.highlight ? 'none' : '2px solid #e5e7eb',
                  }}
                >
                  <Image
                    src={step.img}
                    alt={step.alt}
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>

                <h3
                  className="font-headings font-bold text-xs leading-tight mb-1"
                  style={{ color: step.highlight ? '#1a7a68' : '#0d1f2d' }}
                >
                  {step.name}
                </h3>
                <p className="text-text-dark leading-snug" style={{ fontSize: '11px', maxWidth: '72px' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet – numbered list */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
            {steps.map((step, i) => (
              <div
                key={`desc-${step.name}`}
                className="flex items-start gap-3 px-4 py-3 bg-bg-light border-l-2"
                style={{ borderColor: step.highlight ? '#1a7a68' : '#0d1f2d' }}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 text-white text-xs rounded-full flex items-center justify-center font-bold mt-0.5"
                  style={{ backgroundColor: step.highlight ? '#1a7a68' : '#0d1f2d' }}
                >
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-sm" style={{ color: step.highlight ? '#1a7a68' : '#0d1f2d' }}>
                    {step.name}
                  </div>
                  <div className="text-text-dark text-sm leading-snug">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
