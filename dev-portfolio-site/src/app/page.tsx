import Image from "next/image";
import styles from "./styles/page.module.css";
import Projects from "./components/projects";
/*import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";*/
import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  );
}