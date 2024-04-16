import styles from "./knowledges.module.css"
import IconsGrid from "./IconsGrid/iconsgrid"

const skills = ["python", "html", "css", "sass","javascript", "typescript", "react", "next", "nodejs", "java", "mongodb", "sqlite", "mysql", "git", "github"]

export default function Knowledges() {
  return (
    <div className={styles.main_content}>
        <div className={styles.main_title}>
            <h3>Skills:</h3>
        </div>
        <div className={styles.icons_grid}>
            <IconsGrid skills={skills}/>
        </div>  
    </div>
  )
}
 