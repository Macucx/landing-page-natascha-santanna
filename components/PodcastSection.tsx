import type { SiteContent } from "../content/site-content";

import { ButtonLink } from "./ButtonLink";
import { Card } from "./Card";
import { Section } from "./Section";
import { getLinkSecurityProps } from "./link-utils";

type PodcastSectionProps = {
  podcast: SiteContent["podcast"];
};

const placeholderPattern = /^\[PREENCHER:/i;

function isPlaceholderText(value: string) {
  return placeholderPattern.test(value.trim());
}

function getPublishedEpisodes(podcast: PodcastSectionProps["podcast"]) {
  const publishedEpisodes = podcast.episodes
    .filter(
      (episode) =>
        !episode.isPlaceholder &&
        !isPlaceholderText(episode.title) &&
        !isPlaceholderText(episode.summary) &&
        episode.url !== "#",
    )
    .slice(0, 3);

  return publishedEpisodes.length > 0
    ? publishedEpisodes
    : [
        {
          id: "episode-demo",
          title: "Como criar um ritual de clareza",
          summary: "Episódio demonstrativo para visualizar a apresentação de um conteúdo do podcast.",
          url: podcast.url,
          date: "Episódio de demonstração",
          isPlaceholder: false,
        },
      ];
}

export function PodcastSection({ podcast }: PodcastSectionProps) {
  const description = isPlaceholderText(podcast.description)
    ? "Um espaço demonstrativo para conversas sobre símbolos, escolhas e autoconhecimento."
    : podcast.description;
  const episodes = getPublishedEpisodes(podcast);

  return (
    <Section id="podcast" eyebrow="Podcast" title="Ouça com calma" className="section-surface">
      <div className="podcast-feature">
        <div className="podcast-cover" role="img" aria-label="Capa do podcast em atualização">
          <span className="podcast-cover-label">Capa em atualização</span>
        </div>
        <div className="podcast-copy">
          <p className="card-kicker">Podcast em destaque</p>
          <h3>{podcast.title}</h3>
          <p className="measure">{description}</p>
          <ButtonLink href={podcast.url}>Ouvir no Spotify</ButtonLink>
        </div>
      </div>

      {episodes.length > 0 ? (
        <div className="podcast-episodes" aria-labelledby="podcast-episodes-title">
          <h3 id="podcast-episodes-title">Episódios em destaque</h3>
          <div className="card-grid card-grid-small">
            {episodes.map((episode) => (
              <Card key={episode.id} title={episode.title}>
                {episode.date ? <p className="podcast-date">{episode.date}</p> : null}
                <p>{episode.summary}</p>
                <a className="text-link" href={episode.url} {...getLinkSecurityProps(episode.url)}>
                  Ouvir episódio
                </a>
              </Card>
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
