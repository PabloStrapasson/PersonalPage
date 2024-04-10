import styles from "./header.module.css"
import About from "./About/about"
import Profile from "./Profile/profile"

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <About/>
      </div>
      <div>
        <Profile/>
      </div>
    </div>
  )
}
