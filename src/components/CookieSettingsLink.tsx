'use client'

export default function CookieSettingsLink() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
      className="text-xs text-white/45 hover:text-white/70 transition-colors py-2 bg-transparent border-none cursor-pointer"
      style={{ fontFamily: 'inherit' }}
    >
      Nastavení cookies
    </button>
  )
}
