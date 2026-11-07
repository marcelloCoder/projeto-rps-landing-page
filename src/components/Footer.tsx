import { instagramUrl, messages, nav, whatsappHref } from '../content/site.ts'

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-28 md:pb-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold">RPS Auto Motors</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            Compra, venda e financiamento de motos. Belo Horizonte-MG.
          </p>
        </div>
        <nav className="flex flex-col" aria-label="Rodapé">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-sm text-muted hover:text-paper">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col">
          <a className="inline-flex min-h-11 items-center text-sm hover:text-white" href={whatsappHref(messages.contact)}>
            WhatsApp
          </a>
          <a
            className="inline-flex min-h-11 items-center text-sm text-muted hover:text-paper"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
