import React from 'react';
import Card from './Card';
import { IProject } from '/imports/api/types/Project';

type Props = {
  project: IProject
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Card className="hover:underline transition-transform transform hover:-translate-y-1">
      <div className="text-lg font-semibold uppercase text-center">{project.name}</div>
    </Card>
  );
}

ProjectCard.defaultProps = {
};

export default ProjectCard;