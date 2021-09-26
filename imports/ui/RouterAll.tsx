import { useRoutes } from 'hookrouter';
import React from 'react';
import Verify from './pages/Verify';

type Props = {
};

const router = {
  '/verify/:token': ({ token }: { token: string }) => <Verify token={token} />,
}

const RouterAll: React.FC<Props> = ({ children }) => {
  const routeMatch = useRoutes(router)
  return <>{routeMatch || children}</>
}

RouterAll.defaultProps = {
};

export default RouterAll;