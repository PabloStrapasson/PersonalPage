import styles from "./projectssection.module.css"
import { projects } from "../../../public/projects";
import ProjectCard from "./ProjectCard/projectcard";

const projectsList = projects.projects

export default function ProjectsSection() {
  return (
    <div className={styles.projects_container}>
      {/*projectsList.map((b)=>(
        <p>{b.name}</p>
      ))*/}
      <div className={styles.project_container_header}>
        <h1>
          Meus Projetos:
        </h1>
      </div>
      <div className={styles.projects_grid}>
        {projectsList.map((project) => (
          <ProjectCard project={project}/>
        ))}
      </div>
    </div>
  )
}
