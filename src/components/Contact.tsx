import { instagramUrl, messages, whatsappHref } from '../content/site.ts'
import { primaryLink } from './ui.ts'

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-sm font-medium tracking-wide text-muted">Contato</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          O atendimento começa no WhatsApp
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          RPS Auto Motors · Belo Horizonte-MG. Sem endereço publicado no perfil.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4">
          <a className={primaryLink} href={whatsappHref(messages.contact)}>
            Falar no WhatsApp
          </a>
          <a
            className="inline-flex min-h-11 items-center text-sm font-medium underline decoration-white/30 underline-offset-4"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Instagram @rpsautomotors
          </a>
        </div>
      </div>
    </section>
  )
}
