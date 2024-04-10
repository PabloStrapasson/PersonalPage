import styles from "./knowledges.module.css"
import IconsGrid from "./IconsGrid/iconsgrid"

export default function Knowledges() {
  return (
    <div className={styles.main_content}>
        <div className={styles.main_title}>
            <h3>Tecnologias</h3>
        </div>
        <div className={styles.icons_grid}>
            <IconsGrid/>
        </div>  
    </div>
  )
}
 