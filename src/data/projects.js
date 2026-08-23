import botanicalHero from "../assets/hero-botanical-new.png";
import blaSolHero from "../assets/hero-bla-sol-new.png";
import spilcafeenHero from "../assets/hero-spilcafeen-new.png";
import hyggeHero from "../assets/hero-hygge-new.png";
import figmaIcon from "../assets/focus-figma.png";
import codingIcon from "../assets/focus-coding.png";
import lightningIcon from "../assets/focus-lightning.png";
import reactIcon from "../assets/focus-react.png";
import botanicalDiscover from "../assets/botanical-discover.png";
import botanicalDefine from "../assets/botanical-define.png";
import botanicalDevelop from "../assets/botanical-develop.png";
import botanicalDeliver from "../assets/botanical-deliver.png";
import blaSolDiscover from "../assets/bla-sol-discover.png";
import blaSolDefine from "../assets/bla-sol-define.png";
import blaSolDevelop from "../assets/bla-sol-develop.png";
import blaSolDeliver from "../assets/bla-sol-deliver.png";
import hyggeDiscover from "../assets/hygge-discover.png";
import hyggeDefine from "../assets/hygge-define.png";
import hyggeDevelop from "../assets/hygge-develop.png";
import hyggeDeliver from "../assets/hygge-deliver.png";
import spilcafeenDiscover from "../assets/spilcafeen-discover.png";
import spilcafeenDefine from "../assets/spilcafeen-define.png";
import spilcafeenDevelop from "../assets/spilcafeen-develop.png";
import spilcafeenDeliver from "../assets/spilcafeen-deliver.png";

export const botanicalGardenProject = {
  slug: "botanical-garden",
  title: "BOTANICAL GARDEN",
  type: "Webapp",
  heroImage: botanicalHero,
  focusIcons: [figmaIcon, codingIcon],
  tagline: "An app that turns garden visitors into explorers, encouraging them to discover plants and save their favourites in a personal digital garden they can take home as a memory of their visit.",
  overview: [
    { label: "CLIENT", value: "BOTANICAL GARDEN AARHUS" },
    { label: "TEAM", value: "5 PEOPLE" },
    { label: "DURATION", value: "2 WEEKS" },
    { label: "FOCUS", value: "UX/UI · HTML · CSS · JS", icon: "⌘" },
  ],
  sections: [
    {
      heading: "THE PROBLEM",
      text: "The Botanical Garden already offers a peaceful, affordable, and educational experience that attracts families. However, our research showed that families visit mainly to spend quality time together, relax, and explore, rather than simply read about plants. The existing QR information felt more informative than interactive, creating an opportunity to make plant exploration more playful, engaging, and motivating for families with children.",
    },
    {
      heading: "THE MISSION",
      text: "Our mission was to turn plant information into a shared family experience. We wanted to create a digital layer that makes exploring the greenhouses more playful, interactive, and educational, encouraging children and parents to discover plants together while making the most of the existing physical experience.",
    },
    {
      heading: "MY ROLE",
      text: "As the UX/UI designer, I focused on turning our research insights into a simple and engaging digital experience. I worked on the user flow, information architecture, wireframes, interaction design, and visual interface, while ensuring the solution was intuitive and appealing for families with children.",
    },
  ],
  process: [
    { title: "DISCOVER", image: botanicalDiscover, imageAlt: "Botanical Garden existing-solutions research board", text: "We explored how visitors experience the Botanical Garden through desk and field research. Visitor reviews, existing digital solutions, observations and informal feedback helped us understand visitor motivations and identify opportunities for a more engaging family experience." },
    { title: "DEFINE", image: botanicalDefine, imageAlt: "Botanical Garden field-research collage", text: "Our research led us to focus on Danish families with children. We identified an opportunity to transform the existing QR-based plant information into a playful and interactive exploration experience, rather than simply providing more information." },
    { title: "DEVELOP", image: botanicalDevelop, imageAlt: "Botanical Garden QR-code prototype screens", text: "We explored different concepts for turning plant discovery into a shared family activity. Through ideation, user flows, wireframes and prototyping, we developed the idea of making visitors explorers and gardeners who discover plants across the greenhouse’s four climates." },
    { title: "DELIVER", image: botanicalDeliver, imageAlt: "Botanical Garden final illustrated interface", text: "We refined the concept through testing and iteration, focusing on usability, engagement and clarity. The final prototype combines exploration, plant collection and educational content with a warm, playful and approachable tone of voice." },
  ],
};

