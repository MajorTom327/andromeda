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
        <div className="flex gap-4 justify-center">
          <A href="/projects" className="hover:underline">Mes projets</A>
          <A href="/calendar" className="hover:underline">Mon calendrier</A>
          <button className="text-gray-400 hover:underline" onClick={() => Meteor.logout()}>Se déconnecter</button>
        </div>
      )}
    </div>
  );
}

Navbar.defaultProps = {
};

export default Navbar;