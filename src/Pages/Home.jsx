import styles from "./Home.module.css";
import profileImage from "../assets/me.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.portfolioTitle}>
            <h1>
              P<span className={styles.blueO}>O</span>RT
            </h1>

            <h1>
              FOLI<span className={styles.yellowO}>O</span>
            </h1>

          </div>

          <div className={styles.intro}>
            <p className={styles.year}>2026</p>
            <div className={styles.introLine}></div>

            <p>
              Crafting intuitive experiences
              <br />
              that connect people and brands.
            </p>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.yellowShape}></div>
          <div className={styles.blueShape}></div>

          <div className={styles.profileCircle}>
            <img src={profileImage} alt="Portrait of Madlen Georgieva" />
          </div>

          <svg
            className={styles.nameTextSvg}
            viewBox="0 0 320 320"
            aria-hidden="true"
          >
            <defs>
              <path
                id="nameCurve"
                d="M 160 18 A 142 142 0 0 1 302 160"
                fill="none"
              />
            </defs>

            <text className={styles.nameText}>
              <textPath
                href="#nameCurve"
                startOffset="0%"
              >
                MADLEN GEORGIEVA
              </textPath>
            </text>
          </svg>

          <div className={styles.uxBadge}>UX/UI</div>

        </div>
        <div className={`${styles.frameDots} ${styles.frameDotsLeft}`} aria-hidden="true" />
        <div className={`${styles.frameDots} ${styles.frameDotsRight}`} aria-hidden="true" />
      </section>

      <section className={styles.skillsBar}>
        <Link to="/about" className={styles.arrow} aria-label="Go to the About page">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path d="M13 51 51 13M22 13h29v29" />
          </svg>
        </Link>

        <div className={styles.skillGroup}>
          <p>WEB &amp; MOBILE DESIGN</p>
          <span>PRODUCT DESIGN</span>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.skillGroup}>
          <p>RESEARCH</p>
          <span>WIREFRAMING</span>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.skillGroup}>
          <p>UX/UI DESIGN</p>
          <span>PROTOTYPING</span>
        </div>
      </section>
    </main>
  );
}

export default Home;
