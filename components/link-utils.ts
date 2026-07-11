import type { AnchorHTMLAttributes } from "react";

export function isExternalHref(href: string) {
  return /^(?:https?:)?\/\//i.test(href);
}

export function getLinkSecurityProps(
  href: string,
): Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> {
  return isExternalHref(href) ? { target: "_blank", rel: "noreferrer noopener" } : {};
}
