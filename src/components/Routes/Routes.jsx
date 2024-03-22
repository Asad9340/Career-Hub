import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Homepage from '../Homepage/Homepage';
import Error from '../Error/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement:<Error/>,
    children: [
      {
        path: '',
        element: <Homepage />,
        loader:()=> fetch('../categories.json')
      },
    ],
  },
]);
