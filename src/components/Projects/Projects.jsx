import "./Projects.css";
import stack from "../../assets/projects/stack.png";
import array from "../../assets/projects/array.png";


function Projects() {
const projects = [
  {
    title: "Stack Operation Visualizer",
    tech: "React • JavaScript • CSS",
    description:
      "Visualizes stack operations with animations and expression conversion.",
    image: stack,
    github: "https://github.com/yourusername/stack-visualizer",
    demo: "https://your-demo.vercel.app",
  },
  {
    title: "Offline Games",
    tech: "React • JavaScript",
    description:
      "Interactive array operations with step-by-step visualization.",
    image: array,
    github: "https://github.com/saikiranghali7/Offline-games5",
    demo: "#",
  },
];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
            <h3>{project.title}</h3>

            <p className="tech">{project.tech}</p>

            <p>{project.description}</p>

            <div className="project-buttons">
            <a href={project.github} target="_blank" rel="noreferrer">
              <button>GitHub</button>
            </a>
            
            <a href={project.demo} target="_blank" rel="noreferrer">
              <button>Live Demo</button>
            </a>  
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;