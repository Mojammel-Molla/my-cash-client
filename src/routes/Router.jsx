import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LogIn from './../pages/log-in/LogIn';
import Home from '../pages/home-page/home/Home';
import Register from '../pages/register/Register';
import AllUsers from '../pages/all-users/AllUsers';
import Transactions from '../pages/transactions/Transactions';
import Commissions from './../pages/commissions/Commissions';
import CashInModal from '../pages/all-users/CashInModal';
import SendMoneyModal from '../pages/all-users/SendMoneyModal';
import CashOutModal from '../pages/all-users/CashOutModal';
import RequestMoney from '../pages/request-money/RequestMoney';
import AllRequests from '../pages/request-money/AllRequests';

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
      {
        path: '/transactions',
        element: <Transactions />,
      },
      {
        path: '/commissions',
        element: <Commissions />,
      },
      {
        path: '/send-money',
        element: <SendMoneyModal />,
      },
      {
        path: '/cash-in',
        element: <CashInModal />,
      },
      {
        path: '/cash-out',
        element: <CashOutModal />,
      },
      {
        path: '/request-money',
        element: <RequestMoney />,
      },
      {
        path: '/all-requests',
        element: <AllRequests />,
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
