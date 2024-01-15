import React from 'react'
import SliceCard from '../components/sliceItems/SliceCard'
import Navbar from '../components/Header/Navbar'
import Banner from '../components/Header/Banner'


const HomePage = () => {
  return (
    <div className=''>
        <Navbar />
         
        <Banner />
        <SliceCard />

    </div>
  )
}

export default HomePage