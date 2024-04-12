import styles from "./icon.module.css"

interface Props {
    src: string,
    alt: string,
    class_name: string,
    href?: string,
    title: string
}

export default function Icon({ src, alt, class_name, href, title }: Props) { 
    
    return (
    <a href={href} target="_blank">
        <img src={src} alt={alt} className={styles[class_name]} title={title}/>
    </a>
  )
}
