import { useRoutes } from 'hookrouter';
import React, { lazy } from 'react';
import NotFound from './pages/NotFound';

type Props = {
};

const HomePage = lazy(() => import('./pages/Home'));
const VerifyPage = lazy(() => import('./pages/Verify'));
const Daily = lazy(() => import('./pages/Daily'));
const ProjectsPage = lazy(() => import('./pages/project/Projects'));
const ProjectPage = lazy(() => import('./pages/project/Project'));
const CalendarPage = lazy(() => import('./pages/Calendar'));
const ProfilPage = lazy(() => import('./pages/Profil'));

const routes = {
  '/': () => <HomePage />,
  '/verify/:token': ({ token }: { token: string }) => <VerifyPage token={token} />,
  '/daily': () => <Daily />,
  '/projects': () => <ProjectsPage />,
  '/projects/:id': ({ id }: { id: string }) => <ProjectPage projectId={id} />,
  '/calendar': () => <CalendarPage />,
  '/profil': () => <ProfilPage />
}

const Router: React.FC<Props> = ({ }) => {
  const routeResult = useRoutes(routes);

  return (routeResult || (<NotFound />));
}

Router.defaultProps = {
};

export default Router;