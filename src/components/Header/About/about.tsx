import styles from "./about.module.css"

export default function About() {
  return (
    <div className={styles.about}>
        <h2 id={styles.first_h2}> Prazer, </h2>
        <h2 id={styles.second_h2}> me chamo Pablo, </h2>
        <h2 id={styles.third_h2}> e sou </h2>
        <h1 id={styles.first_h1}> Desenvolvedor Back-End </h1>
        <br/>
        <p> Sou Bacharel em Ciências da Computação pela Universidade Federal de Santa Catarina e sou apaixonado por desenvolvimento web. Este é meu site pessoal e aqui você poderá ver um pouco sobre os projetos que já desenvolvi :) </p>
    </div>
  )
}
