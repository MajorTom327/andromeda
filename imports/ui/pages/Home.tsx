import React, { useState } from 'react';
import { DateTime } from 'luxon';
import Modal from '../components/Modal';
import CreateTask from '../forms/CreateTask';
import FloatingButton from '../components/FloatingButton';
import ListTask from '../components/ListTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type Props = {
};

const Home: React.FC<Props> = ({ }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="alert">
        <div className="w-full flex justify-between text-2xl font-semibold">
          <div>Dashboard</div>
          <div>{DateTime.local().toLocaleString(DateTime.DATE_SHORT)}</div>
        </div>
      </div>
      <div>
        <ListTask />
      </div>
      <FloatingButton onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon icon={faPlus} />
      </FloatingButton>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h1 className="text-center text-lg font-semibold">Création d'un projet</h1>
        <CreateTask onSubmit={() => { setIsModalOpen(false) }} />
      </Modal>
    </div>
  );
}

Home.defaultProps = {
};

export default Home;