import { useNetwork } from 'ahooks';
import React, { Suspense, useState } from 'react';
import useUser from '../hooks/useUser';
import Drawer from './components/Drawer';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import NotLoggedRouter from './pages/Account';
import Router from './Router';

export const App = () => {
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div>
      <Navbar onToggleDrawer={() => setIsOpen(!isOpen)} />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4">
          <Suspense fallback={<Loading />}>
            {(user) ? <Router /> : <NotLoggedRouter />}
          </Suspense>
        </div>
      </Drawer>
    </div>
  );
};
