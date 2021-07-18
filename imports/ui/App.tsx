import { useNetwork } from 'ahooks';
import React from 'react';
import Navbar from './components/Navbar';
import Offline from './pages/Offline';
import Router from './Router';

export const App = () => {
  const { online } = useNetwork();


  return (
    <div className="bg-gray-700 text-white min-h-screen">
      <Navbar />
      <div className="p-4">

        {online ? (<Router />) : (<Offline />)}
      </div>
    </div>
  );
};
