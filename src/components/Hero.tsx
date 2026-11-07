import { useRef, useState } from 'react'
import { messages, proofs, whatsappHref } from '../content/site.ts'
import { outlineLink, primaryLink } from './ui.ts'

function PresentationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  function play() {
    void videoRef.current?.play()
  }

  return (
    <figure className="order-1 mx-auto w-full max-w-[17rem] md:order-none md:mx-0 md:max-w-none md:justify-self-end">
      <div className="relative overflow-hidden rounded-3xl bg-black shadow-[0_24px_70px_rgb(0_0_0/50%)] ring-1 ring-lime/40">
        <video
          ref={videoRef}
          className="aspect-[9/16] w-full object-cover"
          controls={started}
          playsInline
          preload="metadata"
          poster="/videos/anuncio1-poster.jpg"
          width={720}
          height={1280}
          onPlay={() => setStarted(true)}
          aria-label="Vídeo de apresentação da RPS Auto Motors"
        >
          <source src="/videos/anuncio1.mp4" type="video/mp4" />
        </video>
        {started ? null : (
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center bg-black/20"
            onClick={play}
          >
            <span className="sr-only">Reproduzir a apresentação da RPS Auto Motors</span>
            <span
              aria-hidden="true"
              className="flex size-16 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_32px_rgb(214_255_58/55%)]"
            >
              <svg viewBox="0 0 24 24" className="ml-1 size-7 fill-current">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-center text-sm font-medium text-muted">
        Apresentação da RPS Auto Motors
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <section id="topo" className="hero-stage scroll-mt-24 border-b border-white/10">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-sheen" />
        <div className="hero-scrim" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] md:gap-x-12 lg:gap-x-16">
          <div className="contents md:flex md:flex-col md:gap-5">
            <p className="text-sm font-medium tracking-wide text-muted">
              RPS Auto Motors · Belo Horizonte-MG
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Compra, venda e financiamento de motos
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              Motos revisadas, preço justo e com garantia.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className={primaryLink} href={whatsappHref(messages.hero)}>
                Falar no WhatsApp
              </a>
              <a className={outlineLink} href="#a-venda">
                Ver motos à venda
              </a>
            </div>
          </div>
          <PresentationVideo />
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