export const blaSolProject = {
  slug: "bla-sol",
  title: "BLÅ SOL",
  type: "Webapp",
  heroImage: blaSolHero,
  focusIcons: [figmaIcon, codingIcon, lightningIcon, reactIcon],
  tagline: "Blå Sol is a mobile festival companion designed to make the festival experience more connected, organized, and safe through intuitive navigation, real-time information, social features, and an SOS function.",
  overview: [
    { label: "CLIENT", value: "BLÅ SOL" },
    { label: "TEAM", value: "2 PEOPLE" },
    { label: "DURATION", value: "4 WEEKS" },
    { label: "FOCUS", value: "UX/UI · HTML · CSS · JS · REACT", icon: "⚡" },
  ],
  sections: [
    { heading: "THE PROBLEM", text: "Blå Sol Festival lacked a digital solution that effectively supported visitors during the event. Our research showed that crowded environments, changing schedules, and difficulties finding friends or important facilities could create confusion, stress, and uncertainty. This created an opportunity for a simple mobile solution that could make the festival experience more organised, connected, and safe." },
    { heading: "THE MISSION", text: "Our mission was to create a simple and accessible mobile experience that helps festival visitors navigate the festival area, stay connected with their friends, and feel informed and safe throughout the event. We wanted to bring essential festival information, communication, navigation, and an SOS feature for emergencies into one clear platform without making the experience feel overwhelming." },
    { heading: "MY ROLE", text: "As the UX/UI designer and main project contributor, I was involved throughout the entire design process — from research and concept development to prototyping and final execution. I worked across UX strategy, user flows, information architecture, wireframing, interaction design, UI design, prototyping, and testing, turning the research insights into a complete and coherent digital experience for Blå Sol Festival." },
  ],
  process: [
    { title: "DISCOVER", image: blaSolDiscover, imageAlt: "Blå Sol festival research board", text: "We explored the challenges festival visitors face around navigation, communication and safety. Through desk research, segmentation, field research, interviews and observation, we investigated how people behave in crowded festival environments and what they need to feel informed and connected." },
    { title: "DEFINE", image: blaSolDefine, imageAlt: "Blå Sol Matteo audience persona", text: "We structured our findings using empathy maps, affinity diagramming and personas to identify recurring needs and pain points. This helped us define the core opportunity: creating a simple mobile solution that reduces confusion and helps festival guests navigate, stay connected and feel safe." },
    { title: "DEVELOP", image: blaSolDevelop, imageAlt: "Blå Sol low-fidelity wireframes", text: "We explored different ideas through sketches, moodboards, style tiles and information architecture. We developed the festival map, navigation and communication features while applying UX principles to create a clear and accessible experience." },
    { title: "DELIVER", image: blaSolDeliver, imageAlt: "Blå Sol final 50 Days Left interface", text: "We tested the concept with 10 participants from the target group and used their feedback to refine the experience. The final solution was developed as an interactive Figma prototype and further implemented as a front-end prototype, bringing together navigation, communication, safety and real-time festival information." },
  ],
};

export const spilcafeenProject = {
  slug: "spilcafeen",
  title: "SPILCAFEEN",
  type: "Webapp",
  heroImage: spilcafeenHero,
  focusIcons: [figmaIcon, codingIcon, lightningIcon, reactIcon],
  tagline: "Spilcafeen is a responsive digital experience that helps visitors discover board games suited to their group, interests, and mood. Through personalized recommendations and clear game information, finding the right game becomes simple, memorable, and enjoyable.",
  overview: [
    { label: "CLIENT", value: "SPILCAFEEN" },
    { label: "TEAM", value: "4 PEOPLE" },
    { label: "DURATION", value: "6 WEEKS" },
    { label: "FOCUS", value: "UX/UI · HTML · CSS · JS · REACT", icon: "⚡" },
  ],
  sections: [
    { heading: "THE PROBLEM", text: "Spilcafeen offers a large collection of board games, but the number of choices can make it difficult for visitors to find a game that suits their group. When people are unfamiliar with a game, they often stick to games they already know because learning new rules can feel like an extra barrier. This can limit exploration and make the game-selection process more time-consuming and frustrating." },
    { heading: "THE MISSION", text: "Our mission was to create a simple and engaging digital experience that makes discovering new board games easier. By providing personalized recommendations, key game information, and easy access to game rules and tutorial videos, we wanted to help visitors feel confident trying something new while making the process of choosing and learning a game faster and more enjoyable." },
    { heading: "MY ROLE", text: "As the UX/UI Lead, I drove the design direction of the project, turning our research findings into a cohesive and user-centered experience. I led the development of the UX structure and visual interface, from user flows and wireframes to the final prototype, while ensuring consistency across the overall design." },
  ],
  process: [
    { title: "DISCOVER", image: spilcafeenDiscover, imageAlt: "Spilcafeen board-game café desk research", text: "We explored the experience of choosing board games at Spilcafeen through desk research, observations, and semi-structured interviews. Our research focused on understanding how visitors choose games, what makes the process difficult, and how the large game collection can feel overwhelming." },
    { title: "DEFINE", image: spilcafeenDefine, imageAlt: "Spilcafeen structured games dataset", text: "We used audience segmentation, personas, a Rich Picture, user story mapping, and OOUX to structure our findings and identify the key needs of visitors. This led us to focus on making it easier for guests to quickly discover games that match their group, interests, and experience level." },
    { title: "DEVELOP", image: spilcafeenDevelop, imageAlt: "Spilcafeen interface screens and component system", text: "We translated our research insights into user flows, task flows, sketches, wireframes, and a visual design system. We explored features such as personalized game recommendations, clear game information, and tutorial videos, while applying UX principles to make the experience simple and intuitive." },
    { title: "DELIVER", image: spilcafeenDeliver, imageAlt: "Final Spilcafeen logo", text: "We developed the concept into a high-fidelity Figma prototype and tested the experience with users through guerrilla testing and five-second tests. The feedback helped us refine the interface and interactions, resulting in a digital experience that makes discovering the right board game faster, easier, and more enjoyable." },
  ],
};

