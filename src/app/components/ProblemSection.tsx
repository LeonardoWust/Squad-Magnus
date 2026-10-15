import { TrendingDown, UserX, Salad, HelpCircle, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: <TrendingDown size={28} />,
    title: "Estagnação Constante",
    description:
      "Meses de treino sem ver evolução. O corpo parou de responder e a motivação foi junto.",
  },
  {
    icon: <UserX size={28} />,
    title: "Sem Suporte Nenhum",
    description:
      "Personal que some após a aula, sem resposta no WhatsApp e zero acompanhamento real.",
  },
  {
    icon: <Salad size={28} />,
    title: "Dietas Impossíveis",
    description:
      "Cardápios restritivos que te fazem abandonar tudo no terceiro dia. Comida sem sabor, vida sem graça.",
  },
  {
    icon: <HelpCircle size={28} />,
    title: "Treinos Genéricos",
    description:
      "Planilhas copiadas da internet que não consideram seu corpo, histórico e objetivos únicos.",
  },
];

export function ProblemSection() {
  return (
    <section
      id="beneficios"
      className="py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#0F0F0F", position: "relative", overflow: "hidden" }}
    >
      {/* White radial glow top-right */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,59,48,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(255,59,48,0.1)",
              border: "1px solid rgba(255,59,48,0.25)",
              borderRadius: "999px",
              padding: "0.35rem 1rem",
            }}
          >
            <AlertCircle size={13} color="#FF3B30" />
            <span
              style={{
                color: "#FF3B30",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              O Problema
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
          Cansado de treinos genéricos
          <br />e <span style={{ color: "#FF3B30" }}>falta de resultados</span>?
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#777777",
            fontSize: "1rem",
            maxWidth: "500px",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
          }}
        >
          Se você se identifica com algum desses problemas, você não está sozinho — e existe solução.
        </p>

        {/* Cards Grid */}
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          >
            {problems.map((problem, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  padding: "1.75rem",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,59,48,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,59,48,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.3)";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(255,59,48,0.15), rgba(255,59,48,0.06))",
                    border: "1px solid rgba(255,59,48,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    color: "#FF3B30",
                    flexShrink: 0,
                  }}
                >
                  {problem.icon}
                </div>
                <h3
                  style={{
                    color: "#FFFFFF",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    marginBottom: "0.6rem",
                    fontFamily: "sans-serif",
                  }}
                >
                  {problem.title}
                </h3>
                <p style={{ color: "#777777", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}