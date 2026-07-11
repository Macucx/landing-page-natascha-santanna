import type { AnchorHTMLAttributes, ReactNode } from "react";

import { getLinkSecurityProps } from "./link-utils";

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
  href: string;
  variant?: "primary" | "secondary" | "text";
  children: ReactNode;
};

export function ButtonLink({ href, variant = "primary", className = "", children, ...props }: ButtonLinkProps) {
  const securityProps = getLinkSecurityProps(href);

  return (
    <a
      {...props}
      {...securityProps}
      className={`button button-${variant} ${className}`.trim()}
      href={href}
    >
      {children}
    </a>
  );
}
