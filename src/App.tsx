import { forSale, sold } from './content/site.ts'
import { Clients } from './components/Clients.tsx'
import { Contact } from './components/Contact.tsx'
import { Differentials } from './components/Differentials.tsx'
import { Faq } from './components/Faq.tsx'
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx'
import { Footer } from './components/Footer.tsx'
import { Gallery } from './components/Gallery.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { HowItWorks } from './components/HowItWorks.tsx'
import { Services } from './components/Services.tsx'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Gallery
          id="a-venda"
          eyebrow="Estoque publicado"
          title="Motos à venda"
          text="Cada anúncio mostra o modelo, o ano e o valor na própria foto."
          bikes={forSale}
          initialCount={6}
          mode="sale"
        />
        <Gallery
          id="vendidas"
          eyebrow="Entregas"
          title="Motos vendidas"
          text="Registros de entrega publicados pela loja. Estes anúncios já saíram."
          bikes={sold}
          initialCount={3}
          mode="sold"
        />
        <Services />
        <HowItWorks />
        <Differentials />
        <Clients />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
