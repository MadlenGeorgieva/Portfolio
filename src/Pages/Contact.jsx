import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Contact.module.css";

function Contact() {
  return <div className={styles.page}>
    <Header />
    <main className={styles.main}>
      <h1>C<span>O</span>NTACT<br />ME</h1>
      <section className={styles.details}>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><u>Madlen Georgieva</u><b>in</b></a>
        <a href="tel:+4571817500"><span>(+45) 71817500<br />(+359) 879206069</span><b aria-label="Phone">☎</b></a>
        <a href="mailto:madlengeorgieva2005@gmail.com"><span>madlengeorgieva2005@gmail.com<br />eaa25mage@students.eaaa.dk</span><b>✉</b></a>
      </section>
      <div className={`${styles.dots} ${styles.dotsLeft}`} aria-hidden="true" />
      <div className={`${styles.dots} ${styles.dotsRight}`} aria-hidden="true" />
    </main>
    <Footer />
  </div>;
}

export default Contact;
