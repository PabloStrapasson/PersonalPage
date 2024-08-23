import styles from "./socialmedias.module.css"
import Icon from "@/components/Icon/icon"

export default function SocialMedias() {
  return (
    <div className={styles.social_media_icons}>
      <Icon 
        src="/icons/linkedin.svg"
        alt="linkedin"
        class_name="icon_social_media"
        href="https://www.linkedin.com/in/pablo-daniel-riveros-strapasson-103359218"
        title="Linkedin"
      />
      <Icon 
        src="/icons/github.svg"
        alt="github"
        class_name="icon_social_media"
        href="https://github.com/PabloStrapasson"
        title="GitHub"
      />
      
      <Icon 
        src="/icons/gmail1.svg"
        alt="gmail"
        class_name="icon_social_media"
        href="mailto:pablostrapasson98@gmail.com"
        title="Gmail"
      /> 
    </div>
  )
}
