import { Navigate, useParams } from "react-router-dom";
import ProjectDetailTemplate from "../Components/ProjectDetailTemplate.jsx";
import { projectsBySlug } from "../data/projects.js";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsBySlug[slug];

  if (!project) return <Navigate to="/projects" replace />;

  return <ProjectDetailTemplate project={project} />;
}

export default ProjectDetail;
