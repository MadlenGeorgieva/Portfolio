import profileImage from "../assets/me.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./AboutPage.module.css";

const skills = [
  { className: "soft", icon: "♧", title: "SOFT SKILLS", items: ["Empathy", "Problem Solving", "Critical Thinking", "Collaboration", "Communication"] },
  { className: "hard", icon: "♙", title: "HARD SKILLS", items: ["UI Design", "UX Research", "Wireframing", "Prototyping", "User Flows", "Design Systems"] },
  { className: "tools", icon: "⚒", title: "TOOLS", items: ["Figma", "HTML/CSS", "JavaScript", "React", "WordPress", "Git/GitHub", "AI Workflows"] },
];

function AboutPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>AB<span>O</span>UT <i>•</i></h1>
          <p>I’m a UX/UI designer who enjoys turning complex ideas into clear, intuitive digital experiences. I combine curiosity, empathy, and creativity to design products that feel both useful and enjoyable.</p>

          <div className={styles.portraitArea}>
            <i className={styles.yellowOne} /><i className={styles.blueOne} />
            <i className={styles.blueTwo} /><i className={styles.yellowTwo} />
            <div className={styles.portrait}><img src={profileImage} alt="Madlen Georgieva" /></div>
            <div className={styles.badge}>INFP-T</div>
          </div>
        </section>

        <section className={styles.skillMap}>
          {skills.map((skill) => (
            <article className={`${styles.circle} ${styles[skill.className]}`} key={skill.title}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h2>{skill.title}</h2>
              <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
          <i className={styles.mapBlue} /><i className={styles.mapYellow} />
        </section>
        <div className={`${styles.dots} ${styles.dotsLeft}`} aria-hidden="true" />
        <div className={`${styles.dots} ${styles.dotsRight}`} aria-hidden="true" />
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
