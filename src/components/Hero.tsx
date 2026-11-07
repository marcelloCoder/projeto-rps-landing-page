import { messages, proofs, whatsappHref } from '../content/site.ts'
import { outlineLink, primaryLink } from './ui.ts'

export function Hero() {
  return (
    <section id="topo" className="hero-stage scroll-mt-24 border-b border-white/10">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-sheen" />
        <div className="hero-scrim" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-sm font-medium tracking-wide text-muted">
          RPS Auto Motors · Belo Horizonte-MG
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          Compra, venda e financiamento de motos
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Motos revisadas, preço justo e com garantia.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className={primaryLink} href={whatsappHref(messages.hero)}>
            Falar no WhatsApp
          </a>
          <a className={outlineLink} href="#a-venda">
            Ver motos à venda
          </a>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {proofs.map((item, index) => (
            <li
              key={item}
              className="proof-card flex min-h-20 items-center justify-center rounded-2xl px-4 py-5 text-center text-base font-bold tracking-tight"
              style={{ animationDelay: `${index * 120}ms, ${550 + index * 120}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
