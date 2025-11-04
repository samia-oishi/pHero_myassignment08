import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { Root } from '../pages/Root/Root';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { Home } from '../pages/Home/Home';
import { MyApps } from '../pages/MyApps/MyApps';
import AppDetails from '../pages/AppDetails/AppDetails'
import InstallationPage from '../pages/InstallationPage/InstallationPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            path:"/",
            loader:()=>fetch('/myApp.json'),
            element: <Home/>
        },
        {
            path: "myapps",
            loader: async() => {
              const res = await fetch('/myAppAll.json');
              return res.json();
            },
            element:<MyApps/>,
        },
        {
          path: "AppDetails/:id",
          loader: async ({ params }) => {
            const res = await fetch('/myAppAll.json');
            const allApps = await res.json();
            return { allApps, id: params.id };
          },
          element: <AppDetails/>
        },
        {
          path: "installation",
          loader: async () => {
            const res = await fetch('/myAppAll.json');
            return res.json();
          },
          element: <InstallationPage/>
        }
    ],
  },
]);