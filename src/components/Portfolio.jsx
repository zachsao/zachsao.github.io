import githubIcon from "../assets/github.svg";
import projectList from "../data/projects.json";

function ProjectCard({ project, index }) {
  const isReverse = index % 2 !== 0;

  return (
    <article
      className={`project-card reveal${isReverse ? " project-card--reverse" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="project-card__mockup">
        <img src={project.screenshots} alt={`${project.name} mockup`} />
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <img
            src={project.imagePath}
            alt=""
            className="project-card__icon"
          />
          <h3 className="project-card__name">{project.name}</h3>
        </div>

        <p className="project-card__year">{project.year}</p>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tags">
          {project.tech.split(" - ").map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__features">
          <p className="project-card__features-title">Features</p>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-card__links">
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="project-card__github"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="" />
              Source code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Portfolio() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Personal projects</h2>
        </div>

        <div className="projects__grid">
          {projectList.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
