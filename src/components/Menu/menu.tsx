import styles from "./menu.module.css"

export default function Menu() {
  return (
    <header className={styles.main_menu}>
        <div className={styles.menu_content}>
            <a href="/#meus_projetos"> Meus Projetos &raquo; </a>
            <a href="/docs/Curriculo_Pablo_Strapasson.pdf" download="Curriculo_Pablo_Strapasson"> Download CV &raquo; </a>
        </div>
    </header>
  )
}
