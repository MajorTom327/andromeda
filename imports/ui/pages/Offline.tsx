import React from 'react';

type Props = {
};

const Offline: React.FC<Props> = ({ }) => {
  return (
    <div className="fixed right-4 left-4 p-4 bg-yellow-500 text-center rounded ">
      <div className="text-xl font-bold">Hors-ligne</div>
      <p>
        Vous travaillez actuellement hors-ligne. Il n'est pas possible d'acceder aux données en mode hors-ligne.
      </p>

    </div>
  );
}

Offline.defaultProps = {
};

export default Offline;