import { useRoutes } from 'hookrouter';
import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading';
import NotFound from './pages/NotFound';

type Props = {
};

const HomePage = lazy(() => import('./pages/Home'))
const ProjectsPage = lazy(() => import('./pages/Projects'));

const routes = {
  '/': () => <HomePage />,
  '/projects': () => <ProjectsPage />
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