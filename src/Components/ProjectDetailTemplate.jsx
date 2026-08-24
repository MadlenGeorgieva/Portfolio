import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./ProjectDetailTemplate.module.css";

function ProjectDetailTemplate({ project }) {
  const [openProcessImage, setOpenProcessImage] = useState(null);

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);

    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = previousRestoration;
    };
  }, [project.slug]);

  useEffect(() => {
    if (!openProcessImage) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpenProcessImage(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [openProcessImage]);

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          {project.liveUrl ? (
            <a
              className={styles.heroLink}
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open the live ${project.title} project`}
            >
              <img src={project.heroImage} alt={`${project.title} project preview`} />
            </a>
          ) : (
            <img src={project.heroImage} alt={`${project.title} project preview`} />
          )}
        </section>

        <section className={styles.intro}>
          <div className={styles.titleRow}>
            <h1
              aria-label={project.title}
              className={["botanical-garden", "hidden-hygge-places"].includes(project.slug) ? styles.stackedTitle : undefined}
            >
              {(["botanical-garden", "hidden-hygge-places"].includes(project.slug)
                ? project.title.split(" ").map((word, wordIndex) => (
                    <span className={styles.titleWord} key={word}>
                      {word.split("").map((letter, letterIndex) => (
                        letter.toUpperCase() === "O"
                          ? <span className={styles.titleO} key={`${letter}-${letterIndex}`}>{letter}</span>
                          : letter
                      ))}
                      {wordIndex < project.title.split(" ").length - 1 ? " " : null}
                    </span>
                  ))
                : project.title.split("").map((letter, index) => (
                    letter.toUpperCase() === "O"
                      ? <span className={styles.titleO} key={`${letter}-${index}`}>{letter}</span>
                      : letter
                  )))}
            </h1>
            <p>{project.type}</p>
          </div>
          <p className={styles.tagline}>{project.tagline}</p>
        </section>

        <section className={styles.contentSection}>
          <h2>PROJECT OVERVIEW</h2>
          <div className={styles.overviewGrid}>
            {project.overview.map((item, index) => (
              <article
                className={`${styles.overviewCircle} ${index % 2 ? styles.yellow : styles.blue}`}
                key={item.label}
              >
                <h3>{item.label}</h3>
                {item.label === "FOCUS" && project.focusIcons ? (
                  <div className={styles.focusIcons} aria-label="Project tools">
                    {project.focusIcons.map((icon, iconIndex) => (
                      <img src={icon} alt="" key={`${project.slug}-focus-${iconIndex}`} />
                    ))}
                  </div>
                ) : item.icon ? <span className={styles.focusIcon}>{item.icon}</span> : null}
                {item.label === "FOCUS" && project.focusIcons ? null : <p>{item.value}</p>}
              </article>
            ))}
          </div>

          <div className={styles.copyGrid}>
            {project.sections.map((section) => (
              <article key={section.heading}>
                <h3>{section.heading}</h3>
                <p>{section.text}</p>
              </article>
            ))}
          </div>

          <h2 className={styles.processHeading}>DESIGN PROCESS</h2>
          <div className={styles.processList}>
            {project.process.map((step, index) => (
              <article
                className={`${styles.processStep} ${index % 2 ? styles.processRight : styles.processLeft}`}
                key={step.title}
              >
                <div className={`${styles.processCard} ${index % 2 ? styles.yellow : styles.blue}`}>
                  <p className={styles.stepNumber}>{String(index + 1).padStart(2, "0")} <sup>/04</sup></p>
                  <h3>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
                <button
                  className={styles.processImage}
                  type="button"
                  onClick={() => setOpenProcessImage(step)}
                  aria-label={`Open ${step.imageAlt} at full size`}
                >
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    style={step.imagePosition ? { objectPosition: step.imagePosition } : undefined}
                  />
                </button>
              </article>
            ))}
          </div>
          <div className={styles.backRow}>
            <Link to="/projects" className={styles.backButton}>
              <span aria-hidden="true">←</span> Back to projects
            </Link>
          </div>
        </section>
        <div className={`${styles.dots} ${styles.dotsLeft}`} aria-hidden="true" />
        <div className={`${styles.dots} ${styles.dotsRight}`} aria-hidden="true" />
      </main>
      <Footer />
      {openProcessImage ? (
        <div
          className={styles.imageLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={openProcessImage.imageAlt}
          onClick={() => setOpenProcessImage(null)}
        >
          <button
            className={styles.imageLightboxClose}
            type="button"
            onClick={() => setOpenProcessImage(null)}
            aria-label="Close image"
          >
            ×
          </button>
          <img
            src={openProcessImage.image}
            alt={openProcessImage.imageAlt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ProjectDetailTemplate;
