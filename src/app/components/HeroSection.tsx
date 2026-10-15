import bannerImg from "figma:asset/7e9d8e4f7c96056889d9a0d191d144471d47f7c0.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: "#0A0A0A",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
      className="flex items-center"
    >

      {/* ── BACKGROUND LAYERS ─────────────────────────── */}

      {/* Right-side banner image — full width on mobile, right 52% on desktop */}
      <div
        className="hero-banner-wrap"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <img
          src={bannerImg}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 25%",
            display: "block",
          }}
        />
        {/* Left fade — desktop only */}
        <div
          className="hero-banner-left-fade"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 28%, rgba(10,10,10,0.15) 60%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #0A0A0A 0%, transparent 45%)",
            pointerEvents: "none",
          }}
        />
        {/* Top fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 22%)",
            pointerEvents: "none",
          }}
        />
        {/* Mobile: dark overlay so text stays readable */}
        <div
          className="hero-banner-mobile-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,10,10,0.55)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* White radial glow — left side atmosphere */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Large ghosted watermark text */}
      <div
        style={{
          position: "absolute",
          bottom: "-2rem",
          left: "-1rem",
          fontSize: "clamp(7rem, 18vw, 14rem)",
          fontWeight: 900,
          fontFamily: "sans-serif",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.04)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          zIndex: 0,
        }}
      >
        SQUAD MAGNUS
      </div>

      {/* Dot grid — left half only */}
      <div
        className="lg:[width:52%]"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #42DC2D 0%, rgba(66,220,45,0.3) 55%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── CONTENT ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full pt-24 pb-16" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* ── Left: Copy ── */}
          <div style={{ position: "relative" }} className="text-center lg:text-left">

            {/* Vertical accent line (desktop only) */}
            <div className="hidden lg:block" style={{
              position: "absolute",
              left: "-1.75rem",
              top: "4rem",
              bottom: "1rem",
              width: "3px",
              borderRadius: "999px",
              background: "linear-gradient(to bottom, #42DC2D, rgba(66,220,45,0))",
            }} />

            {/* Main Heading */}
            <h1
              style={{
                fontSize: "clamp(2.1rem, 6vw, 4.1rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
                letterSpacing: "-0.025em",
                fontFamily: "sans-serif",
              }}
            >
              CONQUISTE A{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2ab81e 0%, #42DC2D 60%, #7AE86A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                FORÇA
              </span>
              <br />
              E O{" "}
              <span style={{ color: "#42DC2D" }}>
                FÍSICO
              </span>
              <br />
              <span style={{ color: "#FFFFFF" }}>DOS SEUS SONHOS</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                color: "#888888",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
                maxWidth: "460px",
              }}
              className="mx-auto lg:mx-0"
            >
              Treinos personalizados, dieta flexível e suporte diário para você transformar seu corpo sem abrir mão da sua vida.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#planos"
                style={{
                  backgroundColor: "#42DC2D",
                  color: "#0A0A0A",
                  border: "none",
                  padding: "0.9rem 1.85rem",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  letterSpacing: "0.02em",
                  boxShadow: "0 4px 22px rgba(66,220,45,0.4)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#7AE86A";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(66,220,45,0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#42DC2D";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 22px rgba(66,220,45,0.4)";
                }}
              >
                Quero fazer parte do Squad
              </a>
            </div>

            {/* Stats Row */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-8"
              style={{
                marginTop: "2.75rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "1.75rem",
              }}
            >
              {[
                { value: "5.000+", label: "Alunos transformados" },
                { value: "8 anos", label: "De experiência" },
                { value: "98%",    label: "Taxa de satisfação" },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  
                  
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: empty spacer on desktop (image is absolutely positioned) ── */}
          <div className="hidden lg:block" />

        </div>
      </div>

      <style>{`
        .hero-banner-wrap {
          width: 100%;
        }
        .hero-banner-left-fade {
          display: none;
        }
        .hero-banner-mobile-overlay {
          display: block;
        }
        @media (min-width: 1024px) {
          .hero-banner-wrap {
            width: 52%;
          }
          .hero-banner-left-fade {
            display: block;
          }
          .hero-banner-mobile-overlay {
            display: none;
          }
        }
      `}</style>

    </section>
  );
}