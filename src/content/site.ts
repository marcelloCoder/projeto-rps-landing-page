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

export type MotorcycleImage = {
  src: string
  width: number
  height: number
}

export type Motorcycle = {
  id: string
  name: string
  images: MotorcycleImage[]
  alt: string
  postUrl?: string
  priceLabel?: string
  fit?: 'bottom'
}

const post = (code: string) => `https://www.instagram.com/rpsautomotors/p/${code}/`

export const forSale: Motorcycle[] = [
  {
    id: 'cg-titan-160-original-2025-21900',
    name: 'Honda CG Titan 160 Original 2025',
    priceLabel: 'R$ 21.900,00',
    alt: 'Honda CG Titan 160 Original 2025 à venda',
    images: [
      { src: '/motos/a-venda/cg-titan-160-original-2025-21900/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/cg-titan-160-original-2025-21900/02.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/cg-titan-160-original-2025-21900/03.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/cg-titan-160-original-2025-21900/04.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/cg-titan-160-original-2025-21900/05.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/cg-titan-160-original-2025-21900/06.jpg', width: 1280, height: 720 },
    ],
  },
  {
    id: 'cg-titan-160-seta-led-2025-21900',
    name: 'Honda CG Titan 160 Seta LED 2025',
    priceLabel: 'R$ 21.900,00',
    alt: 'Honda CG Titan 160 Seta LED 2025 à venda',
    images: [
      { src: '/motos/a-venda/cg-titan-160-seta-led-2025-21900/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/cg-titan-160-seta-led-2025-21900/02.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/cg-titan-160-seta-led-2025-21900/03.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/cg-titan-160-seta-led-2025-21900/04.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/cg-titan-160-seta-led-2025-21900/05.jpg', width: 720, height: 1280 },
    ],
  },
  {
    id: 'fazer-fz25-2022-21900',
    name: 'Yamaha Fazer FZ25 2022',
    priceLabel: 'R$ 21.900,00',
    alt: 'Yamaha Fazer FZ25 2022 à venda',
    images: [
      { src: '/motos/a-venda/fazer-fz25-2022-21900/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/fazer-fz25-2022-21900/02.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/fazer-fz25-2022-21900/03.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/fazer-fz25-2022-21900/04.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/fazer-fz25-2022-21900/05.jpg', width: 1280, height: 720 },
    ],
  },
  {
    id: 'fazer-150-2021-15490',
    name: 'Yamaha Fazer 150 2021',
    priceLabel: 'R$ 15.490,00',
    alt: 'Yamaha Fazer 150 2021 à venda',
    images: [
      { src: '/motos/a-venda/fazer-150-2021-15490/01.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/fazer-150-2021-15490/02.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/fazer-150-2021-15490/03.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/fazer-150-2021-15490/04.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/fazer-150-2021-15490/05.jpg', width: 720, height: 1280 },
    ],
  },
  {
    id: 'fazer-fz15-2023-17490',
    name: 'Yamaha Fazer FZ15 2023',
    priceLabel: 'R$ 17.490,00',
    alt: 'Yamaha Fazer FZ15 2023 à venda',
    images: [
      { src: '/motos/a-venda/fazer-fz15-2023-17490/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/fazer-fz15-2023-17490/02.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/fazer-fz15-2023-17490/03.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/fazer-fz15-2023-17490/04.jpg', width: 720, height: 1280 },
    ],
  },
  {
    id: 'nxr-bros-2025-24990',
    name: 'Honda NXR Bros 2025',
    priceLabel: 'R$ 24.990,00',
    alt: 'Honda NXR Bros 2025 à venda',
    images: [
      { src: '/motos/a-venda/nxr-bros-2025-24990/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/nxr-bros-2025-24990/02.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/nxr-bros-2025-24990/03.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/nxr-bros-2025-24990/04.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/nxr-bros-2025-24990/05.jpg', width: 720, height: 1280 },
    ],
  },
  {
    id: 'nxr-bros-2024-21900',
    name: 'Honda NXR Bros 2024',
    priceLabel: 'R$ 21.900,00',
    alt: 'Honda NXR Bros 2024 à venda',
    images: [
      { src: '/motos/a-venda/nxr-bros-2024-21900/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/nxr-bros-2024-21900/02.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/nxr-bros-2024-21900/03.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/nxr-bros-2024-21900/04.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/nxr-bros-2024-21900/05.jpg', width: 1280, height: 720 },
    ],
  },
  {
    id: 'sahara-rally-2025-35990',
    name: 'Honda Sahara Rally 2025',
    priceLabel: 'R$ 35.990,00',
    alt: 'Honda Sahara Rally 2025 à venda',
    images: [
      { src: '/motos/a-venda/sahara-rally-2025-35990/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/sahara-rally-2025-35990/02.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/sahara-rally-2025-35990/03.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/sahara-rally-2025-35990/04.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/sahara-rally-2025-35990/05.jpg', width: 720, height: 1280 },
    ],
  },
  {
    id: 'start-160-azul-2026-22290',
    name: 'Honda Start 160 Azul 2026 · 0 km',
    priceLabel: 'R$ 22.290,00',
    alt: 'Honda Start 160 Azul 2026 · 0 km à venda',
    images: [
      { src: '/motos/a-venda/start-160-azul-2026-22290/01.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/start-160-azul-2026-22290/02.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/start-160-azul-2026-22290/03.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/start-160-azul-2026-22290/04.jpg', width: 720, height: 1280 },
    ],
  },
  {
    id: 'start-160-vermelha-2026-22290',
    name: 'Honda Start 160 Vermelha 2026 · 0 km',
    priceLabel: 'R$ 22.290,00',
    alt: 'Honda Start 160 Vermelha 2026 · 0 km à venda',
    images: [
      { src: '/motos/a-venda/start-160-vermelha-2026-22290/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/start-160-vermelha-2026-22290/02.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/start-160-vermelha-2026-22290/03.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/start-160-vermelha-2026-22290/04.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/start-160-vermelha-2026-22290/05.jpg', width: 1280, height: 720 },
    ],
  },
  {
    id: 'start-160-preta-2026-21900',
    name: 'Honda Start 160 Preta 2026 · 336 km',
    priceLabel: 'R$ 21.900,00',
    alt: 'Honda Start 160 Preta 2026 · 336 km à venda',
    images: [
      { src: '/motos/a-venda/start-160-preta-2026-21900/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/start-160-preta-2026-21900/02.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/start-160-preta-2026-21900/03.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/start-160-preta-2026-21900/04.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/start-160-preta-2026-21900/05.jpg', width: 720, height: 1280 },
    ],
  },
  {
    id: 'xre-190-2024-23990',
    name: 'Honda XRE 190 2024',
    priceLabel: 'R$ 23.990,00',
    alt: 'Honda XRE 190 2024 à venda',
    images: [
      { src: '/motos/a-venda/xre-190-2024-23990/01.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/xre-190-2024-23990/02.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/xre-190-2024-23990/03.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/xre-190-2024-23990/04.jpg', width: 720, height: 1280 },
    ],
  },
  {
    id: 'xre-300-2023-31990',
    name: 'Honda XRE 300 2023',
    priceLabel: 'R$ 31.990,00',
    alt: 'Honda XRE 300 2023 à venda',
    images: [
      { src: '/motos/a-venda/xre-300-2023-31990/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/xre-300-2023-31990/02.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/xre-300-2023-31990/03.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/xre-300-2023-31990/04.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/xre-300-2023-31990/05.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/xre-300-2023-31990/06.jpg', width: 1280, height: 720 },
    ],
  },
  {
    id: 'xtz-lander-250-vermelha-2024-27490',
    name: 'Yamaha XTZ Lander 250 Vermelha 2024',
    priceLabel: 'R$ 27.490,00',
    alt: 'Yamaha XTZ Lander 250 Vermelha 2024 à venda',
    images: [
      { src: '/motos/a-venda/xtz-lander-250-vermelha-2024-27490/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/xtz-lander-250-vermelha-2024-27490/02.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/xtz-lander-250-vermelha-2024-27490/03.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/xtz-lander-250-vermelha-2024-27490/04.jpg', width: 720, height: 1280 },
    ],
  },
  {
    id: 'ybr-factor-2022-14990',
    name: 'Yamaha YBR Factor 2022',
    priceLabel: 'R$ 14.990,00',
    alt: 'Yamaha YBR Factor 2022 à venda',
    images: [
      { src: '/motos/a-venda/ybr-factor-2022-14990/01.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/ybr-factor-2022-14990/02.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/ybr-factor-2022-14990/03.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/ybr-factor-2022-14990/04.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/ybr-factor-2022-14990/05.jpg', width: 1280, height: 720 },
    ],
  },
  {
    id: 'ybr-factor-2025-16990',
    name: 'Yamaha YBR Factor 2025',
    priceLabel: 'R$ 16.990,00',
    alt: 'Yamaha YBR Factor 2025 à venda',
    images: [
      { src: '/motos/a-venda/ybr-factor-2025-16990/01.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/ybr-factor-2025-16990/02.jpg', width: 1280, height: 720 },
      { src: '/motos/a-venda/ybr-factor-2025-16990/03.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/ybr-factor-2025-16990/04.jpg', width: 720, height: 1280 },
      { src: '/motos/a-venda/ybr-factor-2025-16990/05.jpg', width: 1280, height: 720 },
    ],
  },
  {
    id: 'titan-160-2025',
    name: 'Honda Titan 160 2025',
    alt: 'Honda Titan 160 2025 à venda',
    postUrl: post('DdQ9-V-Ebel'),
    images: [
      { src: '/motos/a-venda/titan-160-2025.jpg', width: 896, height: 1195 },
    ],
  },
  {
    id: 'titan-160-2020',
    name: 'Honda Titan 160 2020',
    alt: 'Honda Titan 160 2020 à venda',
    postUrl: post('DdQ9R0hETgS'),
    images: [
      { src: '/motos/a-venda/titan-160-2020.jpg', width: 1200, height: 1600 },
    ],
  },
  {
    id: 'pop-110i-2023',
    name: 'Honda Pop 110i 2023',
    alt: 'Honda Pop 110i 2023 à venda',
    postUrl: post('DdQ9JCjEa2G'),
    images: [
      { src: '/motos/a-venda/pop-110i-2023.jpg', width: 1200, height: 1600 },
    ],
  },
  {
    id: 'pcx-150-2020',
    name: 'Honda PCX 150 2020',
    alt: 'Honda PCX 150 2020 à venda',
    postUrl: post('DdQ84Y4EYeo'),
    images: [
      { src: '/motos/a-venda/pcx-150-2020.jpg', width: 1200, height: 1600 },
    ],
  },
  {
    id: 'crosser-150-2025',
    name: 'Yamaha Crosser 150 S 2025',
    alt: 'Yamaha Crosser 150 S 2025 à venda',
    postUrl: post('DdQ8M5kES6r'),
    images: [
      { src: '/motos/a-venda/crosser-150-2025.jpg', width: 1200, height: 1600 },
    ],
  },
]

