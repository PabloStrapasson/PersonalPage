import styles from "./iconsgrid.module.css"
import Icon from "@/components/Icon/icon"

interface Props {
  skills: string[]
}

export default function IconsGrid({ skills }: Props) {
  return (
    <div className={styles.icons_grid}>
        {skills.map((tech) => (
          <Icon
            src={`/icons/${tech}.svg`}
            alt={tech}
            class_name="icon_knowledges"
            title={tech}
          />
        ))}
    </div>
  )
}
