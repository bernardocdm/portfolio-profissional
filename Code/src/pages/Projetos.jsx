import '../assets/css/Projetos.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

async function getRepoTechnologies(owner, repo) {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
    const data = await res.json();
    return Object.keys(data);
  } catch {
    return [];
  }
}

async function getReadmeDescription(owner, repo) {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);
    const data = await res.json();

    if (!data.content) return null;

    const decoded = new TextDecoder("utf-8").decode(
  Uint8Array.from(atob(data.content.replace(/\n/g, "")), c => c.charCodeAt(0)));
    const lines = decoded.split('\n');

    const description = lines.find(line =>
      line.trim() &&
      !line.startsWith('#') &&
      line.length > 20
    );

    return description || null;

  } catch {
    return null;
  }
}

function Projetos() {

  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);

  useEffect(() => {

    async function loadProjects() {

      try {

        const res = await fetch("https://api.github.com/users/bernardocdm/repos?per_page=6&page=1");
        const data = await res.json();

        const sorted = data
        .filter(repo => !repo.private)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 6); 

        const projectsWithData = [];

        for (const repo of sorted) {

          let technologies = [];
          let description = repo.description;

          try {
            technologies = await getRepoTechnologies(repo.owner.login, repo.name);
          } catch {}

          if (!description && repo.size > 0) {
            try {
              description = await getReadmeDescription(repo.owner.login, repo.name);
            } catch {}
          }

          projectsWithData.push({
            ...repo,
            technologies,
            description: description || "Sem descrição"
          });

        }

        setProjects(projectsWithData);

      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      }

    }

    loadProjects();

  }, []);

  return (
    <div className="projetos">
      <div className="container">

        <h1 className="page-title">{t("projetos")}</h1>

        <div className="projects-grid">

          {projects.map((project) => (

            <div key={project.id} className="project-card">

              <img
                src={`https://opengraph.githubassets.com/1/${project.owner?.login}/${project.name}`}
                alt={project.name}
                className="project-image"
                onError={(e) => {
                  e.target.src = "/assets/img/project-placeholder.png";
                }}
              />

              <h3 className="project-name">{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technologies">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.html_url}
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no GitHub
              </a>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default Projetos;