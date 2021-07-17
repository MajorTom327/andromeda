import React from 'react';
import Navbar from './components/Navbar';
import Router from './Router';

export const App = () => (
  <div className="dark:bg-gray-700 dark:text-white min-h-screen">
    <Navbar />
    <div className="p-4">
      <Router />
    </div>
  </div>
);
