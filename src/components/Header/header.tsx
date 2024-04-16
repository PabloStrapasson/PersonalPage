import styles from "./header.module.css"
import About from "./About/about"
import Profile from "./Profile/profile"

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.profile}>
        <About/>
        <Profile/>
      </div>
      <div className={styles.about}>
        
      </div>
    </div>
  )
}
