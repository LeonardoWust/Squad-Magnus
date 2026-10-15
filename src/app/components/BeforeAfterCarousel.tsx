import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import slide1 from "figma:asset/31dfeba86e4d5e7510043046a0401cf33a25d48c.png";
import slide2 from "figma:asset/2e935729e10427b6aef9345561fb28aff220acf0.png";
import slide3 from "figma:asset/1f223fdb905adb279d59beb3c9db6384337d9105.png";
import slide4 from "figma:asset/e512edd48d1505526527888cf4b9c609d5d7bde1.png";
import slide5 from "figma:asset/96bb1257a8736ef63f576f194a1afccfe6110d2d.png";
import slide6 from "figma:asset/2bfcf1490856dfeaa0b5680c74e5a1fb7b415169.png";
import slide7 from "figma:asset/12e280a352f1258e30021da1ea0d0cfe4f68146c.png";
import slide8 from "figma:asset/3bea70781373f7ab9b899724c937202c11ac2b8a.png";

const slides = [
  {
    image: slide1,
    name: "Aluna 1",
    result: "Transformação corporal",
    description: "Descrição em breve...",
  },
  {
    image: slide2,
    name: "Aluna 2",
    result: "Definição e qualidade muscular",
    description: "Descrição em breve...",
  },
  {
    image: slide3,
    name: "Aluno 3",
    result: "Perda de gordura",
    description: "Descrição em breve...",
  },
  {
    image: slide4,
    name: "Aluno 4",
    result: "Ganho de massa muscular",
    description: "Descrição em breve...",
  },
  {
    image: slide5,
    name: "Aluno 5",
    result: "Ganho de massa muscular",
    description: "Descrição em breve...",
  },
  {
    image: slide6,
    name: "Aluna 6",
    result: "Transformação corporal",
    description: "Descrição em breve...",
  },
  {
    image: slide7,
    name: "Aluno 7",
    result: "Definição muscular",
    description: "Descrição em breve...",
  },
  {
    image: slide8,
    name: "Aluno 8",
    result: "Perda de gordura",
    description: "Descrição em breve...",
  },
];

export function BeforeAfterCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next, isHovered]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="resultados"
      className="py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#0A0A0A", position: "relative", overflow: "hidden" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(66,220,45,0.1)",
              border: "1px solid rgba(66,220,45,0.25)",
              borderRadius: "999px",
              padding: "0.35rem 1rem",
            }}
          >
            <TrendingUp size={13} color="#42DC2D" />
            <span
              style={{
                color: "#42DC2D",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Resultados Reais
            </span>
          </div>
        </div>
        <h2
          style={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
            fontFamily: "sans-serif",
          }}
        >
          Transformações que{" "}
          <span style={{ color: "#42DC2D" }}>provam o método</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#777777",
            fontSize: "1rem",
            maxWidth: "480px",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
          }}
        >
          Cada resultado abaixo é de uma pessoa real que confiou no processo e colheu os frutos.
        </p>

        {/* Carousel Container */}
        <div
          className="sm:mx-8 lg:mx-auto"
          style={{ position: "relative", maxWidth: "800px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slide */}
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              border: "1px solid #E5E7EB",
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image */}
            <div className="carousel-img-wrap" style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.image}
                  alt={`Resultado de ${slide.name}`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    opacity: i === current ? 1 : 0,
                    transition: "opacity 0.6s ease",
                  }}
                />
              ))}

              {/* ANTES → DEPOIS badge */}
              <div
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  left: "0.75rem",
                  zIndex: 3,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "999px",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.1em",
                }}
              >
                ANTES → DEPOIS
              </div>

              {/* Result tag */}
              

              {/* Bottom overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "55%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                  zIndex: 2,
                }}
              />

              {/* Bottom text */}
              

              {/* Mobile swipe arrows (inside image) */}
              <button
                onClick={prev}
                aria-label="Anterior"
                className="flex sm:hidden"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0.75rem",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.85)",
                  border: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#1A1A1A",
                  zIndex: 10,
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Próximo"
                className="flex sm:hidden"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0.75rem",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.85)",
                  border: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#1A1A1A",
                  zIndex: 10,
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Arrow — Left (desktop) */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="hidden sm:flex"
            style={{
              position: "absolute",
              top: "50%",
              left: "-20px",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#444444",
              zIndex: 10,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#42DC2D";
              e.currentTarget.style.borderColor = "#42DC2D";
              e.currentTarget.style.color = "#0A0A0A";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(66,220,45,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.color = "#444444";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Arrow — Right (desktop) */}
          <button
            onClick={next}
            aria-label="Próximo"
            className="hidden sm:flex"
            style={{
              position: "absolute",
              top: "50%",
              right: "-20px",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#444444",
              zIndex: 10,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#42DC2D";
              e.currentTarget.style.borderColor = "#42DC2D";
              e.currentTarget.style.color = "#0A0A0A";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(66,220,45,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.color = "#444444";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para slide ${i + 1}`}
                style={{
                  width: i === current ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "999px",
                  backgroundColor: i === current ? "#42DC2D" : "#D1D5DB",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Auto-play progress bar */}
          <div
            style={{
              height: "3px",
              backgroundColor: "#E5E7EB",
              borderRadius: "999px",
              overflow: "hidden",
              maxWidth: "200px",
              margin: "1rem auto 0",
            }}
          >
            <div
              key={current}
              style={{
                height: "100%",
                backgroundColor: "#42DC2D",
                borderRadius: "999px",
                animation: isHovered ? "none" : "progress 3s linear",
                width: isHovered ? "0%" : undefined,
              }}
            />
          </div>

          {/* Mobile swipe hint */}
          <p className="flex sm:hidden justify-center" style={{ color: "#BBBBBB", fontSize: "0.72rem", marginTop: "0.75rem", gap: "0.4rem", alignItems: "center" }}>
            ← deslize para navegar →
          </p>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @media (max-width: 639px) {
          .carousel-img-wrap {
            aspect-ratio: 4/3 !important;
          }
        }
      `}</style>
    </section>
  );
}