import React from 'react'
import Navbar  from '../components/Navbar'
import Herobanner from '../components/Herobanner'
import PopularProducts from '../components/PopularProducts'
import Deal from '../components/Deal'
import Category from '../components/Category'
import Offer from '../components/Offer'
import PopularCategory from '../components/PopularCategory'
import NewsLatter from '../components/newsLatter'
import CategoryWork from '../components/CategoryWork'
import DownloadApp from '../components/DownloadApp'
import Popular from '../components/Popular'
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <>
        <Navbar/>
        <Herobanner/>
        <PopularProducts/>
        <Deal/>
        <Category/>
        <Offer/>
        <PopularCategory/>
        <NewsLatter/>
        <CategoryWork/>
        <DownloadApp/>
        <Popular/>
        <Footer/>
    </>
  )
}

export default Homepage