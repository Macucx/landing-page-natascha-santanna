"use client";

import { useEffect, useId, useRef, useState } from "react";

import { ButtonLink } from "./ButtonLink";

type HeaderNavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  brand: string;
  navItems: readonly HeaderNavItem[];
  ariaLabel: string;
  whatsappUrl: string | null;
  whatsappLabel: string;
};

export function Header({ brand, navItems, ariaLabel, whatsappUrl, whatsappLabel }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  function handleNavClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label={ariaLabel}>
        <a className="brand" href="#inicio">
          {brand}
        </a>
        <ul className={`nav-links${isMenuOpen ? " is-open" : ""}`} id={menuId}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="text-link" href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="header-actions">
          <ButtonLink className="header-whatsapp" href={whatsappUrl ?? "#contato"} variant="secondary">
            {whatsappLabel}
          </ButtonLink>
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-controls={menuId}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
