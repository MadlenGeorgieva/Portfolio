import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import styles from "./ProjectDetailTemplate.module.css";

const keyTerms = [
  "UX/UI designer",
  "UX/UI Lead",
  "sole designer and developer",
  "main project contributor",
  "user-centered experience",
  "front-end prototype",
  "user flows",
  "user journeys",
  "information architecture",
  "interaction design",
  "visual interface",
  "wireframing",
  "wireframes",
  "prototyping",
  "usability testing",
  "affinity diagram",
  "affinity diagramming",
  "personas",
  "interviews",
  "observations",
  "mind mapping",
  "task flows",
  "empathy map",
  "Value Proposition Canvas",
  "interactive quiz",
  "hi-fi prototypes",
  "Figma",
  "memorabilia",
  "research insights",
  "target audience",
  "personalized recommendations",
  "personalized game recommendations",
  "personalised location discovery",
  "responsive website",
  "high-fidelity Figma prototype",
  "visual design system",
  "UX strategy",
  "UI design",
  "design direction",
  "shared family experience",
  "tutorial videos",
  "real-time information",
  "SOS function",
  "SOS feature",
  "desk research",
  "field research",
  "semi-structured interviews",
  "audience segmentation",
  "user story mapping",
  "Rich Picture",
  "OOUX",
  "empathy maps",
  "pain points",
  "testing and iteration",
  "guerrilla testing",
  "five-second tests",
  "target group",
  "Danish families with children",
  "moodboards",
  "style tiles",
  "ideation",
  "plant collection",
  "plant exploration",
  "families with children",
  "large collection of board games",
  "game-selection process",
  "hidden gems",
  "crowded environments",
];

const keyTermPattern = new RegExp(
  `(${keyTerms
    .sort((first, second) => second.length - first.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "gi",
);

const headingConclusions = {
  "botanical-garden": {
    sections: [
      "PLANT INFORMATION WAS NOT ENGAGING FAMILIES",
      "TURNING VISITS INTO SHARED EXPLORATION",
      "UX/UI DESIGN FOR A PLAYFUL FAMILY EXPERIENCE",
    ],
    process: [
      "UNDERSTANDING HOW FAMILIES VISIT",
      "FOCUSING ON FAMILIES WITH CHILDREN",
      "DESIGNING A SHARED EXPLORATION",
      "REFINING THE FINAL FAMILY EXPERIENCE",
    ],
  },
  "bla-sol": {
    sections: [
      "FESTIVAL VISITORS FELT DISCONNECTED",
      "ONE PLATFORM FOR A SAFER FESTIVAL",
      "UX/UI DESIGN AND FRONT-END DEVELOPMENT",
    ],
    process: [
      "UNCOVERING FESTIVAL PAIN POINTS",
      "TURNING RESEARCH INTO CLEAR PRIORITIES",
      "DESIGNING THE FESTIVAL COMPANION",
      "TESTING AND BUILDING THE SOLUTION",
    ],
  },
  spilcafeen: {
    sections: [
      "TOO MUCH CHOICE MADE GAMES HARD TO FIND",
      "MAKING GAME DISCOVERY SIMPLE",
      "LEADING THE UX/UI DIRECTION",
    ],
    process: [
      "UNDERSTANDING HOW GROUPS CHOOSE GAMES",
      "STRUCTURING NEEDS AND GAME INFORMATION",
      "DESIGNING PERSONALIZED RECOMMENDATIONS",
      "VALIDATING A FASTER SELECTION EXPERIENCE",
    ],
  },
  "hidden-hygge-places": {
    sections: [
      "HIDDEN HYGGE PLACES WERE HARD TO DISCOVER",
      "MATCHING PEOPLE WITH MEANINGFUL PLACES",
      "DESIGNING AND DEVELOPING THE FULL EXPERIENCE",
    ],
    process: [
      "UNDERSTANDING WHAT MAKES HYGGE MEANINGFUL",
      "TURNING RESEARCH INTO A FOCUSED CONCEPT",
      "CREATING A PERSONALIZED DISCOVERY JOURNEY",
      "REFINING AND BUILDING THE FINAL EXPERIENCE",
    ],
  },
};

function emphasizeKeyTerms(text) {
  return text.split(keyTermPattern).map((part, index) =>
    keyTerms.some((term) => term.toLowerCase() === part.toLowerCase())
      ? <strong className={styles.keyTerm} key={`${part}-${index}`}>{part}</strong>
      : part
  );
}

function ProjectDetailTemplate({ project }) {
  const [openProcessImage, setOpenProcessImage] = useState(null);
  const heroLinkLabel = project.liveUrl?.includes("figma.com")
    ? "Go to Figma prototype"
    : "Go to live site";

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
        <section className={`${styles.hero} ${project.slug === "bla-sol" ? styles.fullPhoneHero : ""}`}>
          {project.liveUrl ? (
            <a
              className={styles.heroLink}
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${heroLinkLabel}: ${project.title}`}
            >
              <img src={project.heroImage} alt={`${project.title} project preview`} />
              <span className={styles.heroLinkLabel}>{heroLinkLabel}</span>
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
          <p className={styles.tagline}>{emphasizeKeyTerms(project.tagline)}</p>
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
            {project.sections.map((section, index) => (
              <article key={section.heading}>
                <h3>
                  {section.heading}
                  <span className={styles.headingConclusion}> - {headingConclusions[project.slug]?.sections[index]}</span>
                </h3>
                <p>{emphasizeKeyTerms(section.text)}</p>
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
                  <h3>
                    {step.title}
                    <span className={styles.headingConclusion}> - {headingConclusions[project.slug]?.process[index]}</span>
                  </h3>
                  <p className={styles.stepText}>{emphasizeKeyTerms(step.text)}</p>
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
                    style={{
                      objectPosition: project.slug === "botanical-garden" && step.title === "DELIVER"
                        ? "center bottom"
                        : step.imagePosition,
                      transform: project.slug === "bla-sol" && step.title === "DELIVER"
                        ? "scale(1.15) translateY(-5%)"
                        : undefined,
                    }}
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
      <BackToTop />
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
