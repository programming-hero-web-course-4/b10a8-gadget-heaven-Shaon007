import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Homepage from './components/HomePage/Homepage';
import Empty from './components/Empty';
import Details from './components/Gadget/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/product/:product_id",
        element: <Details />
      },
      {
        path: "empty",
        element: <Empty />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
