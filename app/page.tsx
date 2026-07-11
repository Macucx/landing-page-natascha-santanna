import Image from "next/image";

import { Badge } from "../components/Badge";
import { ButtonLink } from "../components/ButtonLink";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PodcastSection } from "../components/PodcastSection";
import { Section } from "../components/Section";
import { ServiceCard } from "../components/ServiceCard";
import { buildWhatsAppUrl } from "../components/service-utils";
import { siteContent } from "../content/site-content";

const channelPlatforms = ["YouTube", "Spotify", "TikTok", "Instagram"] as const;

function isLocalThumbnail(thumbnail: string) {
  return thumbnail.startsWith("/") && !thumbnail.startsWith("//") && !thumbnail.includes("[PREENCHER:");
}

const navItems = [
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Contato", href: "#contato" },
];

const UPDATED_INFORMATION = "Informação em atualização";

const MOCK_FAQ_ANSWERS: Record<string, string> = {
  "faq-atendimento": "Exemplo demonstrativo: o atendimento começa com uma conversa sobre o tema que você deseja observar.",
  "faq-formato": "Exemplo demonstrativo: a sessão acontece online, em um horário combinado previamente.",
  "faq-pagamento": "Exemplo demonstrativo: as condições de pagamento serão confirmadas antes do agendamento.",
  "faq-reagendamento": "Exemplo demonstrativo: pedidos de reagendamento devem ser feitos com antecedência.",
  "faq-contato": "Exemplo demonstrativo: use o canal de contato indicado quando o número oficial estiver cadastrado.",
};

function isPlaceholderText(value: string) {
  return value.trim().startsWith("[PREENCHER:");
}

function displayContent(value: string, mockValue = UPDATED_INFORMATION) {
  return isPlaceholderText(value) ? mockValue : value;
}

