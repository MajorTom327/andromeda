import { A } from 'hookrouter';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import useUser from '/imports/hooks/useUser';

type Props = {
};

const Navbar: React.FC<Props> = ({ }) => {
  const user = useUser();
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between p-4 bg-gray-800 gap-4">
      <A href="/" className="font-bold text-lg text-center">Andromeda</A>
      {user && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center text-center sm:text-left">
          <A href="/projects" className="hover:underline">Mes projets</A>
          <A href="/calendar" className="hover:underline">Mon calendrier</A>
          <A href="/profil" className="hover:underline">Mon profil</A>
          <button className="text-gray-400 hover:underline" onClick={() => Meteor.logout()}>Se déconnecter</button>
        </div>
      )}
    </div>
  );
}

Navbar.defaultProps = {
};

export default Navbar;