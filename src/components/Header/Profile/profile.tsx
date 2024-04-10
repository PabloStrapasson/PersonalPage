import styles from "./profile.module.css"
import Picture from "./Picture/picture"
import SocialMedias from "./SocialMedias/socialmedias"

export default function Profile() {
  return (
    <div className={styles.profile_itens}>
        <Picture/>
        <SocialMedias/>
    </div>
  )
}
