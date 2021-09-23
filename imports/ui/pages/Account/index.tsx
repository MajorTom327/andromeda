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

const NotLoggedRouter: React.FC<Props> = ({ }) => {
  const routeResult = useRoutes(routes)

  return routeResult || <LoginPage />;
}

NotLoggedRouter.defaultProps = {
};

export default NotLoggedRouter;