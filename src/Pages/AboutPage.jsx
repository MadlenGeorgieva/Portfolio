import { useEffect, useState } from "react";
import profileImage from "../assets/about-profile.jpeg";
import bowlingImage from "../assets/about-bowling.jpg";
import gymnasticsAwardImage from "../assets/about-gymnastics-award.jpg";
import gymnasticsImage from "../assets/about-gymnastics.jpg";
import debateImage from "../assets/about-debate.jpg";
import theatreImage from "../assets/about-theatre.jpg";
import aubgImage from "../assets/about-aubg.jpg";
import aarhusImage from "../assets/about-aarhus.jpg";
import formalImage from "../assets/about-formal.jpg";
import teamVideo from "../assets/about-team-video.mp4";
import forestImage from "../assets/about-volunteering-forest.jpg";
import erasmusImage from "../assets/about-volunteering-erasmus.jpg";
import firstAidImage from "../assets/about-volunteering-first-aid.jpg";
import beachImage from "../assets/about-volunteering-beach.jpg";
import wwfImage from "../assets/about-volunteering-wwf.jpg";
import redCrossImage from "../assets/about-volunteering-red-cross.jpg";
import redCrossEventImage from "../assets/about-volunteering-red-cross-event.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BackToTop from "../Components/BackToTop";
import styles from "./AboutPage.module.css";
import storyStyles from "./AboutStory.module.css";

const aboutKeyTerms = [
  "UX/UI designer",
  "intuitive digital experiences",
  "discipline, patience, teamwork",
  "team leader",
  "Bulgarian Red Cross",
  "mentored Erasmus+ volunteers",
  "hackathons",
  "WWF",
];

