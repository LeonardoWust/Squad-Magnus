import { Star, MessageSquare } from "lucide-react";

const TRANSFORM_1 =
  "https://images.unsplash.com/photo-1759300642261-6a1dcd0d19f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBib2R5JTIwZ3lmJTIwd29ya291dHxlbnwxfHx8fDE3NzM3ODQ0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const TRANSFORM_2 =
  "https://images.unsplash.com/photo-1734668489555-6a9b99e45451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB0cmFpbmluZyUyMHdlaWdodHMlMjBzdHJvbmd8ZW58MXx8fHwxNzczNzg0NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const TRANSFORM_3 =
  "https://images.unsplash.com/photo-1633354129320-163fb10dd288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjB0cmFpbmluZyUyMHByb2dyZXNzJTIwcmVzdWx0c3xlbnwxfHx8fDE3NzM3ODQ0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const testimonials = [
  {
    image: TRANSFORM_1,
    name: "Lucas Mendes",
    tag: "-18kg em 4 meses",
    stars: 5,
    text: "Tentei emagrecer por anos sozinho sem resultado. Com o Fagner, em 4 meses perdi 18kg e ganhei mais disposição do que nunca. O suporte no WhatsApp mudou tudo.",
  },
  {
    image: TRANSFORM_2,
    name: "Gabriel Oliveira",
    tag: "+12kg de massa magra",
    stars: 5,
    text: "Ganho de massa que parecia impossível. A dieta flexível foi um divisor de águas — finalmente consigo manter a consistência sem sofrer. Resultado absurdo em 6 meses!",
  },
  {
    image: TRANSFORM_3,
    name: "Fernanda Lima",
    tag: "Definição completa",
    stars: 5,
    text: "Como atleta amadora, precisava de um plano sério. A avaliação postural e o treino personalizado me levaram ao meu melhor shape. Recomendo de olhos fechados!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#42DC2D" color="#42DC2D" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="resultados"
      className="py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#F8FAFB" }}
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
              border: "1px solid rgba(66,220,45,0.3)",
              borderRadius: "999px",
              padding: "0.35rem 1rem",
            }}
          >
            <MessageSquare size={13} color="#2ab81e" />
            <span
              style={{
                color: "#2ab81e",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Depoimentos
            </span>
          </div>
        </div>
        <h2
          style={{
            textAlign: "center",
            color: "#1A1A1A",
            fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
            fontFamily: "sans-serif",
          }}
        >
          Histórias que{" "}
          <span style={{ color: "#42DC2D" }}>inspiram</span>
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
          Não são promessas vazias. São transformações reais de pessoas reais que apostaram no método.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(66,220,45,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(66,220,45,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E5E7EB";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
              }}
            >
              {/* Transformation photo */}
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                {/* ANTES / DEPOIS labels */}
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    left: "0.75rem",
                    zIndex: 2,
                    backgroundColor: "rgba(0,0,0,0.55)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "999px",
                    padding: "0.2rem 0.7rem",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "0.08em",
                  }}
                >
                  ANTES → DEPOIS
                </div>
                {/* Result tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    zIndex: 2,
                    backgroundColor: "#42DC2D",
                    borderRadius: "999px",
                    padding: "0.2rem 0.75rem",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: "#0A0A0A",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t.tag}
                </div>
                <img
                  src={t.image}
                  alt={`Transformação de ${t.name}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Bottom gradient */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background: "linear-gradient(to top, #F8FAFB 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.8rem" }}>
                  <div>
                    <div style={{ color: "#1A1A1A", fontSize: "0.95rem", fontWeight: 700 }}>
                      {t.name}
                    </div>
                    <div style={{ color: "#AAAAAA", fontSize: "0.78rem", marginTop: "0.1rem" }}>
                      Aluno ForceLab
                    </div>
                  </div>
                  <StarRating count={t.stars} />
                </div>
                <p style={{ color: "#666666", fontSize: "0.875rem", lineHeight: 1.65, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            color: "#BBBBBB",
            fontSize: "0.82rem",
            letterSpacing: "0.05em",
          }}
        >
          +5.000 transformações documentadas · Resultados individuais podem variar
        </div>
      </div>
    </section>
  );
}