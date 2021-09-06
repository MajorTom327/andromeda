import { A } from 'hookrouter';
import React from 'react';
import useUser from '/imports/hooks/useUser';

type Props = {
};

const Navbar: React.FC<Props> = ({ }) => {
  const user = useUser();
  return (
    <div className="navbar bg-neutral text-neutral-content w-full flex flex-col sm:flex-row justify-center sm:justify-between">
      <A href="/" className="font-bold text-lg text-center">Andromeda</A>
      {user && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center text-center sm:text-left">
          <A href="/" className="btn btn-ghost btn-sm rounded-btn">Mes tâches</A>
          <A href="/projects" className="btn btn-ghost btn-sm rounded-btn">Mes projets</A>
          <A href="/calendar" className="btn btn-ghost btn-sm rounded-btn">Mon calendrier</A>
          <A href="/profil" className="btn btn-ghost btn-sm rounded-btn">Mon profil</A>
        </div>
      )}
    </div>
  );
}

Navbar.defaultProps = {
};

export default Navbar;
