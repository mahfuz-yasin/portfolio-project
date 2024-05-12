import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './components/Error/Error';
import Home from './components/Home/Home.js';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <Error /> ,
    children : [
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


