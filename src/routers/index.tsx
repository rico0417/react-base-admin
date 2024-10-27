import { useRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

const RouterConfig = () => {
  const router = useRoutes(routes);
  return router;
};

export default RouterConfig;