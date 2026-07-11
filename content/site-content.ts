export type SocialLink = {
  platform: string;
  label: string;
  url: string;
  description: string;
  cta: string;
};

export type FeaturedContent = {
  id: string;
  title: string;
  platform: string;
  category: string;
  description: string;
  url: string;
  thumbnail: string;
  isPlaceholder: boolean;
};

export type PodcastEpisode = {
  id: string;
  title: string;
  summary: string;
  url: string;
  date?: string;
  isPlaceholder: boolean;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  format: string;
  priceInCents: number | null;
  notes: string;
  whatsappMessage: string;
  isPlaceholder: boolean;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  isPlaceholder: boolean;
};

export type SiteContent = {
  general: { name: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    primaryCtaUrl: string;
    secondaryCta: string;
    secondaryCtaUrl: string;
  };
  about: { eyebrow: string; title: string; description: string; image: string; alt: string; isPlaceholder: boolean };
  socialLinks: SocialLink[];
  featuredContent: FeaturedContent[];
  podcast: { title: string; description: string; url: string; episodes: PodcastEpisode[] };
  services: Service[];
  faq: FaqItem[];
  responsibleNotice: string;
  contact: {
    title: string;
    description: string;
    whatsappNumber: string | null;
    whatsappMessage: string;
    whatsappLabel: string;
    whatsappUnavailableLabel: string;
  };
};

