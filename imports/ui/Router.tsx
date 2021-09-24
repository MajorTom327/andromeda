import { useRoutes } from 'hookrouter';
import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading';
import NotFound from './pages/NotFound';

type Props = {
};

const HomePage = lazy(() => import('./pages/Home'))
const ProjectsPage = lazy(() => import('./pages/project/Projects'));
const ProjectPage = lazy(() => import('./pages/project/Project'));
const CalendarPage = lazy(() => import('./pages/Calendar'));
const ProfilPage = lazy(() => import('./pages/Profil'));

const routes = {
  '/': () => <HomePage />,
  '/projects': () => <ProjectsPage />,
  '/projects/:id': ({id}: {id: string}) => <ProjectPage id={id} />,
  '/calendar': () => <CalendarPage />,
  '/profil': () => <ProfilPage />
}

const Router: React.FC<Props> = ({ }) => {
  const routeResult = useRoutes(routes);
  return (<Suspense fallback={<Loading />}>
    {routeResult || (<NotFound />)}
  </Suspense>);
}

Router.defaultProps = {
};

export default Router;