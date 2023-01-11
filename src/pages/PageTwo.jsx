import React, {Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTwoBody from '../components/PageTwoBody/PageTwoBody'
import SubBanner from '../components/SubBanner/SubBanner'
import TopNaviation from '../components/TopNavigation/TopNaviation'

const PageTwo = () =>{
  window.scroll(0,0)
  
  return (
    <> 
    <TopNaviation/>
    <SubBanner/> 
    <PageTwoBody/>
    <Footer/>
   </> 
  )
}
export default PageTwo