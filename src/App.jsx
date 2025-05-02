import React from 'react'
import { HeroSection } from './pages/HeroSection/Hero'
import { BrowserRouter } from 'react-router'
import RouteConfig from './Router/RouteConfig'

const App = () => {
  return (
    <BrowserRouter>
     <RouteConfig />
    </BrowserRouter>
  )
}

export default App