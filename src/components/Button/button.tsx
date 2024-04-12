import styles from "./button.module.css"

interface Props {
    href: string,
    children: React.ReactNode
}

export default function Button({ href, children }: Props) {
  return (
    <a href={href} className={styles.repository_button} target="_blank">
        {children}
    </a>
  )
}
