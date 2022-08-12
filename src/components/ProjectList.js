import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const renderProject = projects.map((project) => (
    <ProjectItem
      technologies={project.technologies}
      id={project.id}
      key={project.id}
      name={project.name}
      about={project.about}
    />
  ));

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderProject}</div>
    </div>
  );
}

export default ProjectList;
