import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.about}>
        <section className={styles.leftSide}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>
              AB<span className={styles.yellowO}>O</span>UT
              <span className={styles.titleDot}>•</span>
            </h1>

            <p className={styles.description}>
              I’m a UX/UI designer who enjoys turning complex ideas into clear,
              intuitive digital experiences. I combine curiosity, empathy, and
              creativity to design products that feel both useful and enjoyable.
            </p>
          </div>

          <div className={styles.profileArea}>
            <span className={`${styles.decorDot} ${styles.yellowDotOne}`}></span>
            <span className={`${styles.decorDot} ${styles.blueDotOne}`}></span>
            <span className={`${styles.decorDot} ${styles.blueDotTwo}`}></span>
            <span className={`${styles.decorDot} ${styles.yellowDotTwo}`}></span>
            <span className={`${styles.decorDot} ${styles.blueDotThree}`}></span>

            <div className={styles.profileImage}>
              <img
                src="/images/profile.jpg"
                alt="Portrait of Madlen Georgieva"
              />
            </div>

            <div className={styles.personalityBadge}>INFP-T</div>
          </div>
        </section>

        <section className={styles.skillsArea}>
          <article className={`${styles.skillCircle} ${styles.softSkills}`}>
            <div className={styles.skillIcon}>♙</div>

            <h2>SOFT SKILLS</h2>

            <ul>
              <li>Empathy</li>
              <li>Problem Solving</li>
              <li>Critical Thinking</li>
              <li>Collaboration</li>
              <li>Communication</li>
            </ul>
          </article>

          <article className={`${styles.skillCircle} ${styles.hardSkills}`}>
            <div className={styles.skillIcon}>♨</div>

            <h2>HARD SKILLS</h2>

            <ul>
              <li>UI Design</li>
              <li>UX Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>User Flows</li>
              <li>Design Systems</li>
            </ul>
          </article>

          <article className={`${styles.skillCircle} ${styles.tools}`}>
            <div className={styles.skillIcon}>⚒</div>

            <h2>TOOLS</h2>

            <ul>
              <li>Figma</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git/GitHub</li>
              <li>AI Workflows</li>
            </ul>
          </article>
        </section>

        <div className={styles.dotPattern} aria-hidden="true"></div>
      </main>

      <Footer />
    </div>
  );
}

export default About;