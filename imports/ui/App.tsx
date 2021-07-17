import React from 'react';
import Navbar from './components/Navbar';
import Router from './Router';

export const App = () => (
  <div className="bg-gray-700 text-white min-h-screen">
    <Navbar />
    <div className="p-4">
      <Router />
    </div>
  </div>
);
