import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "figma:asset/ec7af7ec2a9f9befe35bb0a658b94b29916930b8.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Benefícios", href: "#beneficios" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Resultados", href: "#resultados" },
    { label: "Planos", href: "#planos" },
  ];

  return (
    <header
      style={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "all 0.35s ease",
        paddingTop: scrolled ? "6px" : "14px",
        paddingBottom: scrolled ? "6px" : "14px",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Squad Magnus Treinador"
            style={{
              height: scrolled ? "64px" : "124px",
              width: "auto",
              display: "block",
              transition: "height 0.35s ease",
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.22)) brightness(1.1)",
            }}
          />
        </div>

        {/* Desktop Nav — absolutamente centralizado */}
        <nav
          className="hidden md:flex items-center gap-8"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#888888",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#42DC2D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#planos"
            style={{
              backgroundColor: "#42DC2D",
              color: "#0A0A0A",
              padding: "0.45rem 1.2rem",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.2s ease",
              letterSpacing: "0.02em",
              boxShadow: "0 0 16px rgba(66,220,45,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#7AE86A";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(66,220,45,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#42DC2D";
              e.currentTarget.style.boxShadow = "0 0 16px rgba(66,220,45,0.3)";
            }}
          >
            Ver Planos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          style={{ color: "#FFFFFF", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "#0F0F0F", borderTop: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}
          className="md:hidden absolute top-full left-0 right-0 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "#AAAAAA", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#planos"
            style={{
              border: "1.5px solid #42DC2D",
              color: "#42DC2D",
              background: "transparent",
              padding: "0.5rem 1.25rem",
              borderRadius: "6px",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
              width: "fit-content",
              textDecoration: "none",
              display: "inline-block",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Ver Planos
          </a>
          
        </div>
      )}
    </header>
  );
}