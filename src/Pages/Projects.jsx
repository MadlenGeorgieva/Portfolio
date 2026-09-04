import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BackToTop from "../Components/BackToTop";
import styles from "./Projects.module.css";
import blaSolImage from "../assets/project-bla-sol.png";
import hyggeImage from "../assets/project-hygge.png";
import spilcafeenImage from "../assets/project-spilcafeen.png";
import botanicalImage from "../assets/project-botanical.png";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

const projectImages = [blaSolImage, hyggeImage, spilcafeenImage, botanicalImage];

const projects = [
  { title: "BLÅ SOL", subtitle: "MOBILE FESTIVAL COMPANION", tone: "music", mark: "50", slug: "bla-sol" },
  { title: "HIDDEN HYGGE PLACES", subtitle: "PERSONALIZED DISCOVERY WEBSITE", tone: "hygge", mark: "HYGGE", slug: "hidden-hygge-places" },
  { title: "SPILCAFEEN", subtitle: "BOARD-GAME RECOMMENDATION EXPERIENCE", tone: "games", mark: "PLAY", slug: "spilcafeen" },
  { title: "BOTANICAL GARDEN", subtitle: "INTERACTIVE FAMILY EXPLORATION APP", tone: "garden", mark: "AARHUS", slug: "botanical-garden" },
];

function Projects() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return <div className={styles.page}>
    <Header />
    <main className={styles.main}>
      <h1>PR<span>O</span>JECTS</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => <article key={project.title}>
          {project.slug ? <Link
            to={`/projects/${project.slug}`}
            className={styles.mockup}
            aria-label={`View ${project.title} project`}
            style={{ backgroundImage: `url(${projectImages[index]})` }}
          >
            <span className={styles.hoverLabel}>View project</span>
          </Link> : <div
            className={styles.mockup}
            tabIndex="0"
            role="img"
            aria-label={`${project.title} project mockup`}
            style={{ backgroundImage: `url(${projectImages[index]})` }}
          >
            <span className={styles.hoverLabel}>View project</span>
          </div>}
          <p><b>{project.title}</b> - {project.subtitle}</p>
          <i className={index % 2 ? styles.yellow : styles.blue} />
        </article>)}
      </div>
      <div className={`${styles.dots} ${styles.dotsLeft}`} aria-hidden="true" />
      <div className={`${styles.dots} ${styles.dotsRight}`} aria-hidden="true" />
    </main>
    <BackToTop />
    <Footer />
  </div>;
}

export default Projects;
