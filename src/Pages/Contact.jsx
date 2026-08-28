import Header from "../Components/Header";
import styles from "./Contact.module.css";

function Contact() {
  return <div className={styles.page}>
    <Header />
    <main className={styles.main}>
      <h1>C<span>O</span>NTACT<br />ME</h1>
      <section className={styles.details}>
        <a href="https://www.linkedin.com/in/madlen-georgieva-39ab3230a" target="_blank" rel="noreferrer"><u>Madlen Georgieva</u><b>in</b></a>
        <a href="tel:+4571817500"><span>(+45) 71817500<br />(+359) 879206069</span><b aria-label="Phone">☎</b></a>
        <a href="mailto:madlengeorgieva2005@gmail.com"><span>madlengeorgieva2005@gmail.com<br />eaa25mage@students.eaaa.dk</span><b aria-label="Email">✉</b></a>
      </section>
      <div className={styles.decorCircles} aria-hidden="true">
        <i className={`${styles.decorCircle} ${styles.largeBlue}`} />
        <i className={`${styles.decorCircle} ${styles.largeYellow}`} />
        <i className={`${styles.decorCircle} ${styles.smallBlueOne}`} />
        <i className={`${styles.decorCircle} ${styles.smallBlueTwo}`} />
        <i className={`${styles.decorCircle} ${styles.smallYellowOne}`} />
        <i className={`${styles.decorCircle} ${styles.smallYellowTwo}`} />
      </div>
      <div className={`${styles.dots} ${styles.dotsLeft}`} aria-hidden="true" />
      <div className={`${styles.dots} ${styles.dotsRight}`} aria-hidden="true" />
    </main>
  </div>;
}

export default Contact;
