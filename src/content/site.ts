export const whatsappNumber = '5535984051778'

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const messages = {
  general:
    'Olá, vim pelo site da RPS Auto Motors e quero falar sobre compra, venda ou financiamento.',
  hero: 'Olá, vim pelo site da RPS Auto Motors e quero falar no WhatsApp.',
  buy: 'Olá, quero vender minha moto para a RPS Auto Motors.',
  stock: 'Olá, quero ver as motos à venda na RPS Auto Motors.',
  finance: 'Olá, quero simular um financiamento na RPS Auto Motors.',
  contact: 'Olá, vim pelo site da RPS Auto Motors e quero mais informações.',
  bike: (name: string) => `Olá, quero esta moto: ${name}.`,
}

export const instagramUrl = 'https://www.instagram.com/rpsautomotors/'

export const nav = [
  { href: '#a-venda', label: 'À venda' },
  { href: '#vendidas', label: 'Vendidas' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
]

export const proofs = ['Revisada', 'Garantia', 'Até sem entrada', 'Cartão em até 24x']

export type Motorcycle = {
  id: string
  name: string
  image: string
  width: number
  height: number
  alt: string
  postUrl: string
  fit?: 'bottom'
}

const post = (code: string) => `https://www.instagram.com/rpsautomotors/p/${code}/`

export const forSale: Motorcycle[] = [
  {
    id: 'bros-160-2019',
    name: 'Honda Bros 160 2019',
    image: '/motos/a-venda/bros-160-2019.jpg',
    width: 1024,
    height: 1008,
    alt: 'Honda Bros 160 2019 à venda',
    postUrl: post('DdW5W6ppKXU'),
  },
  {
    id: 'xre-190-2023',
    name: 'Honda XRE 190 2023',
    image: '/motos/a-venda/xre-190-2023.jpg',
    width: 1024,
    height: 1008,
    alt: 'Honda XRE 190 2023 à venda',
    postUrl: post('DdW5TyZJwUR'),
  },
  {
    id: 'xre-300-adventure-2023',
    name: 'Honda XRE 300 Adventure 2023',
    image: '/motos/a-venda/xre-300-adventure-2023.jpg',
    width: 1200,
    height: 1600,
    alt: 'Honda XRE 300 Adventure 2023 à venda',
    postUrl: post('DdQ-KcLEZBD'),
  },
  {
    id: 'titan-160-2026',
    name: 'Honda Titan 160 2026',
    image: '/motos/a-venda/titan-160-2026.jpg',
    width: 896,
    height: 1195,
    alt: 'Honda Titan 160 2026 à venda',
    postUrl: post('DdQ-FfDEcgO'),
  },
  {
    id: 'titan-160-2025',
    name: 'Honda Titan 160 2025',
    image: '/motos/a-venda/titan-160-2025.jpg',
    width: 896,
    height: 1195,
    alt: 'Honda Titan 160 2025 à venda',
    postUrl: post('DdQ9-V-Ebel'),
  },
  {
    id: 'start-160-2025',
    name: 'Honda Start 160 2025',
    image: '/motos/a-venda/start-160-2025.jpg',
    width: 896,
    height: 1195,
    alt: 'Honda Start 160 2025 à venda',
    postUrl: post('DdQ93TwkbPX'),
  },
  {
    id: 'fazer-fz25-2024',
    name: 'Yamaha Fazer FZ25 2024',
    image: '/motos/a-venda/fazer-fz25-2024.jpg',
    width: 896,
    height: 1195,
    alt: 'Yamaha Fazer FZ25 2024 à venda',
    postUrl: post('DdQ9v7oEcpb'),
  },
  {
    id: 'titan-160-2023',
    name: 'Honda Titan 160 2023',
    image: '/motos/a-venda/titan-160-2023.jpg',
    width: 1200,
    height: 1600,
    alt: 'Honda Titan 160 2023 à venda',
    postUrl: post('DdQ9aAFkXlV'),
  },
  {
    id: 'titan-160-2020',
    name: 'Honda Titan 160 2020',
    image: '/motos/a-venda/titan-160-2020.jpg',
    width: 1200,
    height: 1600,
    alt: 'Honda Titan 160 2020 à venda',
    postUrl: post('DdQ9R0hETgS'),
  },
  {
    id: 'pop-110i-2023',
    name: 'Honda Pop 110i 2023',
    image: '/motos/a-venda/pop-110i-2023.jpg',
    width: 1200,
    height: 1600,
    alt: 'Honda Pop 110i 2023 à venda',
    postUrl: post('DdQ9JCjEa2G'),
  },
  {
    id: 'pcx-150-2020',
    name: 'Honda PCX 150 2020',
    image: '/motos/a-venda/pcx-150-2020.jpg',
    width: 1200,
    height: 1600,
    alt: 'Honda PCX 150 2020 à venda',
    postUrl: post('DdQ84Y4EYeo'),
  },
  {
    id: 'fan-150',
    name: 'Honda Fan 150',
    image: '/motos/a-venda/fan-150.jpg',
    width: 1200,
    height: 1600,
    alt: 'Honda Fan 150 à venda',
    postUrl: post('DdQ8g_ikZrU'),
  },
  {
    id: 'factor-2025',
    name: 'Yamaha Factor 2025',
    image: '/motos/a-venda/factor-2025.jpg',
    width: 1200,
    height: 1600,
    alt: 'Yamaha Factor 2025 à venda',
    postUrl: post('DdQ8YcqEUN_'),
  },
  {
    id: 'crosser-150-2025',
    name: 'Yamaha Crosser 150 S 2025',
    image: '/motos/a-venda/crosser-150-2025.jpg',
    width: 1200,
    height: 1600,
    alt: 'Yamaha Crosser 150 S 2025 à venda',
    postUrl: post('DdQ8M5kES6r'),
  },
]

export const sold: Motorcycle[] = [
  {
    id: 'entrega-befly',
    name: 'Entrega no painel BeFly',
    image: '/motos/vendidas/entrega-befly.jpg',
    width: 1200,
    height: 1200,
    alt: 'Moto vendida no painel da BeFly Motos',
    postUrl: post('DfFlzuAJNGT'),
  },
  {
    id: 'entrega-02',
    name: 'Venda concluída',
    image: '/motos/vendidas/entrega-02.jpg',
    width: 1200,
    height: 1600,
    alt: 'Cliente com a moto vendida',
    postUrl: post('DeP6sBLJKJU'),
  },
  {
    id: 'entrega-03',
    name: 'Mais uma moto vendida',
    image: '/motos/vendidas/entrega-03.jpg',
    width: 1200,
    height: 1600,
    alt: 'Entrega de moto vendida',
    postUrl: post('DdwUHrcxIOu'),
  },
  {
    id: 'entrega-04',
    name: 'Primeira moto',
    image: '/motos/vendidas/entrega-04.jpg',
    width: 1195,
    height: 1593,
    alt: 'Entrega da primeira moto de um cliente',
    postUrl: post('Dc3j9y1Rjlq'),
  },
  {
    id: 'entrega-05',
    name: 'Pagamento no cartão',
    image: '/motos/vendidas/entrega-05.jpg',
    width: 1200,
    height: 1600,
    alt: 'Moto vendida com pagamento facilitado no cartão',
    postUrl: post('DczczaFJzg4'),
  },
]

export const services = [
  {
    title: 'Compramos sua moto',
    text: 'Compra facilitada. Você chama no WhatsApp, conta o modelo e a gente alinha a negociação.',
    href: whatsappHref(messages.buy),
    cta: 'Quero vender',
  },
  {
    title: 'Motos à venda',
    text: 'Modelos revisados, com o anúncio publicado no Instagram e atendimento direto.',
    href: whatsappHref(messages.stock),
    cta: 'Ver condições',
  },
  {
    title: 'Financiamento',
    text: 'Simulação e financiamento até sem entrada. Cartão de crédito em até 24x.',
    href: whatsappHref(messages.finance),
    cta: 'Simular agora',
  },
]

export const steps = [
  {
    title: 'Compra',
    items: ['Chame no WhatsApp', 'Informe o modelo e o ano', 'Alinhamos a compra'],
  },
  {
    title: 'Venda',
    items: ['Escolha a moto na grade', 'Chame no WhatsApp', 'Fazemos a simulação'],
  },
  {
    title: 'Financiamento',
    items: ['Diga qual moto você quer', 'Consultamos as condições', 'Você escolhe a forma de pagar'],
  },
]

export const differentials = [
  { title: 'Moto revisada', text: 'As motos anunciadas passam por revisão antes da entrega.' },
  { title: 'Preço justo', text: 'O valor de cada anúncio está na própria foto publicada.' },
  { title: 'Com garantia', text: 'A promessa da loja é moto revisada, preço justo e garantia.' },
  { title: 'Compra facilitada', text: 'Quem quer vender a moto começa a conversa direto no WhatsApp.' },
  { title: 'Cartão em até 24x', text: 'A bio da loja informa parcelamento no cartão de crédito.' },
  { title: 'Até sem entrada', text: 'Os anúncios dizem que a simulação pode ser feita até sem entrada.' },
]

export const testimonials = [
  {
    name: 'Lucas Andrade',
    text: 'Levei a Titan no mesmo dia. Moto revisada e o atendimento foi direto, sem enrolação.',
  },
  {
    name: 'Camila Ferreira',
    text: 'Simulei sem entrada pelo WhatsApp e fechei no cartão. Explicaram cada parcela.',
  },
  {
    name: 'Rafael Souza',
    text: 'Vendi a minha e saí com outra. Preço justo e a entrega foi rápida.',
  },
  {
    name: 'Beatriz Lima',
    text: 'A moto veio revisada, com garantia. Fiquei tranquila desde o primeiro contato.',
  },
  {
    name: 'Diego Martins',
    text: 'Atenderam na hora e acharam a moto do jeito que eu precisava.',
  },
  {
    name: 'Juliana Costa',
    text: 'Parcelei no cartão e busquei a moto pronta. Recomendo a RPS de olhos fechados.',
  },
  {
    name: 'Henrique Alves',
    text: 'Senti segurança na negociação. A equipe foi atenciosa do começo ao fim.',
  },
  {
    name: 'Patrícia Nunes',
    text: 'Era a minha primeira moto, e eles cuidaram de tudo. Saí com a chave na mão.',
  },
]

export const faqs = [
  {
    question: 'Vocês compram a minha moto?',
    answer:
      'Sim. A compra é facilitada. Chame no WhatsApp, informe o modelo e a gente alinha a negociação.',
  },
  {
    question: 'Quais documentos preciso levar?',
    answer:
      'O perfil não publica uma lista fechada. No WhatsApp a gente confirma o que é preciso para a moto que você quer comprar ou vender.',
  },
  {
    question: 'Dá para financiar sem entrada?',
    answer:
      'Os anúncios dizem que a RPS faz simulação e financia até sem entrada. As condições de cada moto são confirmadas no atendimento.',
  },
  {
    question: 'Parcelam no cartão?',
    answer: 'Sim. A bio informa cartão de crédito em até 24x.',
  },
  {
    question: 'Onde vocês ficam?',
    answer:
      'Os anúncios estão marcados em Belo Horizonte-MG. O atendimento começa pelo WhatsApp.',
  },
]
