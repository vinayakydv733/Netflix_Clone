import React from 'react'
import logo from '../assets/logo.png'
import search from '../assets/search_icon.svg'
import bell from '../assets/bell_icon.svg'
import profile from '../assets/profile_img.png'
import cart from '../assets/caret_icon.svg'
import './navbar.css'
import {logout } from '../firebase'

const Navbar = () => {
    return (
    <nav className='navbar w-full h-20 flex justify-between items-center fixed top-0 left-0 px-8 text-#e5e5e5'>
            <div className="flex justify-between items-center">
                <img width={150} src={logo} alt="logo" />
                <ul className='text-white gap-5 flex ml-15'>
                    <a href="">Home</a>
                    <a href="">TV Shows</a>
                    <a href="">Movies</a>
                    <a href="">News And Popular</a>
                    <a href="">My List</a>
                    <a href="">Browsen by Language</a>
                </ul>
            </div>
            <div className='flex justify-between items-center gap-2 text-white'>
                <img src={search} alt="" />
                <p>Children</p>
                <img cla src={bell} alt="" />
                <img cla src={profile} alt="" />
                <div className='position-absolute top-100 right-0 px-1 py-1 border-2 z-1'>
                    <p className='cursor-pointer' onClick={()=>{logout()}}>Sign Out</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar