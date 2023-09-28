import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import ErrorPage from './Component/error/error.jsx';
import Home from './Component/Home/Home.jsx';
import First from './Component/First/First.jsx';
import Friends from './Component/Friends/Friends.jsx';
import FriendDetail from './Component/FriendDetail/FriendDetail.jsx';
import Posts from './Component/Posts/Posts.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    errorElement : <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'/friends',
        element:<Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')

      },
      {
      path:'about',
      element:<About></About>
    },
    {
      path:'contact',
      element: <Contact></Contact>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