export const sold: Motorcycle[] = [
  {
    id: 'entrega-befly',
    name: 'Entrega no painel BeFly',
    alt: 'Moto vendida no painel da BeFly Motos',
    postUrl: post('DfFlzuAJNGT'),
    images: [{ src: '/motos/vendidas/entrega-befly.jpg', width: 1200, height: 1200 }],
  },
  {
    id: 'entrega-02',
    name: 'Venda concluída',
    alt: 'Cliente com a moto vendida',
    postUrl: post('DeP6sBLJKJU'),
    images: [{ src: '/motos/vendidas/entrega-02.jpg', width: 1200, height: 1600 }],
  },
  {
    id: 'entrega-03',
    name: 'Mais uma moto vendida',
    alt: 'Entrega de moto vendida',
    postUrl: post('DdwUHrcxIOu'),
    images: [{ src: '/motos/vendidas/entrega-03.jpg', width: 1200, height: 1600 }],
  },
  {
    id: 'entrega-04',
    name: 'Primeira moto',
    alt: 'Entrega da primeira moto de um cliente',
    postUrl: post('Dc3j9y1Rjlq'),
    images: [{ src: '/motos/vendidas/entrega-04.jpg', width: 1195, height: 1593 }],
  },
  {
    id: 'entrega-05',
    name: 'Pagamento no cartão',
    alt: 'Moto vendida com pagamento facilitado no cartão',
    postUrl: post('DczczaFJzg4'),
    images: [{ src: '/motos/vendidas/entrega-05.jpg', width: 1200, height: 1600 }],
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
