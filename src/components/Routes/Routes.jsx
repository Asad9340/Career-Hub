import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Homepage from '../Homepage/Homepage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Homepage />,
        loader:()=> fetch('../categories.json')
      },
    ],
  },
]);
