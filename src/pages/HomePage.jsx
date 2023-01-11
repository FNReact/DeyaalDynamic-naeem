import React, {Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import HomeFour from '../components/HomeFour/HomeFour'
import HomeOne from '../components/HomeOne/HomeOne'
import HomeThree from '../components/HomeThree/HomeThree'
import HomeTwo from '../components/HomeTwo/HomeTwo'
import SubBanner from '../components/SubBanner/SubBanner'
import TopNaviation from '../components/TopNavigation/TopNaviation'
import axios from "axios";  

const HomePage = () =>{

  const [data,setData] = useState({}) 
  const url="https://lemmesaybd.app/api/microsite/details/dd0a9480-7f8c-4693-8053-04eac7631363"  

    useEffect(()=>{
      axios.get(url)
      .then(function(response){
      setData(response.data)
      })
      .catch(function(error){  
        console.log(error)
      })
    },[])

    useEffect(()=>{
      window.scroll(0,0)
    },)
  

  return (
    <> 
    <TopNaviation user={data}/>
    <SubBanner/> 
    <HomeOne/>
    <HomeTwo/>
    <HomeThree/>
    <HomeFour/>
    <Footer user={data}/>
   </> 
  )
}
export default HomePage