export default function Home() {
  const { general, hero, about, featuredContent, podcast, services, faq, contact, socialLinks } = siteContent;
  const contactWhatsappUrl = buildWhatsAppUrl(contact.whatsappNumber, contact.whatsappMessage);
  const channelLinks = channelPlatforms
    .map((platform) => socialLinks.find((link) => link.platform === platform))
    .filter((link) => link !== undefined);
  const selectedContent = featuredContent.slice(0, 3);
  const instagramLink = socialLinks.find((link) => link.platform === "Instagram");
  const hasAboutBiography = !about.isPlaceholder && !about.description.startsWith("[PREENCHER:");
  const hasLocalAboutImage = !about.isPlaceholder && about.image.startsWith("/") && !about.image.startsWith("//");
  const displayHeroTitle = displayContent(hero.title, "Mais clareza para olhar para dentro");
  const displayHeroDescription = displayContent(
    hero.description,
    "Um exemplo de apresentação para conectar tarot, espiritualidade e autoconhecimento com leveza.",
  );
  const displayAboutDescription = displayContent(
    about.description,
    "Natascha cria este espaço demonstrativo para compartilhar reflexões e ferramentas de autoconhecimento.",
  );
  const displayContactDescription = displayContent(
    contact.description,
    "Escolha o canal que faz sentido para você e acompanhe as próximas atualizações.",
  );

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Header
        brand={general.name}
        navItems={navItems}
        ariaLabel="Navegação principal"
        whatsappUrl={contactWhatsappUrl}
        whatsappLabel={contactWhatsappUrl ? contact.whatsappLabel : contact.whatsappUnavailableLabel}
      />

      <main id="main-content" tabIndex={-1}>
        <section className="hero section container" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-name">{general.name}</p>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title">{displayHeroTitle}</h1>
            <p className="lede measure">{displayHeroDescription}</p>
            <div className="hero-actions">
              <ButtonLink href={hero.primaryCtaUrl}>{hero.primaryCta}</ButtonLink>
              <ButtonLink href={hero.secondaryCtaUrl} variant="secondary">
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>
          <div className="hero-visual" role="img" aria-label="Moldura para foto oficial; imagem em breve">
            <div className="editorial-frame">
              <span>Foto oficial em breve.</span>
            </div>
          </div>
        </section>

        <Section id="conteudos" eyebrow="Canais e reflexões" title="Conteúdos">
          <div className="channel-grid" role="group" aria-label="Canais oficiais">
            {channelLinks.map((channel) => (
              <Card key={channel.platform} title={channel.label} eyebrow={channel.platform}>
                <p>{channel.description}</p>
                <ButtonLink href={channel.url} variant="text">
                  {channel.cta}
                </ButtonLink>
              </Card>
            ))}
          </div>

          <div className="featured-content">
            <div className="featured-heading">
              <p className="eyebrow">Seleção editorial</p>
              <h3>Conteúdos em destaque</h3>
            </div>

            {selectedContent.length > 0 ? (
              <div className="featured-grid">
                {selectedContent.map((content) => {
                  const displayPlatform = content.isPlaceholder ? "Conteúdo a selecionar" : content.platform;
                  const displayTitle = content.isPlaceholder ? "Conteúdo a selecionar" : content.title;
                  const displayCategory = content.isPlaceholder ? "Conteúdo a selecionar" : content.category;
                  const displayDescription = content.isPlaceholder
                    ? "Este espaço será atualizado com um destaque editorial."
                    : content.description;

                  return (
                    <Card key={content.id} title={displayTitle} eyebrow={displayPlatform} className="featured-card">
                      <div
                        className="content-thumbnail"
                        role={content.isPlaceholder ? "img" : undefined}
                        aria-label={content.isPlaceholder ? `Thumbnail: ${displayPlatform}` : undefined}
                      >
                        {isLocalThumbnail(content.thumbnail) && !content.isPlaceholder ? (
                          <Image
                            src={content.thumbnail}
                            alt={`Thumbnail de ${displayTitle}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        ) : (
                          <span>{displayPlatform}</span>
                        )}
                      </div>
                      <Badge label={displayCategory} />
                      <p>{displayDescription}</p>
                      {content.isPlaceholder ? (
                        <span className="placeholder-note">Conteúdo a selecionar</span>
                      ) : (
                        <ButtonLink href={content.url} variant="text">
                          Acessar conteúdo
                        </ButtonLink>
                      )}
                    </Card>
                  );
                })}
              </div>
            ) : (
              <p className="placeholder-note">Nenhum conteúdo selecionado no momento.</p>
            )}
          </div>
        </Section>

        <Section id="sobre" eyebrow={about.eyebrow} title={about.title}>
          <div className="about-layout">
            <div className="about-copy">
              {hasAboutBiography ? (
                <p className="about-biography measure">{displayAboutDescription}</p>
              ) : (
                <p className="placeholder-note measure">A apresentação será atualizada em breve.</p>
              )}
              {instagramLink ? (
                <ButtonLink href={instagramLink.url} variant="secondary">
                  Visite o Instagram oficial
                </ButtonLink>
              ) : null}
            </div>
            <figure className={`about-portrait ${hasLocalAboutImage ? "about-portrait-image" : "about-portrait-placeholder"}`}>
              {hasLocalAboutImage ? (
                <Image src={about.image} alt={about.alt} width={720} height={900} sizes="(max-width: 48rem) 100vw, 40vw" />
              ) : (
                <span>Fotografia em atualização</span>
              )}
            </figure>
          </div>
        </Section>

        <PodcastSection podcast={podcast} />

        <Section id="atendimentos" title="Atendimentos">
          <div className="card-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} whatsappNumber={contact.whatsappNumber} />
            ))}
          </div>
        </Section>

        <Section id="contato" title={contact.title} description={displayContactDescription} className="contact-panel">
          {contactWhatsappUrl ? (
            <ButtonLink href={contactWhatsappUrl}>{contact.whatsappLabel}</ButtonLink>
          ) : (
            <p className="placeholder-note">{contact.whatsappUnavailableLabel}</p>
          )}
        </Section>

        <Section id="faq" title="Perguntas frequentes">
          <div className="faq-list">
            {faq.map((item) => (
              <details className="faq-item" key={item.id}>
                <summary>{displayContent(item.question, "Pergunta demonstrativa")}</summary>
                <p>{item.isPlaceholder ? MOCK_FAQ_ANSWERS[item.id] : displayContent(item.answer, UPDATED_INFORMATION)}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section id="aviso-responsavel" title="Aviso responsável" className="responsible-note">
          <p>{displayContent(siteContent.responsibleNotice)}</p>
        </Section>
      </main>

      <Footer
        name={general.name}
        navItems={navItems}
        links={socialLinks.map((link) => ({ label: link.label, url: link.url, iconText: link.platform.slice(0, 2).toUpperCase() }))}
      />
    </div>
  );
}
