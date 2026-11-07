import { differentials } from '../content/site.ts'

export function Differentials() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-sm font-medium tracking-wide text-muted">Por que chamar</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          O que a loja oferece
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <li key={item.title} className="rounded-2xl bg-card p-6 ring-1 ring-white/10">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
