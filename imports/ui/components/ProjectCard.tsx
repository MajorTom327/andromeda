import React from 'react';
import { IProject } from '/imports/api/types/Project';

type Props = {
  project: IProject
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="p-2 rounded-lg shadow-lg transition-shadow bg-gray-600 hover:shadow-xl">
      <div className="text-center text-xl font-semibold">{project.name}</div>
    </div>
  );
}

ProjectCard.defaultProps = {
};

export default ProjectCard;