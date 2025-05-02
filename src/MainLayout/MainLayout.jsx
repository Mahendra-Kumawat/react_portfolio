import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router'
import Wrapper from '@/components/custom/Container/Wrapper'
import { Footer } from './Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        
          <Outlet />
        
      </Wrapper>
        <Footer />
    </>
  )
}

export default MainLayout