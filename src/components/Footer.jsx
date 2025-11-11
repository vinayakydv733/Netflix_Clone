import React from 'react'
import Youtube from '../assets/youtube_icon.png'
import Facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import instagram from '../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='px-8 py-1 max-w-225 mx-auto my-auto'>
        <div className='flex gap-5 mx-10 my-0'>
            <img width={30} style={{cursor:'pointer'}} src={Facebook} alt="logo" />
            <img width={30} style={{cursor:'pointer'}} src={Youtube} alt="logo" />
            <img width={30} style={{cursor:'pointer'}} src={twitter} alt="logo" />
            <img width={30} style={{cursor:'pointer'}} src={instagram} alt="logo" />
        </div>
        <ul className='grid grid-cols-4 gap-4 mt-8 list-style-none text-white' style={{cursor:'pointer'}}>
            <li>Audio Description</li>
            <li>Help Centre</li>
            <li>Media Centre</li>
            <li>Gift Cards</li>
            <li>Investor Relation</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
        <p className='text-gray-500 text-xl mt-2'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer