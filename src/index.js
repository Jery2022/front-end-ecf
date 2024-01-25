import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Header from './components/Header';
//import NotFoundPage from "./components/NotFoundPage";

 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  /*{
    path: "/",
    element: <NotFoundPage />,
  },*/
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);