import {
  CheckCircle2,
  ShieldCheck,
  RefreshCcw,
  Zap,
  Dumbbell,
  UtensilsCrossed,
  MessageCircle,
  Users,
  Scan,
  Brain,
  ArrowRight,
} from "lucide-react";

const features = [
  { icon: <Dumbbell size={16} />, text: "Treino 100% Personalizado e Atualizado" },
  { icon: <UtensilsCrossed size={16} />, text: "Protocolo de Dieta Flexível" },
  { icon: <MessageCircle size={16} />, text: "Suporte Diário via WhatsApp" },
  { icon: <Users size={16} />, text: "Acesso à Comunidade Exclusiva" },
  { icon: <Scan size={16} />, text: "Avaliação Postural Completa" },
  { icon: <Brain size={16} />, text: "Sessão de Apoio Psicológico Mensal" },
  { icon: <Zap size={16} />, text: "Revisão de Treino a cada 4 semanas" },
  { icon: <CheckCircle2 size={16} />, text: "Check-in semanal com o treinador" },
];

export function PricingSection() {
  return (
    <section
      id="planos"
      className="py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#080808", position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(66,220,45,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span
            style={{
              color: "#42DC2D",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Investimento
          </span>
        </div>
        <h2
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
            fontFamily: "sans-serif",
          }}
        >
          Comece sua transformação{" "}
          <span style={{ color: "#42DC2D" }}>hoje</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#777",
            fontSize: "1rem",
            maxWidth: "460px",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
          }}
        >
          Um investimento único por um resultado que vai durar a vida inteira.
        </p>

        {/* Pricing Card */}
        <div className="max-w-sm sm:max-w-md mx-auto" style={{ width: "100%" }}>
          <div
            style={{
              background: "linear-gradient(145deg, #141414 0%, #0F0F0F 100%)",
              border: "1px solid rgba(66,220,45,0.35)",
              borderRadius: "24px",
              padding: "2rem",
              position: "relative",
              boxShadow: "0 0 60px rgba(66,220,45,0.1)",
            }}
          >
            {/* Most Popular badge */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#42DC2D",
                color: "#0A0A0A",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.3rem 1.2rem",
                borderRadius: "999px",
                whiteSpace: "nowrap",
              }}
            >
              ⚡ Mais Popular
            </div>

            {/* Plan name */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <div
                style={{
                  color: "#42DC2D",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Plano Trimestral
              </div>
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  fontFamily: "sans-serif",
                  marginBottom: "0.3rem",
                }}
              >
                Consultoria Premium
              </h3>
              <div style={{ color: "#555", fontSize: "0.85rem" }}>
                3 meses de acompanhamento completo
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #1e1e1e", margin: "1.5rem 0" }} />

            {/* Price */}
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <div style={{ color: "#555", fontSize: "0.85rem", textDecoration: "line-through", marginBottom: "0.3rem" }}>
                De R$ 897/mês
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "0.25rem" }}>
                <span style={{ color: "#42DC2D", fontSize: "1.2rem", fontWeight: 700, marginTop: "0.5rem" }}>
                  R$
                </span>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "4rem",
                    fontWeight: 900,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                  }}
                >
                  597
                </span>
                <span style={{ color: "#777", fontSize: "0.9rem", alignSelf: "flex-end", marginBottom: "0.5rem" }}>
                  /mês
                </span>
              </div>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(66,220,45,0.12)",
                  border: "1px solid rgba(66,220,45,0.25)",
                  color: "#42DC2D",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.85rem",
                  borderRadius: "999px",
                  marginTop: "0.5rem",
                }}
              >
                Economize R$ 900 no trimestre
              </div>
            </div>

            {/* Features list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.75rem" }}>
              {features.map((feature, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      color: "#42DC2D",
                      flexShrink: 0,
                      width: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircle2 size={16} fill="rgba(66,220,45,0.15)" />
                  </div>
                  <span style={{ color: "#cccccc", fontSize: "0.88rem", lineHeight: 1.4 }}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              style={{
                width: "100%",
                backgroundColor: "#42DC2D",
                color: "#0A0A0A",
                border: "none",
                padding: "1rem",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 800,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                letterSpacing: "0.03em",
                boxShadow: "0 4px 24px rgba(66,220,45,0.4)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#7AE86A";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(66,220,45,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#42DC2D";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(66,220,45,0.4)";
              }}
            >
              QUERO COMEÇAR AGORA
              <ArrowRight size={18} />
            </button>

            {/* Trust badges */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1.25rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <ShieldCheck size={15} color="#555" />
                <span style={{ color: "#555", fontSize: "0.75rem", fontWeight: 600 }}>
                  Pagamento Seguro
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <RefreshCcw size={15} color="#555" />
                <span style={{ color: "#555", fontSize: "0.75rem", fontWeight: 600 }}>
                  Garantia de 7 dias
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ fontSize: "0.85rem" }}>🔒</span>
                <span style={{ color: "#555", fontSize: "0.75rem", fontWeight: 600 }}>
                  SSL Certificado
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p
          style={{
            textAlign: "center",
            color: "#444",
            fontSize: "0.8rem",
            marginTop: "2rem",
            lineHeight: 1.6,
          }}
        >
          Acesso imediato após confirmação do pagamento · Cancele quando quiser
        </p>
      </div>
    </section>
  );
}