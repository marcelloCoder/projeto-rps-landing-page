import { useEffect, useState } from 'react'
import { messages, whatsappHref } from '../content/site.ts'

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('topo')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <a
      className="fixed right-4 bottom-4 z-40 inline-flex min-h-11 items-center rounded-full bg-lime px-5 text-sm font-semibold text-ink shadow-lg md:hidden"
      href={whatsappHref(messages.general)}
    >
      WhatsApp
    </a>
  )
}