export const hiddenHyggeProject = {
  slug: "hidden-hygge-places",
  title: "HIDDEN HYGGE PLACES",
  type: "Webapp",
  heroImage: hyggeHero,
  focusIcons: [figmaIcon, codingIcon],
  tagline: "Hidden Hygge Places is a responsive experience website that helps young adults discover lesser-known hygge spots based on their mood and interests. Through personalized recommendations and a memorabilia concept, the experience turns finding hidden places into something personal, meaningful, and memorable.",
  overview: [
    { label: "CLIENT", value: "BUSINESS ACADEMY AARHUS" },
    { label: "TEAM", value: "1 PERSON" },
    { label: "DURATION", value: "4 WEEKS" },
    { label: "FOCUS", value: "UX/UI · HTML · CSS · JS", icon: "⌘" },
  ],
  sections: [
    { heading: "THE PROBLEM", text: "Young adults often associate hygge with comfort, relaxation, and meaningful time together, but discovering new places that offer this kind of experience can be difficult. The hidden gems are often not easy to find, creating an opportunity for a digital experience that helps users discover lesser-known hygge places that match their interests and mood." },
    { heading: "THE MISSION", text: "My mission was to create a digital guide to hidden hygge places, helping young adults discover unique spots they might not otherwise find. Through an interactive quiz, users are guided towards places that match their preferences, while the idea of memorabilia adds a personal element that allows them to take a small memory of the experience with them." },
    { heading: "MY ROLE", text: "As the sole designer and developer, I took the project from an initial idea to a fully realized digital experience. I shaped the concept around my research, translated the needs of my target audience into the user journey, and brought the experience to life through the design and development of the responsive website. I also iterated on the solution through testing, using feedback to refine the experience and make discovering hidden hygge places feel personal, intuitive, and memorable." },
  ],
  process: [
    { title: "DISCOVER", image: hyggeDiscover, imageAlt: "Hidden Hygge Places inspiration board", text: "I explored how young adults experience hygge and what makes a place feel cozy, comfortable and worth visiting. Through desk research, observations and interviews, I looked into Danish hygge culture, preferred activities, and how people experience hygge both at home and outside. This helped me understand what creates a meaningful and memorable hygge experience." },
    { title: "DEFINE", image: hyggeDefine, imageAlt: "Hidden Hygge Places Ana Patricia persona", text: "I defined young adults aged 20–25 as my primary target audience and used my research to identify their needs and motivations. Through an affinity diagram, empathy map, persona and Value Proposition Canvas, I discovered that users value calm, enjoyable experiences and meaningful moments they can remember. This led me to focus on the idea of memorabilia — creating something that allows users to take a small part of the experience with them." },
    { title: "DEVELOP", image: hyggeDevelop, imageAlt: "Hidden Hygge Places grayscale wireframes", text: "I explored how the idea of memorabilia could become part of the digital experience. Through mind mapping, user journeys, task flows and sketching, I developed an interactive quiz that helps users find a hidden hygge location matching their mood and interests. The experience was designed not only to help users discover a place, but to encourage them to create a personal memory connected to that experience." },
    { title: "DELIVER", image: hyggeDeliver, imageAlt: "Hidden Hygge Places final responsive interface", text: "I developed the solution through low-fi, mid-fi and hi-fi prototypes in Figma, refining the layout, content and interactions along the way. Usability testing helped me identify areas for improvement and validate the experience with users. The final responsive website combines personalised location discovery with the idea of creating memorable moments, bringing the concept to life through HTML, CSS and JavaScript." },
  ],
};

export const projectsBySlug = {
  [botanicalGardenProject.slug]: botanicalGardenProject,
  [blaSolProject.slug]: blaSolProject,
  [spilcafeenProject.slug]: spilcafeenProject,
  [hiddenHyggeProject.slug]: hiddenHyggeProject,
};
