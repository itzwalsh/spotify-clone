import React from "react";
import project from '../data/project';
import ProjectItem from '../components/ProjectItem';

const Work = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.map((project) => (
          <ProjectItem
            key={project.id}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
