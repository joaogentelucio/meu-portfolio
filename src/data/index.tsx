export interface Projeto {
  title: string;
  subtitle: string;
  srcImg: string;
  description: string;
  technologies: string;
  websiteURL: string;
  codeURL: string;
}

export const projetos: Projeto[] = [
  {
    title: "Validar Email",
    subtitle: "Mar 2025 - Abr 2025",
    srcImg: "/src/assets/projeto1.png",
    description: "Valida os inputs de email e senha impedindo que passem nulos.",
    technologies: "Tecnologias: react.js, react-icons",
    websiteURL: "validar-email-peach.vercel.app",
    codeURL: "https://github.com/joaogentelucio/validar-email",
  },
  {
    title: "Project Craze Maze",
    subtitle: "Jul 2019 - May 2019",
    srcImg: "/src/assets/images/project1-craze-maze.gif",
    description: "Game to escape the maze.",
    technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
    websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
    codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
  },
  {
    title: "Project Craze Maze",
    subtitle: "Jul 2019 - May 2019",
    srcImg: "/src/assets/images/project1-craze-maze.gif",
    description: "Game to escape the maze.",
    technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
    websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
    codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
  },
];
