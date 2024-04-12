import styles from "../styles/page.module.css";
import Main from "@/components/Header/header";
import Knowledges from "@/components/KnowledgesSection/knowledges";
import ProjectsSection from "@/components/ProjectsSection/projectssection";

export default function Home(projects : Object) {
  return (
    <main className={styles.main}>
      <Main/>
      <Knowledges/>
      <ProjectsSection />
    </main>
  );
}
