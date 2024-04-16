import styles from "../styles/page.module.css";
import Header from "@/components/Header/header";
import Knowledges from "@/components/KnowledgesSection/knowledges";
import ProjectsSection from "@/components/ProjectsSection/projectssection";

export default function Home(projects : Object) {
  return (
    <main className={styles.main}>
      <Header/>
      <div className={styles.knowledges_container}>
        <Knowledges/>
      </div>
      <ProjectsSection />
    </main>
  );
}
