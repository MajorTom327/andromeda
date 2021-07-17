import { A } from 'hookrouter';
import React from 'react';

type Props = {
};

const Navbar: React.FC<Props> = ({ }) => {
  return (
    <div className="w-full flex justify-between p-4 dark:bg-gray-800 gap-4">
      <A href="/" className="font-bold text-lg">Andromeda</A>
      <div className="flex gap-4">
        <A href="/projects">Mes projets</A>
        <div>Mon calendrier</div>
        <div className="text-gray-400">Se déconnecter</div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
};

export default Navbar;