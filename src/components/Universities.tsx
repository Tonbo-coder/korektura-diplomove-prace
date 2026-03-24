import Image from 'next/image'

const universities = [
  { src: '/images/formatujeme/ceska-zemedelska-univerzita-v-praze.jpg', alt: 'ČZU Praha: Korektura diplomových prací', title: 'Česká zemědělská univerzita v Praze' },
  { src: '/images/formatujeme/vysoka-skola-ekonomicka-v-praze.jpg', alt: 'VŠE Praha: Korektura diplomových prací v ekonomii', title: 'Vysoká škola ekonomická v Praze' },
  { src: '/images/formatujeme/katolicka-univerzita-v-ruzomberku.jpg', alt: 'Korektura pro KU Ružomberok', title: 'Katolícka univerzita v Ružomberku' },
  { src: '/images/formatujeme/ekonomicka-univerzita-v-bratislave.jpg', alt: 'Korektura diplomových prací: Ekonomická univerzita Bratislava', title: 'Ekonomická univerzita v Bratislave' },
  { src: '/images/formatujeme/mendelova-univerzita-v-brne.jpg', alt: 'Mendelova univerzita Brno: Jazyková korektura diplomek', title: 'Mendelova univerzita v Brně' },
  { src: '/images/formatujeme/metropolitni-univerzita-praha.jpg', alt: 'Metropolitní univerzita Praha: Korektura a stylistika diplomových prací', title: 'Metropolitní univerzita Praha' },
  { src: '/images/formatujeme/newton-college.jpg', alt: 'Newton College: Korektura a úprava diplomových prací', title: 'NEWTON University' },
  { src: '/images/formatujeme/technicka-univerzita-v-liberci.jpg', alt: 'TUL Liberec: Korektura pro technické obory', title: 'Technická univerzita v Liberci' },
  { src: '/images/formatujeme/unicorn-college.jpg', alt: 'Unicorn College: Korektura a jazyková úprava diplomek', title: 'Unicorn Vysoká škola' },
  { src: '/images/formatujeme/univerzita-jana-amose-komenskeho.jpg', alt: 'Univerzita J.A. Komenského: Korektura diplomových prací', title: 'Univerzita Jana Amose Komenského Praha' },
  { src: '/images/formatujeme/univerzita-karlova-v-praze.jpg', alt: 'UK Praha: Profesionální korektura diplomových prací', title: 'Univerzita Karlova v Praze' },
  { src: '/images/formatujeme/ceske-vysoke-uceni-technicke-v-praze.jpg', alt: 'ČVUT Praha: Jazyková korektura diplomových prací', title: 'České vysoké učení technické v Praze' },
]

export default function Universities() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="section-title text-navy mb-4">Kde všude jsme dělali korekturu diplomové práce?</h2>
        <p className="section-subtitle text-text-dark mb-12">
          Spolupracujeme se studenty desítek univerzit po celé České i Slovenské republice.
          Naše korektorské služby využívají také firmy a akademické instituce, které oceňují
          individuální přístup a precizní jazykovou úroveň.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {universities.map((u) => (
            <div
              key={u.title}
              className="flex items-center justify-center p-2"
              title={u.title}
            >
              <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
                <Image
                  src={u.src}
                  alt={u.alt}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
