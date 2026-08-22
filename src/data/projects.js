import botanicalImage from "../assets/project-botanical.png";

export const botanicalGardenProject = {
  slug: "botanical-garden",
  title: "BOTANICAL GARDEN",
  type: "Webapp",
  heroImage: botanicalImage,
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
    { title: "DISCOVER", image: botanicalImage, imageAlt: "Botanical Garden research", text: "We explored how visitors experience the Botanical Garden through desk and field research. Visitor reviews, existing digital solutions, observations and informal feedback helped us understand visitor motivations and identify opportunities for a more engaging family experience." },
    { title: "DEFINE", image: botanicalImage, imageAlt: "Botanical Garden field research", text: "Our research led us to focus on Danish families with children. We identified an opportunity to transform the existing QR-based plant information into a playful and interactive exploration experience, rather than simply providing more information." },
    { title: "DEVELOP", image: botanicalImage, imageAlt: "Botanical Garden prototype", text: "We explored different concepts for turning plant discovery into a shared family activity. Through ideation, user flows, wireframes and prototyping, we developed the idea of making visitors explorers and gardeners who discover plants across the greenhouse’s four climates." },
    { title: "DELIVER", image: botanicalImage, imageAlt: "Botanical Garden final concept", text: "We refined the concept through testing and iteration, focusing on usability, engagement and clarity. The final prototype combines exploration, plant collection and educational content with a warm, playful and approachable tone of voice." },
  ],
};
