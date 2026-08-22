import ProjectDetailTemplate from "../Components/ProjectDetailTemplate.jsx";
import { botanicalGardenProject } from "../data/projects.js";

function ProjectDetail() {
  return <ProjectDetailTemplate project={botanicalGardenProject} />;
}

export default ProjectDetail;
