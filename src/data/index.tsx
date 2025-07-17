export interface Projeto {
  title: string;
  srcImg: string;
  description: string;
  technologies: string;
  websiteURL: string;
  codeURL: string;
}

export const projetos: Projeto[] = [
  {
    title: "Validador",
    srcImg: "https://raw.githubusercontent.com/joaogentelucio/meu-portfolio/refs/heads/main/src/assets/card1.png",
    description: "Valida os inputs de email e senha impedindo que passem nulos.",
    technologies: "Tecnologias: React.JS - Vercel - Blibioteca: react-icons",
    websiteURL: "https://validar-email-peach.vercel.app",
    codeURL: "https://github.com/joaogentelucio/validar-email",
  },
  {
    title: "Conversor",
    srcImg: "https://raw.githubusercontent.com/joaogentelucio/meu-portfolio/refs/heads/main/src/assets/card2.png",
    description: "Converte real em dolar ou euro.",
    technologies: "Tecnologias: JavaScript - HTML - CSS- Netlify",
    websiteURL: "https://bejewelled-dodol-0892ac.netlify.app",
    codeURL: "https://github.com/joaogentelucio/Conversor",
  },
  {
    title: "Sign-in e Sign-up com crud direto na api",
    srcImg: "https://raw.githubusercontent.com/joaogentelucio/meu-portfolio/refs/heads/main/src/assets/card3.png",
    description: "Web site realiza cruds em api atráves da logica php.",
    technologies: "Tecnologias: PHP - JavaScript - HTML - CSS - Netlify",
    websiteURL: "https://cruds-php.netlify.app",
    codeURL: "https://github.com/joaogentelucio/meusistema",
  },
  {
    title: "Portfólio(Este Aqui)",
    srcImg: "https://raw.githubusercontent.com/joaogentelucio/meu-portfolio/refs/heads/main/src/assets/card4.png",
    description: "Meu portfólio para mostrar meus projetos e aprendizados.",
    technologies: "Tecnologias: JavaScript - React.JS - Vite - Vercel",
    websiteURL: "https://meu-portfolio-inky-nine.vercel.app",
    codeURL: "https://github.com/joaogentelucio/meu-portfolio",
  },
];
