import styles from "./iconsgrid.module.css"
import Icon from "@/components/Icon/icon"

interface Props {
  knowledges: string[]
}

export default function IconsGrid({ knowledges }: Props) {
  return (
    <div>
        {knowledges.map((tech) => (
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
