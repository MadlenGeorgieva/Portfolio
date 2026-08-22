import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Projects.module.css";
import blaSolImage from "../assets/project-bla-sol.png";
import hyggeImage from "../assets/project-hygge.png";
import spilcafeenImage from "../assets/project-spilcafeen.png";
import botanicalImage from "../assets/project-botanical.png";

const projectImages = [blaSolImage, hyggeImage, spilcafeenImage, botanicalImage];

const projects = [
  { title: "BLÅ SOL", subtitle: "LOSE YOURSELF IN THE MUSIC, NOT THE CROWD", tone: "music", mark: "50" },
  { title: "HIDDEN HYGGE PLACES", subtitle: "FIND YOUR NEXT COZY ESCAPE", tone: "hygge", mark: "HYGGE" },
  { title: "SPILCAFEEN", subtitle: "WHERE PLAY HAS NO BORDERS", tone: "games", mark: "PLAY" },
  { title: "BOTANICAL GARDEN AARHUS", subtitle: "BRING YOU DIGITAL GARDEN TO LIFE", tone: "garden", mark: "AARHUS" },
];

function Projects() {
  return <div className={styles.page}>
    <Header />
    <main className={styles.main}>
      <h1>PR<span>O</span>JECTS</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => <article key={project.title}>
          <div
            className={styles.mockup}
            tabIndex="0"
            style={{ backgroundImage: `url(${projectImages[index]})` }}
          >
            <img src={projectImages[index]} alt={`${project.title} project mockup`} />
            <span className={styles.hoverLabel}>View project</span>
          </div>
          <p><b>{project.title}</b> – {project.subtitle}</p>
          <i className={index % 2 ? styles.yellow : styles.blue} />
        </article>)}
      </div>
      <div className={styles.dots} aria-hidden="true" />
    </main>
    <Footer />
  </div>;
}

export default Projects;
