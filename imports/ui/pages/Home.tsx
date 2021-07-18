import React, { useState } from 'react';
import { DateTime } from 'luxon';
import Modal from '../components/Modal';
import CreateTask from '../forms/CreateTask';
import FloatingButton from '../components/FloatingButton';

type Props = {
};

const Home: React.FC<Props> = ({ }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-center">
        <div className="container flex justify-between text-2xl font-semibold p-4 bg-gray-600 rounded">
          <div>Dashboard</div>
          <div>{DateTime.local().toLocaleString(DateTime.DATE_SHORT)}</div>
        </div>
      </div>
      <FloatingButton onClick={() => setIsModalOpen(true)}>+</FloatingButton>
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