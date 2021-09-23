import React from 'react';
import { IProject } from '/imports/api/types/Project';

type Props = {
  project: IProject
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="card bordered shadow trans hover:underline transition-transform transform hover:-translate-y-1">
      <div className="card-body bg-neutral">
        <div className="text-lg font-semibold uppercase text-center">{project.name}</div>
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
};

export default ProjectCard;