import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './components/Error/Error';
import Home from './components/Home/Home.js';
import Services from './components/Services/Services.js'
import Blog from './components/Blog/Blog.js';
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
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
        path : '/services',
        element : <Services />
      },
      {
        path : '/blog',
        element : <Blog />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/contact',
        element : <Contact />
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


