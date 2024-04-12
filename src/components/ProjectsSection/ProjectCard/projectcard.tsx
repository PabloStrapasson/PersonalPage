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

        </div>

        <div className={styles.content}>

          <div className={styles.description}>
            {project.description}
          </div>

        </div>
        
        <div className={styles.button}>
          <Button href={project.repository}> Repositório </Button>
        </div>
      </div>
  )
}
