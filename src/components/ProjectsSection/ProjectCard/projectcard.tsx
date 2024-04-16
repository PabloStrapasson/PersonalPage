import styles from "./projectcard.module.css"
import { Project } from "@/types/Project"
import Icon from "@/components/Icon/icon"
import Button from "@/components/Button/button"

interface Props {
    project: Project
}

export default function ProjectCard({project}: Props) {
  return (
    <div className={styles.project_card}>
        <div className={styles.project_card_header}>
          <h2>{project.name}</h2>
        </div>

        <div className={styles.project_description}>
          {project.description}
        </div>
        
        <div className={styles.button}>
          <div className={styles.icons}>
            {project.technologies.map((tech) => (
                <Icon
                    src={`/icons/${tech}.svg`}
                    alt={tech}
                    class_name="icon_projects_tecnologies"
                    title={tech}
                />
            ))}
          </div>
          <Button href={project.repository}> Repositório &raquo;</Button>
        </div>
      </div>
  )
}
// ->: &rarr;
// >>: &raquo;