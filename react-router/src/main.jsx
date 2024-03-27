import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/home/HOme.jsx'
import Layout from './layout.jsx'
import About from './component/about/About.jsx'
import Contact from './component/Contact-us/Contact.jsx'
import User from './component/User/User.jsx'
import Github from './component/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"About",
//         element:<About/>
//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route path='github' element={<Github/>} />
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
