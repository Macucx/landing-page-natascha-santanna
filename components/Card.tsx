import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  title: string;
  eyebrow?: string;
  className?: string;
}>;

export function Card({ title, eyebrow, className = "", children }: CardProps) {
  return (
    <article className={`card ${className}`.trim()}>
      {eyebrow ? <p className="card-kicker">{eyebrow}</p> : null}
      <h3>{title}</h3>
      {children}
    </article>
  );
}
