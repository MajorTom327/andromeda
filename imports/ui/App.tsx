import { useNetwork } from 'ahooks';
import React, { Suspense } from 'react';
import useUser from '../hooks/useUser';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import NotLoggedRouter from './pages/Account';
import Router from './Router';

export const App = () => {
  const { online } = useNetwork();

  const user = useUser();


  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Suspense fallback={<Loading />}>
          {(user) ? <Router /> : <NotLoggedRouter />}
        </Suspense>
      </div>
    </div>
  );
};
