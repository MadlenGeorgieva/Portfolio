import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";
import upArrow from "../assets/up-arrow.png";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 420);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to the top of the page"
      tabIndex={visible ? 0 : -1}
    >
      <img className={styles.arrowIcon} src={upArrow} alt="" aria-hidden="true" />
      <span aria-hidden="true">↑</span>
      <span className={styles.label}>TOP</span>
    </button>
  );
}

export default BackToTop;
