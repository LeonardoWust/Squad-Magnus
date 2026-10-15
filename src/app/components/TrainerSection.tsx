import { Award, Trophy, Users, Star } from "lucide-react";
import trainerImg from "figma:asset/662552772d65b65fe7f7ded92bca458618ffe85f.png";

const credentials = [
  { icon: <Users size={18} />, text: "Mais de 5.000 alunos transformados" },
  { icon: <Trophy size={18} />, text: "Atleta de Fisiculturismo — 3x Campeão" },
  { icon: <Award size={18} />, text: "Certificado CREF e Equipe com Nutricionista Esportivo" },
  { icon: <Star size={18} />, text: "+6 anos de experiência com alta performance" },
];

export function TrainerSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#0F0F0F", position: "relative", overflow: "hidden" }}
    >
      {/* White radial glow top-left */}
      <div style={{
        position: "absolute", top: "-80px", left: "-80px",
        width: "380px", height: "380px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Green glow bottom-right */}
      

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image Column */}
          <div style={{ position: "relative" }} className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            {/* Decorative border */}
            <div
              className="hidden sm:block"
              style={{
                position: "absolute",
                top: "-16px",
                left: "-16px",
                right: "16px",
                bottom: "16px",
                border: "2px solid rgba(66,220,45,0.25)",
                borderRadius: "20px",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
                aspectRatio: "4/5",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 70%, rgba(15,15,15,0.6) 100%)",
                  zIndex: 1,
                }}
              />
              <img
                src={trainerImg}
                alt="Personal Trainer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="text-center lg:text-left">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(66,220,45,0.1)",
                border: "1px solid rgba(66,220,45,0.25)",
                borderRadius: "999px",
                padding: "0.35rem 1rem",
                marginBottom: "1rem",
              }}
            >
              <Award size={13} color="#42DC2D" />
              <span
                style={{
                  color: "#42DC2D",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Sobre o Treinador
              </span>
            </div>
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
                fontFamily: "sans-serif",
              }}
            >
              Fagner Magnus
              <br />
              <span style={{ color: "#666666", fontWeight: 400, fontSize: "1.2rem" }}>
                Fisiculturista e Treinador de Alta Performance
              </span>
            </h2>

            <p
              style={{
                color: "#777777",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Não comecei no esporte por estética, mas por necessidade. Uma lesão no ombro me levou à cirurgia e me fez reconstruir meu corpo — foi aí que tudo mudou. Transformei dor em disciplina, evoluí, competi e me tornei atleta. Hoje, vivo o que ensino e ajudo pessoas a terem resultados reais. Aprendi que sem estratégia, você só perde tempo — por isso entrego um caminho direto, inteligente e comprovado.
            </p>
            <p
              style={{
                color: "#777777",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              Minha missão não é só transformar corpos — é transformar <span style={{ color: "#FFFFFF", fontWeight: 600 }}>mentalidades</span>. Cada aluno recebe atenção individual, porque acredito que resultados extraordinários exigem método extraordinário.
            </p>

            {/* Credentials */}
            <div className="flex justify-center lg:justify-start">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {credentials.slice(1).map((cred, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        minWidth: "36px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(66,220,45,0.1)",
                        border: "1px solid rgba(66,220,45,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#42DC2D",
                        flexShrink: 0,
                      }}
                    >
                      {cred.icon}
                    </div>
                    <span style={{ color: "#AAAAAA", fontSize: "0.9rem", fontWeight: 500 }}>
                      {cred.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}