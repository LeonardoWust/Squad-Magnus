import { Instagram, Youtube, Music2 } from "lucide-react";
import logoImg from "figma:asset/ec7af7ec2a9f9befe35bb0a658b94b29916930b8.png";
import cresayLogo from "figma:asset/e460d0f495d14729e043852c57212bdb1d7e07c6.png";

const socialLinks = [
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
  { icon: <Music2 size={20} />, href: "#", label: "TikTok" },
];

const footerLinks = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <img
              src={logoImg}
              alt="Squad Magnus Treinador"
              style={{
                height: "130px",
                width: "auto",
                display: "block",
                filter: "drop-shadow(0 0 5px rgba(255,255,255,0.15)) brightness(1.08)",
              }}
            />
          </div>

          {/* Nav Links */}
          <nav style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap", justifyContent: "center" }}>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "#555555",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#42DC2D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {socialLinks.map((social) => (
              null
            ))}
          </div>

          {/* Cresay Logo — direita */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#333333", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              desenvolvido por
            </span>
            <img
              src={cresayLogo}
              alt="Cresay"
              style={{
                height: "128px",
                width: "auto",
                display: "block",
                filter: "brightness(0) invert(1) opacity(0.28)",
              }}
            />
          </div>

        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem" }}>
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-3"
          >
            <p style={{ color: "#444444", fontSize: "0.78rem", textAlign: "center" }}>
              © 2026 Squad Magnus Treinador. Todos os direitos reservados.
            </p>
            <p style={{ color: "#333333", fontSize: "0.75rem", textAlign: "center" }}>
              Desenvolvido com dedicação para transformar vidas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}