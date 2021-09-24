import { useRoutes } from 'hookrouter';
import React from 'react';

type Props = {
};

const LoginPage = React.lazy(() => import('./Login'));
const SigninPage = React.lazy(() => import('./Signin'));
const AskPasswordPage = React.lazy(() => import('./AskPassword'));
const ResetPasswordPage = React.lazy(() => import('./ResetPassword'));

const routes = {
  '/signin': () => <SigninPage />,
  '/ask-password': () => <AskPasswordPage />,
  '/reset-password/:token': ({ token }: { token: string }) => <ResetPasswordPage token={token} />
}

const NotLoggedRouter: React.FC<Props> = ({ }) => {
  const routeResult = useRoutes(routes)

  return routeResult || <LoginPage />;
}

NotLoggedRouter.defaultProps = {
};

export default NotLoggedRouter;