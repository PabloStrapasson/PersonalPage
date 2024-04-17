import styles from "./menu.module.css"

export default function Menu() {
  return (
    <header className={styles.main_menu}>
        <div className={styles.menu_content}>
            {//<h1> Portifólio </h1>
            }
            <a href="/#meus_projetos"> Meus Projetos &raquo; </a>
        </div>
    </header>
  )
}
