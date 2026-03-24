import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Props {
  title: string
  lastUpdated?: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Page header */}
        <div style={{ backgroundColor: '#0d1f2d' }} className="py-14">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="font-headings font-bold text-white text-3xl md:text-4xl">{title}</h1>
            {lastUpdated && (
              <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Poslední aktualizace: {lastUpdated}
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 py-14">
          <div className="prose-legal">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
