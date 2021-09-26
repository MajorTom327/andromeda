import React from 'react';
import EmailsCard from './component/EmailsCard';
import SecurityCard from './component/SecurityCard';
import UpdatePasswordCard from './component/UpdatePasswordCard';

type Props = {
};

const Profil: React.FC<Props> = ({ }) => {
  return (<div className="flex justify-center">
    <div className="container">
      <h1 className="text-4xl text-center font-semibold">Mon Profil</h1>

      <div className="flex flex-col gap-8 py-4">
        <EmailsCard />

        <UpdatePasswordCard />

        <SecurityCard />

      </div>
    </div>
  </div>);
}

Profil.defaultProps = {
};

export default Profil;
