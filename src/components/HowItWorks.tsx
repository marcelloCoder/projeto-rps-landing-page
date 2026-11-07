import { steps } from '../content/site.ts'

export function HowItWorks() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-sm font-medium tracking-wide text-muted">Como funciona</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Três passos, sem formulário
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          O caminho inteiro aparece aqui. Nada fica escondido atrás de uma aba.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((group) => (
            <article key={group.title} className="rounded-2xl bg-card p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <ol className="mt-5 space-y-4">
                {group.items.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-lime text-sm font-semibold text-ink">
                      {index + 1}
                    </span>
                    <span className="pt-1 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
