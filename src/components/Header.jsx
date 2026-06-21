import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#freelance", label: "Client work" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo" onClick={closeMenu}>
          Zacharia Sao
        </a>

        <div className="nav__end">
          <button
            className={`nav__toggle${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav__links${menuOpen ? " open" : ""}`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav__link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="nav__cta" onClick={closeMenu}>
              Get in touch
            </a>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Header;
