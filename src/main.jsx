import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Error from './error/Error';
import Home from './pages/Home';
import CardDetails from './pages/CardDetails';
import AuthProvider from './pages/authprovider/AuthProvider';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => {return fetch('/fake.json')},
      },
      {
        path:"/detailscard/:id",
        element:<CardDetails></CardDetails>,
        loader:() => {return fetch('/fake.json')},
      },
      {
        path:"/login",
        element:<LogIn></LogIn>,

      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
