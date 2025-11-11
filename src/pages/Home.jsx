import React from 'react'
import Navbar from '../components/Navbar'
import banner from '../assets/hero_banner.jpg'
import title from '../assets/hero_title.png'
import play from '../assets/play_icon.png'
import info from '../assets/info_icon.png'
import TitalCards from '../components/TitalCards'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home ">
        <img className='object-cover w-screen h-screen' src={banner} alt="" />
        <div className='absolute bottom-60 left-10 text-white'>
          <img width={420} src={title} alt="" />
          <p className='max-w-150 text-1.5xl'>discovering his ties to a cigarette ancient order young man living in modern islands ambassador of first to save the city from an Immortal anime</p>
          <div className="flex gap-2.5 mb-10">
            <button className='text-0.5xl px-3 py-2 flex items-center gap-2 text-black rounded hover:scale-105 transition-all duration-300 ease-in-out bg-[#ffffffbf]'>
              <img width={25} src={play} alt="play" />
              Play
            </button>
            <button className='text-.0.5xl px-3 py-2 flex items-center gap-2 bg-[#6d6d6eb3] text-white rounded hover:scale-105 transition-all duration-300 ease-in-out'>
              <img width={25} src={info} alt="play" />
              Info Button
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-20 px-10 pb-8">
          <TitalCards />
        </div>
      </div>
      <div className="px-10">
        <TitalCards tital={"Blockbuster Movies"}/>
        <TitalCards tital={"Only on Netflix"}/>
        <TitalCards tital={"Upcoming"}/>
        <TitalCards tital={"Top Pics for You"}/>
      </div>
      <Footer/>
    </div >
  )
}

export default Home