import { getLinkSecurityProps } from "./link-utils";
import { SocialIcon } from "./SocialIcon";

type FooterLink = {
  label: string;
  url: string;
  iconText: string;
};

type FooterNavItem = {
  label: string;
  href: string;
};

type FooterProps = {
  name: string;
  navItems: readonly FooterNavItem[];
  links?: readonly FooterLink[];
};

export function Footer({ name, navItems, links = [] }: FooterProps) {
  const visibleSocialLinks = links.filter((link) => !link.url.includes("notion.site"));

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-identity">
          <p className="footer-brand">{name}</p>
          <p className="footer-tagline">Tarot, espiritualidade e autoconhecimento.</p>
          <p className="footer-copyright">© {new Date().getFullYear()} {name}</p>
        </div>
        <div className="footer-navigation">
          <p className="footer-label">Explorar</p>
          <nav aria-label="Navegação do rodapé">
            <ul className="footer-nav">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="text-link" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {visibleSocialLinks.length > 0 ? (
          <nav aria-label="Redes sociais">
            <p className="footer-label">Conecte-se</p>
            <ul className="footer-links">
              {visibleSocialLinks.map((link) => (
                <li key={link.url}>
                  <a className="social-link" href={link.url} {...getLinkSecurityProps(link.url)}>
                    <SocialIcon label={link.label} text={link.iconText} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </footer>
  );
}
