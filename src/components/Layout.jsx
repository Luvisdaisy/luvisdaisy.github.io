import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className='flex h-screen flex-col overflow-hidden'>
      <Header />
      <main className='flex-1 overflow-auto'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
