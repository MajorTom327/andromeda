import React, { useState } from 'react';
import FloatingButton from '../components/FloatingButton';
import Modal from '../components/Modal';
import Loading from '../components/Loading'


import CreateProject from '../forms/CreateProject';
import useAllProjects from '/imports/hooks/useAllProjects';
import ProjectCard from '../components/ProjectCard';
import PreventEmpty from '../components/PreventEmpty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type Props = {
};

const Projects: React.FC<Props> = ({ }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isReady, projects] = useAllProjects();

  return (<>
    <div className="flex flex-col gap-4">
      <div className="w-full text-center font-semibold text-2xl">Mes Projets</div>
      <hr className="border-gray-500" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {isReady ? (
          <PreventEmpty count={projects.count()}>
            {projects.fetch().map((project) => (<ProjectCard key={project._id} project={project} />))}
          </PreventEmpty>
        ) : (<Loading />)}

      </div>
      <FloatingButton onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon icon={faPlus} />
      </FloatingButton>
    </div>
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <h1 className="text-center text-lg font-semibold">Création d'un projet</h1>
      <CreateProject onSubmit={() => { setIsModalOpen(false) }} />
    </Modal>

  </>
  );
}

Projects.defaultProps = {
};

export default Projects;