import { testimonials } from '../content/site.ts'

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

function ClientCard({
  name,
  text,
  lime,
}: {
  name: string
  text: string
  lime: boolean
}) {
  return (
    <figure
      className={`client-card ${lime ? 'client-card-lime' : 'client-card-ink'}`}
    >
      <blockquote className="text-lg font-semibold leading-snug">“{text}”</blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold ${
            lime ? 'bg-ink text-lime' : 'bg-lime text-ink'
          }`}
          aria-hidden="true"
        >
          {initials(name)}
        </span>
        <span>
          <span className="block text-sm font-bold">{name}</span>
          <span className={`block text-xs ${lime ? 'text-ink/70' : 'text-muted'}`}>
            Cliente · Belo Horizonte
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

export function Clients() {
  return (
    <section id="clientes" className="scroll-mt-24 overflow-hidden border-b border-white/10 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-muted">Clientes</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Quem já levou a moto para casa
        </h2>
      </div>
      <div className="client-marquee mt-10">
        <div className="client-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="client-group" aria-hidden={copy === 1 || undefined}>
              {testimonials.map((item, index) => (
                <li key={`${item.name}-${copy}`}>
                  <ClientCard name={item.name} text={item.text} lime={index % 2 === 0} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
