import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

 const layout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default layout;