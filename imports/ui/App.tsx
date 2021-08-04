import { useNetwork } from 'ahooks';
import React from 'react';
import useUser from '../hooks/useUser';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Offline from './pages/Offline';
import Router from './Router';

export const App = () => {
  const { online } = useNetwork();

  const user = useUser();


  return (
    <div>
      <Navbar />
      <div className="p-4">
        {!user ? <Login /> : (online ? (<Router />) : (<Offline />))}

      </div>
    </div>
  );
};
