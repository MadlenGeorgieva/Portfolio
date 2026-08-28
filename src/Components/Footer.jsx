import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/madlen-georgieva-39ab3230a"
        target="_blank"
        rel="noreferrer"
        className={styles.contactItem}
      >
        <div className={styles.icon}>in</div>
        <span>Madlen Georgieva</span>
      </a>

      <div className={styles.divider}></div>

      <div className={styles.contactItem}>
        <div className={styles.icon} aria-hidden="true">☎</div>

        <div>
          <p>(+45) 71817500</p>
          <p>(+359) 879206069</p>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.contactItem}>
        <div className={styles.icon} aria-hidden="true">✉</div>

        <div>
          <p>madlengeorgieva2005@gmail.com</p>
          <p>eaa25mage@students.eaaa.dk</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
