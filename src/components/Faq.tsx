import { useState } from 'react'
import { faqs } from '../content/site.ts'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="duvidas" className="scroll-mt-24 border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-sm font-medium tracking-wide text-muted">Dúvidas</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Antes de chamar
        </h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl bg-card ring-1 ring-white/10">
          {faqs.map((item, index) => {
            const open = openIndex === index
            const panelId = `faq-${index}`
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    {item.question}
                    <span aria-hidden="true" className="text-muted">
                      {open ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" hidden={!open} className="px-5 pb-5 leading-relaxed text-muted">
                  {item.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
