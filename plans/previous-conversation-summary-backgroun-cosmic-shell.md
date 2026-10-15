# Plan: Card 2 — logo Projeto Mint + título em mint neon

## Context
O Card 2 da seção de planos (`WhatsAppCTA.tsx`, linhas 259–393) exibia "Acompanhamento Nutricional / Squad Magnus" com tema verde e fundo escuro. O usuário quer:
- Esvaziar todo o conteúdo do card
- Exibir a imagem `/src/imports/projeto.png` (logotipo "Projeto Mint") centralizada dentro do card
- Abaixo da imagem, um `<h2>` com "Acompanhamento Nutricional / Squad Magnus"
- Remover o fundo do card (transparente)
- Trocar a cor do card para o verde-neon mint da imagem: `#00FF80`

## Cor mint
Da imagem `projeto.png`, a letra "MINT" aparece em verde neon vibrante ≈ `#00FF80`.  
rgba equivalente: `rgba(0,255,128,…)`

## Mudanças — `src/app/components/WhatsAppCTA.tsx`

### Wrapper do Card 2 (linha 260)
```jsx
style={{
  backgroundColor: "transparent",
  border: "1px solid rgba(0,255,128,0.25)",
  borderRadius: "18px",
  padding: "1.75rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.5rem",
  boxShadow: "0 0 30px rgba(0,255,128,0.07)",
}}
```

### Conteúdo interno (substituir tudo dentro do card)
```jsx
<img
  src="/src/imports/projeto.png"
  alt="Projeto Mint"
  style={{ width: "180px", maxWidth: "100%", objectFit: "contain" }}
/>
<h2 style={{
  color: "#00FF80",
  fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
  fontWeight: 900,
  fontFamily: "sans-serif",
  textAlign: "center",
  lineHeight: 1.3,
  margin: 0,
}}>
  Acompanhamento Nutricional / Squad Magnus
</h2>
```

## Verificação
- Card 1 (esquerda) fica intacto com tema verde
- Card 2 (direita) mostra: logo Projeto Mint + h2 em mint neon, fundo transparente, borda mint sutil
- Sem regressão no layout grid 2 colunas
