import { services } from '../content/site.ts'
import { outlineLink } from './ui.ts'

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-sm font-medium tracking-wide text-muted">O que a loja faz</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Compra, venda e financiamento
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Três caminhos, o mesmo atendimento: você chama e a conversa segue no WhatsApp.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{service.text}</p>
              <a className={`${outlineLink} mt-6 self-start`} href={service.href}>
                {service.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
