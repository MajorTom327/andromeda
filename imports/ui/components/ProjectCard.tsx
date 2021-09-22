import React from 'react';
import { IProject } from '/imports/api/types/Project';

type Props = {
  project: IProject
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="card bordered shadow">
      <div className="card-body bg-neutral">
        <div className="text-lg text-purple-400 uppercase text-center">{project.name}</div>
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
};

export default ProjectCard;