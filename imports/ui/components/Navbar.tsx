import { A } from 'hookrouter';
import React from 'react';

type Props = {
};

const Navbar: React.FC<Props> = ({ }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between p-4 bg-gray-800 gap-4">
      <A href="/" className="font-bold text-lg text-center">Andromeda</A>
      <div className="flex gap-4 justify-center">
        <A href="/projects" className="hover:underline">Mes projets</A>
        <A href="/calendar" className="hover:underline">Mon calendrier</A>
        <div className="text-gray-400">Se déconnecter</div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
};

export default Navbar;