import ProjectDetailTemplate from "../Components/ProjectDetailTemplate";
import { botanicalGardenProject } from "../data/projects";

function ProjectDetail() {
  return <ProjectDetailTemplate project={botanicalGardenProject} />;
}

export default ProjectDetail;
