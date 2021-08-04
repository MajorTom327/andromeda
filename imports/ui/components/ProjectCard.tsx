import React from 'react';
import { IProject } from '/imports/api/types/Project';

type Props = {
  project: IProject
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="card bordered shadow-2xl">
      <div className="card-body">
        <div className="card-title text-center">{project.name}</div>
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
};

export default ProjectCard;