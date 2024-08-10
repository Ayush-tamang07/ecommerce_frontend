import React from 'react'
import Header from '../components/Header.jsx'
import Brand from '../components/Brand.jsx'
import Footer from "../components/Footer.jsx"
import DiscountComponent from '../components/DiscountComponent.jsx'
import LatestProduct from '../components/LatestProduct.jsx'

function Home() {
  return (
    <>
    <Header/>
    <Brand/>
    <LatestProduct/>
    <DiscountComponent/>
    <Footer/>
    </>
  )
}

export default Home