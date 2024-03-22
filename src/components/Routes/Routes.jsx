import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Banner from "../Banner/Banner";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Banner />,  
      },
    ],
  },
]);