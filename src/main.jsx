import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Components/layout.jsx'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home.jsx'
import './index.css'
import KitchenRemodeling from './Components/KitchenRemodeling.jsx'
import BathroomRemodeling from './Components/BathroomRemodeling.jsx'
import Carpet from './Components/Carpet.jsx'
import CarpetTile from './Components/CarpetTile.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Reviews from './Components/Reviews.jsx'
import ShopAtHome from './Components/ShopAtHome.jsx'
import Financing from './Components/Financing.jsx'
import Inspiration from './Components/Inspiration.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="carpet" element={<Carpet />} />
      <Route path="carpetTile" element={<CarpetTile />} />
      <Route path="kitchenRemodeling" element={<KitchenRemodeling />} />
      <Route path="bathroomRemodeling" element={<BathroomRemodeling />} />
      <Route path="Reviews" element={<Reviews />} />
      <Route path="ShopAtHome" element={<ShopAtHome />} />
      <Route path="Financing" element={<Financing />} />
      <Route path="Inspiration" element={<Inspiration />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