export const siteContent: SiteContent = {
  general: {
    name: "Natascha Sant’ Anna",
    description: "[PREENCHER: descrição geral confirmada pela cliente]",
  },
  hero: {
    eyebrow: "Tarot, espiritualidade e autoconhecimento",
    title: "[PREENCHER: título principal aprovado pela cliente]",
    description: "[PREENCHER: apresentação curta aprovada pela cliente]",
    primaryCta: "Conheça os conteúdos",
    primaryCtaUrl: "#conteudos",
    secondaryCta: "Ver atendimentos",
    secondaryCtaUrl: "#atendimentos",
  },
  about: {
    eyebrow: "Sobre",
    title: "Sobre Natascha",
    description: "[PREENCHER: biografia confirmada pela cliente]",
    image: "/natascha-brand-cover.png",
    alt: "Identidade visual oficial de Natascha Sant’Anna com cartas de tarot",
    isPlaceholder: false,
  },
  socialLinks: [
    { platform: "Notion", label: "Materiais e informações", url: "https://humdrum-zenobia-de5.notion.site/Natascha-Sant-Anna-39950c105011801a83cecbf0191dfe09", description: "Página oficial com materiais e informações.", cta: "Acessar página oficial" },
    { platform: "Notion", label: "Catálogo de atendimentos", url: "https://humdrum-zenobia-de5.notion.site/Leituras-de-Tarot-39850c10501180509e84ecd7128fb112", description: "Página oficial com leituras, pacotes e valores.", cta: "Ver catálogo oficial" },
    { platform: "TikTok", label: "TikTok", url: "https://www.tiktok.com/@nataschacomsc", description: "Perfil oficial no TikTok.", cta: "Ver no TikTok" },
    { platform: "YouTube", label: "YouTube", url: "https://www.youtube.com/@NataschaSantAnnaTarot", description: "Canal oficial no YouTube.", cta: "Ver no YouTube" },
    { platform: "Spotify", label: "Podcast 3 de copas", url: "https://open.spotify.com/show/033DutTze6u2bl66LJ5HS4", description: "Podcast 3 de copas — por Natascha Sant’ Anna.", cta: "Ouvir no Spotify" },
    { platform: "Instagram", label: "Instagram", url: "https://www.instagram.com/nataschacomsc/", description: "Perfil oficial no Instagram.", cta: "Ver no Instagram" },
  ],
  featuredContent: [{ id: "featured-placeholder", title: "[PREENCHER: conteúdo destacado]", platform: "[PREENCHER: plataforma]", category: "[PREENCHER: categoria]", description: "[PREENCHER: descrição]", url: "#", thumbnail: "[PREENCHER: thumbnail oficial]", isPlaceholder: true }],
  podcast: {
    title: "3 de copas — por Natascha Sant’ Anna",
    description: "[PREENCHER: descrição confirmada do podcast]",
    url: "https://open.spotify.com/show/033DutTze6u2bl66LJ5HS4",
    episodes: [{ id: "episode-placeholder", title: "[PREENCHER: episódio]", summary: "[PREENCHER: resumo do episódio]", url: "#", isPlaceholder: true }],
  },
  services: [
    {
      id: "amor-caminho",
      name: "Decifrando meu Caminho no Amor",
      description: "Leitura para compreender sua energia amorosa, influências do passado, padrões de atração e o que o Tarot orienta para este momento.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 10700,
      notes: "Indicada para pessoas solteiras ou comprometidas. Inclui conselho final do Tarot.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a leitura Decifrando meu Caminho no Amor.",
      isPlaceholder: false,
    },
    {
      id: "amor-raio-x",
      name: "Raio X da Relação",
      description: "Leitura para entender como você e a outra pessoa estão se posicionando, o que falta na relação e como fortalecer a conexão.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 5700,
      notes: "Indicada para quem está se envolvendo com alguém.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a leitura Raio X da Relação.",
      isPlaceholder: false,
    },
    {
      id: "amor-verdade",
      name: "A Verdade da Relação",
      description: "Análise da dinâmica da relação, expectativas, aproximações, desgastes, energia atual e possibilidades de futuro.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 11700,
      notes: "Indicada para relacionamentos, envolvimentos ou questões com um ex. Inclui conselho final.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a leitura A Verdade da Relação.",
      isPlaceholder: false,
    },
    {
      id: "profissional-direcao",
      name: "Direção Profissional",
      description: "Leitura sobre sua energia profissional, o caminho atual e o próximo passo importante para seu crescimento.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 5700,
      notes: "Inclui conselho final do Tarot para o momento profissional.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a leitura Direção Profissional.",
      isPlaceholder: false,
    },
    {
      id: "financeira-prosperidade",
      name: "Prosperidade Financeira",
      description: "Leitura sobre energia financeira, bloqueios, oportunidades e caminhos para favorecer sua prosperidade.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 9700,
      notes: "Inclui conselho final do Tarot para a vida financeira.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a leitura Prosperidade Financeira.",
      isPlaceholder: false,
    },
    {
      id: "profissional-caminhos",
      name: "Caminhos Profissionais",
      description: "Leitura sobre potencial de crescimento, bloqueios, evolução na carreira e desafios do caminho profissional.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 12700,
      notes: "Inclui conselho final do Tarot para sua vida profissional.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a leitura Caminhos Profissionais.",
      isPlaceholder: false,
    },
    {
      id: "objetiva-uma",
      name: "1 Pergunta ao Tarot",
      description: "Resposta objetiva para uma pergunta específica sobre qualquer área da sua vida.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 3000,
      notes: "Uma pergunta respondida individualmente pelo Tarot.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre 1 Pergunta ao Tarot.",
      isPlaceholder: false,
    },
    {
      id: "objetiva-trio",
      name: "Trio de Perguntas",
      description: "Três perguntas objetivas sobre uma mesma área ou assuntos diferentes da sua vida.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 8500,
      notes: "Cada pergunta é respondida individualmente. Inclui conselho final do Tarot.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre o Trio de Perguntas.",
      isPlaceholder: false,
    },
    {
      id: "completa-mensal",
      name: "Leitura Mensal",
      description: "Análise da energia predominante, lições do mês e tendências para vida amorosa, profissional, financeira, saúde e bem-estar.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 9700,
      notes: "Inclui conselho final do Tarot para o seu mês.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a Leitura Mensal.",
      isPlaceholder: false,
    },
    {
      id: "completa-triade",
      name: "Tríade da Vida",
      description: "Orientação para vida amorosa, profissional, financeira e direção pessoal.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 12700,
      notes: "Inclui conselho final do Tarot.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a Tríade da Vida.",
      isPlaceholder: false,
    },
    {
      id: "completa",
      name: "Leitura Completa",
      description: "Análise ampla sobre energia atual, vida amorosa, profissional, financeira, saúde, espiritualidade e desafios de cada área.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 25700,
      notes: "Inclui conselho final do Tarot.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a Leitura Completa.",
      isPlaceholder: false,
    },
    {
      id: "completa-aniversario",
      name: "Leitura de Aniversário",
      description: "Leitura para compreender a energia do novo ciclo, aprendizados anteriores, desafios e orientações para diferentes áreas da vida.",
      duration: "A confirmar",
      format: "A confirmar",
      priceInCents: 19700,
      notes: "Inclui conselho final do Tarot para o novo ciclo.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a Leitura de Aniversário.",
      isPlaceholder: false,
    },
    {
      id: "pacote-vip",
      name: "V.I.P. (acompanhamento coletivo)",
      description: "Acompanhamento mensal com Energia da Semana, direcionamentos, sugestão de banho de ervas e bônus de ativação energética e orientação individual.",
      duration: "Mensal",
      format: "A confirmar",
      priceInCents: 8700,
      notes: "Orientações semanais. Contratações de 3, 6 ou 12 meses possuem condições especiais.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre o acompanhamento V.I.P.",
      isPlaceholder: false,
    },
    {
      id: "pacote-individual",
      name: "Acompanhamento Individual",
      description: "Acompanhamento mensal exclusivo com Conselho Mensal e Orientação Amorosa Individual.",
      duration: "Mensal",
      format: "A confirmar",
      priceInCents: 4700,
      notes: "Contratações de 3, 6 ou 12 meses possuem condições especiais.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre o Acompanhamento Individual.",
      isPlaceholder: false,
    },
  ],
  faq: [
    { id: "faq-atendimento", question: "Como funciona o atendimento?", answer: "[PREENCHER: resposta aprovada sobre atendimento]", isPlaceholder: true },
    { id: "faq-formato", question: "Qual é o formato do atendimento?", answer: "[PREENCHER: resposta aprovada sobre formato]", isPlaceholder: true },
    { id: "faq-pagamento", question: "Como funciona o pagamento?", answer: "[PREENCHER: resposta aprovada sobre pagamento]", isPlaceholder: true },
    { id: "faq-reagendamento", question: "Como funciona o reagendamento?", answer: "[PREENCHER: resposta aprovada sobre reagendamento]", isPlaceholder: true },
    { id: "faq-contato", question: "Como posso entrar em contato?", answer: "[PREENCHER: resposta aprovada sobre contato]", isPlaceholder: true },
  ],
  responsibleNotice: "Os conteúdos e as leituras desta página não substituem orientação médica, psicológica, jurídica ou financeira. Eles não constituem diagnóstico, prescrição ou garantia de cura ou resultado.",
  contact: {
    title: "Entre em contato",
    description: "[PREENCHER: instruções de contato]",
    whatsappNumber: null,
    whatsappMessage: "Olá! Gostaria de saber mais sobre os atendimentos.",
    whatsappLabel: "Falar pelo WhatsApp",
    whatsappUnavailableLabel: "WhatsApp indisponível até o cadastro do número oficial",
  },
};
