import { useRoutes } from 'hookrouter';
import React from 'react';
import useUser from '/imports/hooks/useUser';

type Props = {
};

const LoginPage = React.lazy(() => import('./Login'));
const SigninPage = React.lazy(() => import('./Signin'));

const routes = {
  '/signin': () => <SigninPage />
}

const PreventLogged: React.FC<Props> = ({ children }) => {
  const user = useUser();
  const routeResult = useRoutes(routes)

  if (user) {
    return children;
  }

  return routeResult || <LoginPage />;
}

PreventLogged.defaultProps = {
};

export default PreventLogged;