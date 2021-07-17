import React, { useState } from 'react';
import FloatingButton from '../components/FloatingButton';
import Modal from '../components/Modal';
import Loading from '../components/Loading'


import CreateProject from '../forms/CreateProject';
import useAllProjects from '/imports/hooks/useAllProjects';
import ProjectCard from '../components/ProjectCard';

type Props = {
};

const Projects: React.FC<Props> = ({ }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isReady, projects] = useAllProjects();

  const viewProjects = (projects.count() === 0)
    ? (
      <div className="sm:col-span-2 flex justify-center">
        <img src="/img/empty.svg" className="w-1/3" />
      </div>
    ) : (
      projects.fetch().map((project) => (<ProjectCard project={project} />))
    )


  return (<>
    <div className="flex flex-col gap-4">
      <div className="w-full text-center font-semibold text-2xl">Mes Projets</div>
      <hr className="border-gray-500" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {isReady ? (
          viewProjects
        ) : (<Loading />)}

      </div>
      <FloatingButton onClick={() => setIsModalOpen(true)}>+</FloatingButton>
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