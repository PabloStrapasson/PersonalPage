import styles from "./knowledges.module.scss"
import IconsGrid from "./IconsGrid/iconsgrid"

const knowledges = ["python", "html", "css", "sass","javascript", "typescript", "next", "nodejs", "java", "mongodb", "sqlite", "mysql", "github"]

export default function Knowledges() {
  return (
    <div className={styles.main_content}>
        <div className={styles.main_title}>
            <h3>Tecnologias:</h3>
        </div>
        <div className={styles.icons_grid}>
            <IconsGrid knowledges={knowledges}/>
        </div>  
    </div>
  )
}
 