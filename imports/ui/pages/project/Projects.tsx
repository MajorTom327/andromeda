import { A } from 'hookrouter';
import React from 'react';
import withModal from '../../../hoc/withModal';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import PreventEmpty from '../../components/PreventEmpty';
import ProjectCard from '../../components/ProjectCard';
import CreateProject from '../../forms/CreateProject';
import useAllProjects from '/imports/hooks/useAllProjects';

type Props = {
};

const Projects: React.FC<Props> = ({ }) => {
  const [isReady, projects] = useAllProjects();

  return (<>
    <Container>
      <Header label="Mes Projets"/>
      {isReady ? (
        <PreventEmpty count={projects.count()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.fetch().map((project) => (
              <A className="link_" href={`/projects/${project._id}`} key={project._id}>
                <ProjectCard project={project} />
              </A>
            ))}
          </div>
        </PreventEmpty>
      ) : (<Loading />)}
    </Container>
  </>
  );
}

Projects.defaultProps = {
};

export default withModal(CreateProject)(Projects);