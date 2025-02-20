import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import GalleryComponent from '../components/GalleryComponent'
import DonationGalleryComponent from '../components/DonationGalleryComponent'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <GalleryComponent />
      <DonationGalleryComponent />
    </div>
  ) 
}
   
export default Home