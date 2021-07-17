import React, { useState } from 'react';
import Button from '../components/Button';
import FloatingButton from '../components/FloatingButton';
import Modal from '../components/Modal';
import CreateProject from '../forms/CreateProject';

type Props = {
};

const Projects: React.FC<Props> = ({ }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);



  return (<>
    <div className="flex flex-col gap-4">
      <div className="w-full text-center font-semibold text-2xl">Mes Projets</div>
      <hr className="border-gray-500" />
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="sm:col-span-2 flex justify-center">
          <img src="/img/empty.svg" className="w-1/3" />
        </div>
      </div>
      <FloatingButton onClick={() => setIsModalOpen(true)}>+</FloatingButton>
    </div>
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <h1 className="text-center text-lg font-semibold">Création d'un projet</h1>
      <CreateProject />
    </Modal>

  </>
  );
}

Projects.defaultProps = {
};

export default Projects;