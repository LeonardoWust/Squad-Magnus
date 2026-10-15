import {
  MessageCircle,
  ShieldCheck,
  Clock,
  Star,
  Check,
  Dumbbell,
  Salad,
} from "lucide-react";
import mintImg from "../../imports/mint.png";
import squadMagnusImg from "../../imports/ec7af7ec2a9f9befe35bb0a658b94b29916930b8.png";

const objectionBreakers = [
  {
    icon: <Clock size={18} />,
    text: "Não tenho tempo livre",
    answer: "Treinos de 45–60min adaptados à sua rotina",
  },
  {
    icon: <ShieldCheck size={18} />,
    text: "Tenho medo de não conseguir",
    answer: "Começamos do seu nível atual — sem julgamentos",
  },
  {
    icon: <Star size={18} />,
    text: "Já tentei e não funcionou",
    answer: "Método individualizado — o que outros não fizeram",
  },
];

export function WhatsAppCTA() {
  return (
    <section
      id="contato"
      className="py-16 sm:py-20 lg:py-28"
      style={{
        backgroundColor: "#0F0F0F",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Green blob top-right */}

      {/* White blob bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* White blob top-left */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-4xl mx-auto px-5 sm:px-6 text-center"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "rgba(66,220,45,0.1)",
            border: "1px solid rgba(66,220,45,0.25)",
            borderRadius: "999px",
            padding: "0.35rem 1rem",
            marginBottom: "1.5rem",
          }}
        >
          <MessageCircle size={14} color="#42DC2D" />
          <span
            style={{
              color: "#42DC2D",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Contato Direto
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            letterSpacing: "-0.025em",
            fontFamily: "sans-serif",
          }}
        >
          Pronto para dar o<br />
          <span style={{ color: "#42DC2D" }}>
            primeiro passo
          </span>
          <br />
          rumo à sua transformação?
        </h2>

        {/* Sub-copy */}
        <p
          style={{
            color: "#777777",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
          }}
        >
          Sem compromisso, sem taxa de adesão. Basta mandar uma
          mensagem pelo WhatsApp, conversar comigo por 5 minutos
          e descobrir se a consultoria é pra você. A maioria
          decide começar logo na primeira conversa.
        </p>

        {/* Pricing Cards */}
        <p
          style={{
            color: "#FFFFFF",
            fontSize: "1.15rem",
            fontWeight: 700,
            marginBottom: "1.75rem",
            fontFamily: "sans-serif",
          }}
        >
          Qual plano faz mais sentido pra você começar?
        </p>
        <div
          id="planos"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8"
          style={{
            maxWidth: "860px",
            margin: "0 auto 2rem",
            textAlign: "left",
          }}
        >
          {/* Card 1 — Plano Treinamento */}
          <div
            style={{
              backgroundColor: "#141414",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: "18px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              boxShadow: "0 0 25px rgba(255,255,255,0.18), 0 0 60px rgba(255,255,255,0.08)",
            }}
          >
            {/* Card Header */}
            <img
              src={squadMagnusImg}
              className="mx-[78px] my-[0px] mx-[78px] my-[0px] rounded-[0px]"
              alt="Squad Magnus"
              style={{
                display: "block",
                margin: "0 auto",
                width: "200px",
                height: "110px",
                objectFit: "cover",
                objectPosition: "center",
                mixBlendMode: "screen",
              }}
            />

            {/* Includes */}
            <div>
              <p
                style={{
                  color: "#555",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                Neste plano inclui:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                }}
              >
                {[
                  "Avaliação (presencial ou online)",
                  "Treino personalizado e atualizado",
                  "Acesso ao app com vídeos explicativos",
                  "Suporte diário via WhatsApp",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <Check
                      size={14}
                      style={{
                        color: "#42DC2D",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: "#AAAAAA",
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}
            />

            {/* Description */}
            <div style={{ flex: 1 }}>
              <p style={{ color: "#AAAAAA", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>
                Ideal para quem quer transformar o corpo com treino direcionado e acompanhamento constante. Você recebe um plano atualizado regularmente e pode tirar dúvidas comigo direto pelo WhatsApp, todos os dias.
              </p>
              <p style={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>
                Valores personalizados — fale com a gente e monte o plano ideal pra você.
              </p>
            </div>

            {/* CTA Button — Card 1 */}
            <a
              href="https://wa.link/uhgnhq"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                backgroundColor: "#42DC2D",
                color: "#0A0A0A",
                padding: "0.85rem 1.25rem",
                borderRadius: "10px",
                fontSize: "0.9rem",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(66,220,45,0.35)",
                transition: "all 0.2s ease",
                letterSpacing: "0.02em",
                marginTop: "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#7AE86A";
                e.currentTarget.style.transform =
                  "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(66,220,45,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#42DC2D";
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(66,220,45,0.35)";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero este plano
            </a>
          </div>

          {/* Card 2 — Acompanhamento Nutricional */}
          <div
            style={{
              backgroundColor: "#141414",
              border: "1px solid rgba(0,255,128,0.6)",
              borderRadius: "18px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              boxShadow: "0 0 25px rgba(0,255,128,0.18), 0 0 60px rgba(0,255,128,0.08)",
            }}
          >
            {/* Card Header */}
            <img
              src={mintImg}
              alt="Projeto Mint"
              style={{
                display: "block",
                margin: "0 auto",
                width: "200px",
                height: "70px",
                objectFit: "cover",
                objectPosition: "center",
                mixBlendMode: "screen",
              }}
            />

            {/* Includes */}
            <div>
              <p
                style={{
                  color: "#555",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                Neste plano inclui:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                }}
              >
                {[
                  "Avaliação (presencial ou online)",
                  "Treino personalizado (com treinador)",
                  "Orientação alimentar (suporte nutricional)",
                  "Acesso ao app com vídeos explicativos",
                  "Suporte diário via WhatsApp",
                  "Grupo do Whatsapp",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <Check
                      size={14}
                      style={{
                        color: "#42DC2D",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: "#AAAAAA",
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}
            />

            {/* Description */}
            <div style={{ flex: 1 }}>
              <p style={{ color: "#AAAAAA", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>
                Para quem quer ir além do treino: acompanhamento completo com orientação nutricional, suporte diário e grupo exclusivo no WhatsApp para evolução contínua dentro e fora da academia.
              </p>
              <p style={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>
                Valores personalizados — fale com a gente e monte o plano ideal pra você.
              </p>
            </div>

            {/* CTA Button — Card 2 */}
            <a
              href="https://wa.link/1npxqp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                backgroundColor: "#42DC2D",
                color: "#0A0A0A",
                padding: "0.85rem 1.25rem",
                borderRadius: "10px",
                fontSize: "0.9rem",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(66,220,45,0.35)",
                transition: "all 0.2s ease",
                letterSpacing: "0.02em",
                marginTop: "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#7AE86A";
                e.currentTarget.style.transform =
                  "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(66,220,45,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#42DC2D";
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(66,220,45,0.35)";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero este plano
            </a>
          </div>
        </div>

        {/* Objection breakers */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
          style={{ maxWidth: "720px", margin: "0 auto 2.5rem" }}
        >
          {objectionBreakers.map((item, i) => null)}
        </div>

        {/* WhatsApp CTA Button */}
        <a
          href="https://wa.link/ewfcan"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            backgroundColor: "#42DC2D",
            color: "#0A0A0A",
            padding: "0.65rem 1.5rem",
            borderRadius: "10px",
            fontSize: "0.875rem",
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 4px 18px rgba(66,220,45,0.4)",
            transition: "all 0.2s ease",
            letterSpacing: "0.02em",
            marginBottom: "1.25rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#7AE86A";
            e.currentTarget.style.transform =
              "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "0 8px 28px rgba(66,220,45,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#42DC2D";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 18px rgba(66,220,45,0.4)";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Tire suas dúvidas aqui!
        </a>

        {/* Trust line */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginTop: "0.5rem",
          }}
        >
          {[
            "✓ Resposta em até 1h",
            "✓ Sem compromisso",
            "✓ Consulta inicial gratuita",
          ].map((item) => null)}
        </div>
      </div>
    </section>
  );
}