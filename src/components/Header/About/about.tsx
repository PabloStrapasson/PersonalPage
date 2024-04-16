import Icon from "@/components/Icon/icon"
import SocialMedias from "../Profile/SocialMedias/socialmedias"
import styles from "./about.module.css"

export default function About() {
  return (
    <div className={styles.about}>
        <h2> Prazer, </h2>
        <h2> me chamo Pablo, </h2>
        <h2> e sou </h2>
        <h1> Desenvolvedor Full Stack </h1>
        <br/>
        <p> Sou Bacharel em Ciências da Computação pela Universidade Federal de Santa Catarina e sou apaixonado por desenvolvimento web. Este é meu site pessoal e aqui você poderá ver um pouco sobre os projetos que já desenvolvi :) </p>
    </div>
  )
}
