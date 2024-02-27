import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LogIn from './../pages/log-in/LogIn';
import Home from '../pages/home-page/home/Home';
import Register from '../pages/register/Register';
import AllUsers from '../pages/all-users/AllUsers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all-users',
        element: <AllUsers />,
      },
    ],
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
