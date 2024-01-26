import React from 'react'
import Herosection from '../Components/Herosection'
import About from '../Components/About'
import Qualities from '../Components/Qualities'
import Menu from '../Components/menu'
import WhoWeAre from "../Components/WhoWeAre"
import Team from '../Components/Team'
import Footer from '../Components/Footer'
import Reservation from '../Components/Reservation'

const Home = () => {
  return (
    <>
        <Herosection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoWeAre/>
        <Team/>
        <Reservation/>
        <Footer/>
    </>
  )
}

export default Home