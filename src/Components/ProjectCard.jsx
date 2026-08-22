import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <img src={project.thumbnail} alt="" />
      <h2>{project.title}</h2>
    </Link>
  );
}
