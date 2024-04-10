import Image from "next/image";
import styles from "../styles/page.module.css";
import Main from "@/components/Header/header";
import Knowledges from "@/components/KnowledgesSection/knowledges";

export default function Home() {
  return (
    <main className={styles.main}>
      <Main/>
      <Knowledges/>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/icons/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
