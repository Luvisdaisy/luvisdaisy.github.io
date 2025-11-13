import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <Header />
      <main className='flex-grow overflow-auto'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
