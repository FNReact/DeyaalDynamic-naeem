import React, {Fragment } from 'react'
import DetailPageBody from '../components/DetailPageBody/DetailPageBody'
import Footer from '../components/Footer/Footer'
import SubBanner from '../components/SubBanner/SubBanner'
import TopNaviation from '../components/TopNavigation/TopNaviation'

const DetailPage = () =>{
  window.scroll(0,0)
  return (
    <> 
    <TopNaviation/>
    <SubBanner/> 
    <DetailPageBody/>
    <Footer/>
   </> 
  )
}
export default DetailPage