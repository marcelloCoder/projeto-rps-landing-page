import { useEffect, useState } from 'react'
import { messages, nav, whatsappHref } from '../content/site.ts'
import { primaryLink } from './ui.ts'
import { Logo } from './Logo.tsx'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#topo" className="flex min-h-11 items-center gap-3" onClick={() => setOpen(false)}>
          <Logo />
          <span className="text-sm font-semibold tracking-tight">RPS Auto Motors</span>
        </a>
        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-3 text-sm text-muted hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className={`${primaryLink} ml-auto md:ml-2`} href={whatsappHref(messages.general)}>
          WhatsApp
        </a>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          <span aria-hidden="true" className="flex w-4 flex-col gap-1">
            <span className="h-0.5 bg-paper" />
            <span className="h-0.5 bg-paper" />
            <span className="h-0.5 bg-paper" />
          </span>
        </button>
      </div>
      <nav
        id="menu-mobile"
        className={open ? 'border-t border-white/10 px-4 py-3 md:hidden' : 'hidden'}
        aria-label="Seções"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex min-h-11 items-center text-base"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
