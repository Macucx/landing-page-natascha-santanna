import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}>;

export function Section({ id, eyebrow, title, description, className = "", children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section className={`section container ${className}`.trim()} id={id} aria-labelledby={titleId}>
      <div className="section-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={titleId}>{title}</h2>
        {description ? <p className="measure">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
