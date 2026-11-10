import { useState } from 'react'
import { messages, whatsappHref, type Motorcycle } from '../content/site.ts'
import { outlineLink } from './ui.ts'

type GalleryProps = {
  id: string
  eyebrow: string
  title: string
  text: string
  bikes: Motorcycle[]
  initialCount: number
  mode: 'sale' | 'sold'
}

export function Gallery({ id, eyebrow, title, text, bikes, initialCount, mode }: GalleryProps) {
  const [open, setOpen] = useState(false)
  const visible = open ? bikes : bikes.slice(0, initialCount)
  const canToggle = bikes.length > initialCount

  return (
    <section id={id} className="scroll-mt-24 border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-sm font-medium tracking-wide text-muted">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{text}</p>
        <ul className="mt-10 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((bike, bikeIndex) => (
            <li key={bike.id}>
              <article className="flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-white/10">
                <div className="flex flex-col gap-2 p-2">
                  {bike.images.map((image, imageIndex) => (
                    <img
                      key={`${bike.id}-${image.src}`}
                      src={image.src}
                      alt={
                        bike.images.length > 1
                          ? `${bike.alt} — foto ${imageIndex + 1}`
                          : bike.alt
                      }
                      width={image.width}
                      height={image.height}
                      loading={mode === 'sale' && bikeIndex < 2 && imageIndex === 0 ? 'eager' : 'lazy'}
                      fetchPriority={
                        mode === 'sale' && bikeIndex === 0 && imageIndex === 0 ? 'high' : undefined
                      }
                      decoding="async"
                      className={`w-full rounded-xl object-cover ${
                        image.width >= image.height ? 'aspect-video' : 'aspect-[4/5]'
                      } ${bike.fit === 'bottom' ? 'object-bottom' : 'object-center'}`}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-4 p-4 pt-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold leading-snug">{bike.name}</h3>
                      {bike.priceLabel ? (
                        <p className="mt-1 text-sm font-semibold text-paper">{bike.priceLabel}</p>
                      ) : null}
                    </div>
                    <span
                      className={
                        mode === 'sale'
                          ? 'shrink-0 rounded-full bg-lime px-2.5 py-1 text-xs font-semibold text-ink'
                          : 'shrink-0 rounded-full border border-white/20 px-2.5 py-1 text-xs font-semibold'
                      }
                    >
                      {mode === 'sale' ? 'À venda' : 'Vendida'}
                    </span>
                  </div>
                  <div className="mt-auto flex flex-col items-start gap-3">
                    {mode === 'sale' ? (
                      <a className={outlineLink} href={whatsappHref(messages.bike(bike.name))}>
                        Quero esta moto
                      </a>
                    ) : null}
                    {bike.postUrl ? (
                      <a
                        className="inline-flex min-h-11 items-center text-sm font-medium underline decoration-white/30 underline-offset-4 hover:decoration-white"
                        href={bike.postUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver post
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        {canToggle ? (
          <button
            type="button"
            className={`${outlineLink} mt-8`}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Mostrar menos' : 'Ver todas'}
          </button>
        ) : null}
      </div>
    </section>
  )
}
