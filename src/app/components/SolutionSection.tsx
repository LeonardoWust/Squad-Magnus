import {
  Dumbbell,
  UtensilsCrossed,
  MessageCircle,
  Users,
  Scan,
  Brain,
  Zap,
} from "lucide-react";

const pillars = [
  {
    icon: <Dumbbell size={30} />,
    title: "Treino Individualizado",
    description:
      "Planilha 100% personalizada para seu nível, objetivos e rotina. Atualizada a cada ciclo de resultados.",
  },
  {
    icon: <UtensilsCrossed size={30} />,
    title: "Dieta Flexível",
    description:
      "Sem restrições absurdas. Coma o que você gosta dentro de um plano inteligente que funciona.",
  },
  {
    icon: <MessageCircle size={30} />,
    title: "Suporte Diário via WhatsApp",
    description:
      "Tire dúvidas, envie check-ins e receba feedback em tempo real. Você nunca estará sozinho.",
  },
  {
    icon: <Users size={30} />,
    title: "Comunidade Exclusiva",
    description:
      "Participe de uma comunidade privada com alunos e conteúdos exclusivos no Instagram.",
  },
  {
    icon: <Scan size={30} />,
    title: "Avaliação Postural",
    description:
      "Análise completa do seu corpo para corrigir desvios, prevenir lesões e otimizar seu desempenho.",
  },
  {
    icon: <Brain size={30} />,
    title: "Apoio Psicológico",
    description:
      "Mindset de campeão. Técnicas de foco, disciplina e resiliência para você não desistir jamais.",
  },
];

export function SolutionSection() {
  return (
    <section
      id="metodologia"
      className="py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#0A0A0A", position: "relative", overflow: "hidden" }}
    >
      {/* Green glow center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(66,220,45,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* White glow bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6" style={{ position: "relative" }}>
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
            <Zap size={13} color="#42DC2D" />
            <span
              style={{
                color: "#42DC2D",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              A Solução
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
          O que você ganha na{" "}
          <span style={{ color: "#42DC2D" }}>Consultoria</span>
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
          Um ecossistema completo de transformação física e mental, pensado em cada detalhe para você alcançar o máximo.
        </p>

        {/* Grid */}
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(66,220,45,0.4)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(66,220,45,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.3)";
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(66,220,45,0.15), rgba(66,220,45,0.06))",
                    border: "1px solid rgba(66,220,45,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#42DC2D",
                  }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h3
                    style={{
                      color: "#FFFFFF",
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p style={{ color: "#777777", fontSize: "0.875rem", lineHeight: 1.65 }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}