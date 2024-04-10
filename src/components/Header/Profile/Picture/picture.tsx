import styles from "./picture.module.css"

export default function Picture() {
  return (
    <div className={styles.picture}>
        <img src="/images/profile-photo.png" alt="Profile-image" />
    </div>
  )
}
