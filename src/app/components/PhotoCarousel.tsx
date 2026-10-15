const photos = [
  {
    url: "https://images.unsplash.com/photo-1638536534847-2cb61af9efe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwYXRobGV0ZSUyMHRyYWluaW5nJTIwcmVzdWx0fGVufDF8fHx8MTc3Mzc4NjA1OXww&ixlib=rb-4.1.0&q=80&w=800",
    name: "Bruno S.",
    result: "+14kg massa",
  },
  {
    url: "https://images.unsplash.com/photo-1765045768265-e3eb8471fce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRlciUyMG11c2NsZSUyMHN0cm9uZyUyMHBoeXNpcXVlfGVufDF8fHx8MTc3Mzc4NjA1OXww&ixlib=rb-4.1.0&q=80&w=800",
    name: "Diego R.",
    result: "Campeão regional",
  },
  {
    url: "https://images.unsplash.com/photo-1628970929344-2159ea6eb124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjBzdHJvbmclMjBib2R5JTIwd29ya291dHxlbnwxfHx8fDE3NzM3ODYwNTl8MA&ixlib=rb-4.1.0&q=80&w=800",
    name: "Camila T.",
    result: "-22kg em 5 meses",
  },
  {
    url: "https://images.unsplash.com/photo-1758520705254-1e9d913d78ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBydW5uaW5nJTIwc3BvcnQlMjBhdGhsZXRpYyUyMG91dGRvb3J8ZW58MXx8fHwxNzczNzg2MDYwfDA&ixlib=rb-4.1.0&q=80&w=800",
    name: "Mateus P.",
    result: "Maratona completa",
  },
  {
    url: "https://images.unsplash.com/photo-1738523686534-7055df5858d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBneW0lMjBmaXRuZXNzJTIwdHJhaW5pbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NzM3ODYwNjB8MA&ixlib=rb-4.1.0&q=80&w=800",
    name: "Ana & Pedro",
    result: "Transformação dupla",
  },
  {
    url: "https://images.unsplash.com/photo-1759300642261-6a1dcd0d19f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBib2R5JTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NzM3ODQ0MzR8MA&ixlib=rb-4.1.0&q=80&w=800",
    name: "Rodrigo M.",
    result: "Definição total",
  },
  {
    url: "https://images.unsplash.com/photo-1734668489555-6a9b99e45451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB0cmFpbmluZyUyMHdlaWdodHMlMjBzdHJvbmd8ZW58MXx8fHwxNzczNzg0NDM0fDA&ixlib=rb-4.1.0&q=80&w=800",
    name: "Felipe A.",
    result: "+8kg em 3 meses",
  },
  {
    url: "https://images.unsplash.com/photo-1633354129320-163fb10dd288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjB0cmFpbmluZyUyMHByb2dyZXNzJTIwcmVzdWx0c3xlbnwxfHx8fDE3NzM3ODQ0MzR8MA&ixlib=rb-4.1.0&q=80&w=800",
    name: "Júlia F.",
    result: "Shape dos sonhos",
  },
];

// Split into two rows
const row1 = photos.slice(0, 4);
const row2 = photos.slice(4, 8);

interface CarouselRowProps {
  items: typeof photos;
  direction: "left" | "right";
  speed?: number;
}

function CarouselRow({ items, direction, speed = 35 }: CarouselRowProps) {
  // Duplicate for seamless loop
  const duplicated = [...items, ...items];
  const animName = direction === "left" ? "scrollLeft" : "scrollRight";

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "max-content",
          animation: `${animName} ${speed}s linear infinite`,
        }}
      >
        {duplicated.map((photo, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "260px",
              height: "340px",
              borderRadius: "14px",
              overflow: "hidden",
              flexShrink: 0,
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)";
              (e.currentTarget as HTMLDivElement).style.zIndex = "2";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLDivElement).style.zIndex = "1";
            }}
          >
            {/* Photo */}
            <img
              src={photo.url}
              alt={photo.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)",
              }}
            />

            {/* Info */}
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                right: "1rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#4ADE80",
                  color: "#0A0A0A",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  display: "inline-block",
                  marginBottom: "0.4rem",
                  textTransform: "uppercase",
                }}
              >
                {photo.result}
              </div>
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                }}
              >
                {photo.name}
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem" }}>
                Aluno ForceLab
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export function PhotoCarousel() {
  return (
    <section
      className="py-14 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#0A0A0A", overflow: "hidden" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "1rem", padding: "0 1.25rem" }}>
        <span
          style={{
            color: "#4ADE80",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Comunidade
        </span>
      </div>
      <h2
        style={{
          textAlign: "center",
          color: "#ffffff",
          fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: "0.75rem",
          letterSpacing: "-0.02em",
          fontFamily: "sans-serif",
          padding: "0 1.25rem",
        }}
      >
        Alunos que já{" "}
        <span style={{ color: "#4ADE80" }}>transformaram</span> suas vidas
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "0.95rem",
          maxWidth: "440px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.7,
          padding: "0 1.25rem",
        }}
      >
        Faça parte de uma comunidade de pessoas reais que escolheram mudar.
      </p>

      {/* Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <CarouselRow items={row1} direction="left" speed={30} />
        <CarouselRow items={row2} direction="right" speed={38} />
      </div>
    </section>
  );
}