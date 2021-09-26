import { A } from 'hookrouter';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import Button from './Button';
import useUser from '/imports/hooks/useUser';

type Props = {
  isOpen: boolean;
  onClose: () => any;
};

const Drawer: React.FC<Props> = ({ children, isOpen, onClose }) => {
  const user = useUser();


  return (
    <div className="drawer drawer-mobile" style={{ height: `calc(100vh - 64px)` }}>
      <input type="checkbox" id="drawer-toggle" className="drawer-toggle" checked={isOpen} readOnly />
      <div className="drawer-content py-4 flex-grow block overflow-x-hidden text-base-content">
        {children}
      </div>
      {user && (
        <div className="drawer-side shadow-xl border-r border-base-200" style={{ minWidth: '25vw' }}>
          <label className="drawer-overlay" onClick={onClose}></label>
          <div className="flex flex-col justify-between">
            <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content gap-2">
              <li><A href="/">Mes tâches</A></li>
              <li><A href="/daily">Daily</A></li>
              <li><A href="/projects" >Mes projets</A></li>
              <li><A href="/calendar" >Mon calendrier</A></li>
              <li><A href="/profil" >Mon profil</A></li>
            </ul>

            <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content gap-2">
              <li>
                <div className="divider"></div>
              </li>
              <li>
                <Button onClick={() => Meteor.logout()}>Me déconnecter</Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

Drawer.defaultProps = {
};

export default Drawer;