interface Project {
  title: string;
  subtitle: string;
  srcImg: string;
  description: string;
  technologies: string;
  websiteURL: string;
  codeURL: string;
}

const projects: Project[] = [
  {
      title: "Project Example",
      subtitle: "Jul 2023 - Dez 2023",
      srcImg: "/src/assets/images/project-trello.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
      websiteURL: "https://trello.com/",
      codeURL: "https://github.com/",
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", background: 'transparent' }}>
      <img src={project.srcImg} alt={project.title} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{project.title}</h3>
      <p><strong>{project.subtitle}</strong></p>
      <p>{project.description}</p>
      <p><em>{project.technologies}</em></p>
      <div>
          <a href={project.websiteURL} target="_blank" rel="noopener noreferrer">Website</a> |
          <a href={project.codeURL} target="_blank" rel="noopener noreferrer"> Code</a>
      </div>
  </div>
);

export default function Section2() {
  return (
    <section id="section2" style={{ height: '100vh' }}>
      <div style={{ padding: "40px", textAlign: "center" }}>
          <h2 style={{ paddingBottom: "50px"}}>Projetos</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
              ))}
          </div>
      </div>
    </section>
  )
}