const aboutKeyTermPattern = new RegExp(
  `(${aboutKeyTerms
    .sort((first, second) => second.length - first.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "gi",
);

function emphasizeAboutTerms(text) {
  return text.split(aboutKeyTermPattern).map((part, index) =>
    aboutKeyTerms.some((term) => term.toLowerCase() === part.toLowerCase())
      ? <strong className={styles.aboutKeyTerm} key={`${part}-${index}`}>{part}</strong>
      : part
  );
}

const skills = [
  { className: "soft", icon: "♧", title: "SOFT SKILLS", items: ["Empathy", "Problem Solving", "Critical Thinking", "Collaboration", "Communication"] },
  { className: "hard", icon: "♙", title: "HARD SKILLS", items: ["UI Design", "UX Research", "Wireframing", "Prototyping", "User Flows", "Design Systems"] },
  { className: "tools", icon: "⚒", title: "TOOLS", items: ["Figma", "HTML/CSS", "JavaScript", "React", "WordPress", "Git/GitHub", "AI Workflows"] },
];

const storyPhotos = [
  { src: bowlingImage, alt: "Madlen with her bowling team after a competition" },
  { src: gymnasticsAwardImage, alt: "Madlen receiving an award at a gymnastics competition" },
  { src: gymnasticsImage, alt: "Madlen after a rhythmic gymnastics performance" },
  { src: debateImage, alt: "Madlen taking part in a speeches and debates event" },
  { src: theatreImage, alt: "Madlen performing with her Spanish theatre group" },
  { src: aubgImage, alt: "Madlen at the American University in Bulgaria" },
  { src: aarhusImage, alt: "Madlen visiting a historic street in Aarhus" },
];

const volunteeringPhotos = [
  { src: forestImage, alt: "Madlen taking part in an outdoor volunteering activity" },
  { src: erasmusImage, alt: "Madlen with Erasmus Plus volunteers" },
  { src: firstAidImage, alt: "Madlen helping during a youth first-aid activity" },
  { src: beachImage, alt: "Madlen during an outdoor environmental activity" },
  { src: wwfImage, alt: "Madlen participating in a WWF activity" },
  { src: redCrossImage, alt: "Madlen volunteering with the Bulgarian Red Cross" },
  { src: redCrossEventImage, alt: "Madlen at a Bulgarian Red Cross event" },
  { src: formalImage, alt: "Madlen dressed for a formal event" },
];

const galleryItems = [
  { src: teamVideo, alt: "Video from Madlen's team activities", type: "video" },
  ...storyPhotos.map((photo) => ({ ...photo, type: "image" })),
  ...volunteeringPhotos.map((photo) => ({ ...photo, type: "image" })),
];

const teamGalleryItems = galleryItems.slice(0, 1 + storyPhotos.length);

function MobileStoryGallery({ items, galleryOffset, label, onOpen }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];
  const previewItems = items.slice(0, 4);

  const move = (direction) => {
    setCurrentIndex((current) => (current + direction + items.length) % items.length);
  };

  return (
    <div className={storyStyles.mobileGallery} aria-label={label}>
      <div className={storyStyles.mobileGalleryStage}>
        <button
          className={`${storyStyles.mobileGalleryArrow} ${storyStyles.mobileGalleryPrevious}`}
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous gallery item"
        >
          ‹
        </button>
        <button
          className={storyStyles.mobileGalleryMain}
          type="button"
          onClick={() => onOpen(galleryOffset + currentIndex)}
          aria-label="Open current gallery item"
        >
          {currentItem.type === "video" ? (
            <video autoPlay loop muted playsInline aria-hidden="true">
              <source src={currentItem.src} type="video/mp4" />
            </video>
          ) : (
            <img src={currentItem.src} alt={currentItem.alt} />
          )}
        </button>
        <button
          className={`${storyStyles.mobileGalleryArrow} ${storyStyles.mobileGalleryNext}`}
          type="button"
          onClick={() => move(1)}
          aria-label="Next gallery item"
        >
          ›
        </button>
      </div>

      <div className={storyStyles.mobileGalleryPreviews}>
        {previewItems.map((item, index) => (
          <button
            className={currentIndex === index ? storyStyles.mobilePreviewActive : undefined}
            type="button"
            key={`${item.src}-preview`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show gallery item ${index + 1}`}
          >
            {item.type === "video" ? (
              <video muted playsInline aria-hidden="true"><source src={item.src} type="video/mp4" /></video>
            ) : (
              <img src={item.src} alt="" />
            )}
            {index === previewItems.length - 1 && items.length > previewItems.length && (
              <span>+{items.length - previewItems.length}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeMedia = activeIndex === null ? null : galleryItems[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const navigateGallery = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % galleryItems.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length);
      }
    };

    document.addEventListener("keydown", navigateGallery);
    return () => document.removeEventListener("keydown", navigateGallery);
  }, [activeIndex]);

  return (
    <div className={`${styles.page} ${storyStyles.page}`}>
      <Header />

      <main className={`${styles.main} ${storyStyles.main}`}>
        <section className={styles.intro}>
          <h1>AB<span>O</span>UT <i>•</i></h1>
          <p>{emphasizeAboutTerms("I’m a UX/UI designer who enjoys turning complex ideas into clear, intuitive digital experiences. I combine curiosity, empathy, and creativity to design products that feel both useful and enjoyable.")}</p>

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

      <section className={storyStyles.storySection} aria-labelledby="team-story-title">
        <div className={storyStyles.storyCopy}>
          <p className={storyStyles.storyEyebrow}>BEYOND DESIGN</p>
          <h2 id="team-story-title">Growing through teams</h2>
          <p>{emphasizeAboutTerms("I’ve been part of different teams from a young age, starting with sports like gymnastics, bowling, tennis, and swimming. Being active taught me discipline, patience, teamwork, and how to stay motivated. Later, in high school, I also joined a speeches and debates team, eventually becoming a team leader, and took part in a Spanish theatre group.")}</p>
        </div>

        <div className={`${storyStyles.storyGallery} ${storyStyles.desktopGallery}`} aria-label="Photos from Madlen's teams and activities">
          <button
            className={storyStyles.storyVideo}
            type="button"
            onClick={() => setActiveIndex(0)}
            aria-label="Open team activities video"
          >
            <video autoPlay loop muted playsInline preload="metadata" aria-hidden="true">
              <source src={teamVideo} type="video/mp4" />
            </video>
          </button>
          {storyPhotos.map((photo, index) => (
            <button
              className={`${storyStyles.storyPhoto} ${storyStyles[`photo${index + 1}`]}`}
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(index + 1)}
              aria-label={`Open photo ${index + 1} of ${storyPhotos.length}`}
            >
              <img src={photo.src} alt={photo.alt} />
            </button>
          ))}
        </div>
        <MobileStoryGallery
          items={teamGalleryItems}
          galleryOffset={0}
          label="Mobile gallery of Madlen's teams and activities"
          onOpen={setActiveIndex}
        />
      </section>

      <section
        className={`${storyStyles.storySection} ${storyStyles.volunteeringSection}`}
        aria-labelledby="volunteering-story-title"
      >
        <div className={storyStyles.storyCopy}>
          <p className={storyStyles.storyEyebrow}>CREATIVITY &amp; IMPACT</p>
          <h2 id="volunteering-story-title">Learning by contributing</h2>
          <p>{emphasizeAboutTerms("High school also gave me the chance to explore volunteering and more creative challenges. I volunteered with the Bulgarian Red Cross, mentored Erasmus+ volunteers in the ABS organization, and participated in several hackathons, including ones organized by WWF, where my team reached the finals. These experiences made me more confident, open-minded, and comfortable working with different people.")}</p>
        </div>

        <div
          className={`${storyStyles.storyGallery} ${storyStyles.volunteeringGallery} ${storyStyles.desktopGallery}`}
          aria-label="Photos from Madlen's volunteering and creative activities"
        >
          {volunteeringPhotos.map((photo, index) => (
            <button
              className={`${storyStyles.storyPhoto} ${storyStyles[`volunteerPhoto${index + 1}`]}`}
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(1 + storyPhotos.length + index)}
              aria-label={`Open volunteering photo ${index + 1} of ${volunteeringPhotos.length}`}
            >
              <img src={photo.src} alt={photo.alt} />
            </button>
          ))}
        </div>
        <MobileStoryGallery
          items={galleryItems.slice(1 + storyPhotos.length)}
          galleryOffset={1 + storyPhotos.length}
          label="Mobile gallery of Madlen's volunteering and creative activities"
          onOpen={setActiveIndex}
        />
      </section>

      <BackToTop />
      <Footer />

      {activeMedia && (
        <div
          className={storyStyles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery photo"
          onClick={() => setActiveIndex(null)}
        >
          <button
            className={storyStyles.lightboxClose}
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close enlarged photo"
          >
            ×
          </button>
          <button
            className={`${storyStyles.lightboxArrow} ${storyStyles.lightboxPrevious}`}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex - 1 + galleryItems.length) % galleryItems.length);
            }}
            aria-label="Previous gallery item"
          >
            ‹
          </button>
          {activeMedia.type === "video" ? (
            <video
              className={storyStyles.lightboxVideo}
              src={activeMedia.src}
              controls
              autoPlay
              playsInline
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              src={activeMedia.src}
              alt={activeMedia.alt}
              onClick={(event) => event.stopPropagation()}
            />
          )}
          <button
            className={`${storyStyles.lightboxArrow} ${storyStyles.lightboxNext}`}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex + 1) % galleryItems.length);
            }}
            aria-label="Next gallery item"
          >
            ›
          </button>
          <p className={storyStyles.lightboxCount}>{activeIndex + 1} / {galleryItems.length}</p>
        </div>
      )}
    </div>
  );
}

export default AboutPage;
