import styles from "../styles/not-found.module.css"

export default function Minha404() {
  return (
    <main className={styles.main}>
        <div className={styles.not_found}>
            <img src="/images/404.png" alt="404" />
            <div>
                <h2>Ops... </h2>
                <h2>Página em construção</h2>
            </div>
        </div>
        <div className={styles.home_button}>
            <a href="/"> &laquo; Home </a>
        </div>
    </main>
  )
}
