import type { Service } from "../content/site-content";

import { Badge } from "./Badge";
import { ButtonLink } from "./ButtonLink";
import { Card } from "./Card";
import { buildWhatsAppUrl, formatPriceBRL } from "./service-utils";

type ServiceCardProps = {
  service: Service;
  whatsappNumber: string | null;
};

const DEMO_SERVICE = {
  name: "Leitura de tarot individual",
  description: "Um encontro demonstrativo para refletir sobre uma questão e organizar novos pontos de vista.",
  duration: "60 minutos (exemplo)",
  format: "Online (exemplo)",
  notes: "Detalhes de pagamento e reagendamento serão confirmados.",
};

function serviceValue(value: string, isPlaceholder: boolean, demoValue: string) {
  return isPlaceholder ? demoValue : value;
}

export function ServiceCard({ service, whatsappNumber }: ServiceCardProps) {
  const isPlaceholder = service.isPlaceholder;
  const whatsappUrl = isPlaceholder
    ? null
    : buildWhatsAppUrl(whatsappNumber, service.whatsappMessage);
  const formattedPrice = formatPriceBRL(service.priceInCents);

  return (
    <Card
      className="service-card"
      title={isPlaceholder ? DEMO_SERVICE.name : service.name}
    >
      {isPlaceholder ? <Badge label="Conteúdo demonstrativo" /> : null}
      <p>{serviceValue(service.description, isPlaceholder, DEMO_SERVICE.description)}</p>
      <dl className="service-details">
        <div>
          <dt>Duração</dt>
          <dd>{serviceValue(service.duration, isPlaceholder, DEMO_SERVICE.duration)}</dd>
        </div>
        <div>
          <dt>Formato</dt>
          <dd>{serviceValue(service.format, isPlaceholder, DEMO_SERVICE.format)}</dd>
        </div>
        <div>
          <dt>Observações</dt>
          <dd>{serviceValue(service.notes, isPlaceholder, DEMO_SERVICE.notes)}</dd>
        </div>
      </dl>
      <p className="service-price">
        <span>Investimento</span>
        <strong>{formattedPrice ?? (isPlaceholder ? "R$ 180,00 (exemplo)" : "Valor em atualização")}</strong>
      </p>
      {whatsappUrl ? (
        <ButtonLink href={whatsappUrl}>Agendar atendimento</ButtonLink>
      ) : (
        <p className="service-cta-unavailable">
          Agendamento disponível após atualização do contato.
        </p>
      )}
    </Card>
  );
}
