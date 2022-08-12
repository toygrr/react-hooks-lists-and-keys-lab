import React from "react";

function ProjectItem({ name, about, technologies, id }) {
  const renderTech = technologies.map((tech) => (
    <span key={id + tech}>{tech}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{renderTech}</div>
    </div>
  );
}

export default ProjectItem;
