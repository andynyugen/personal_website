import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

/**
 * Navbar Component
 * 
 * This component renders a responsive navigation bar with both desktop and mobile layouts.
 * It has a dark mode toggle button and a mobile sidebar menu.
 * 
 * Props:
 * - isDarkMode (boolean): Used to toggle dark/light mode assets and colors.
 * - setIsDarkMode (function) : Function to toggle dark mode.
 */

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)     // Tracks whether the user has scrolled past 50px
    const sideMenuRef = useRef();                       // Reference for the mobile side menu element

    // Opens the mobile sidebar menu 
    const openMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'  // slides menu left (into view)
    }

    // Closes the mobile sidebar menu
    const closeMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(16rem)'   // slides menu right (out of view)
    }

    // Detects page scroll to adjust navbar background and shadow
    useEffect(() => {
        // Add scroll listener to change navbar style based on scroll position
        window.addEventListener('scroll', () => {
            if (scrollY > 50){
                setIsScroll(true)       // Apply blur + background on scroll
            } else {
                setIsScroll(false)      // Revert when back to top
            }
        })
    }, [])

    return (
        <>
            {/* Background shape behind header (light mode only) */}
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image 
                    src={assets.header_bg_color} 
                    alt="Header background color"
                    className="w-full" 
                /> 
            </div>

            {/* --- Main Navigation Bar --- */}
            <nav 
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
                ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}
                // fixed position, padding, flex layout
                // shadow/blur if user scrolls down
            >

                {/* --- Light/Dark Mode logo toggler --- */}
                <a href="#top">
                    <Image 
                        // Display dark-mode logo if it's dark-mode, and vice versa
                        src={isDarkMode ?assets.logo_dark : assets.logo} 
                        alt="" 
                        className="w-28 cursor-pointer mr-14"
                    />
                </a>

                {/* --- Desktop Navigation Links --- */}
                <ul 
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                    ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}
                    // If at top: rounded background with shadow and include border in dark mode
                    // If scrolling: remove background styling (blend with header)
                >
                    <li><a className="font-Ovo" href="#top">Home</a></li>
                    <li><a className="font-Ovo" href="#about">About me</a></li>
                    <li><a className="font-Ovo" href="#experience">Experience</a></li>
                    <li><a className="font-Ovo" href="#project">Projects</a></li>
                    <li><a className="font-Ovo" href="#contact">Contact me</a></li>
                </ul>

                {/* --- Right side (Dark Mode Toggle, Contact Button, Menu Icon) --- */}
                <div className="flex items-center gap-4">

                    {/* --- Dark Mode Toggle Button --- */}
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image 
                            // Display sun logo if it's dark-mode, and moon logo if it's light mode
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                            alt="Toggle theme" 
                            className="w-6" 
                        />
                    </button>

                    {/* Contact Button (visible on larger screens) */}
                    <a 
                        href="#contact" 
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 
                                   rounded-full ml-4 font-Ovo dark:border-white/50"
                        // gray border (white in dark mode), rounded full, padding, Ovo font
                    >
                        Contact
                        <Image 
                            // Display dark-mode arrow if it's dark-mode, and vice versa
                            src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} 
                            alt="" 
                            className="w-3"
                        />
                    </a>

                    {/* --- Mobile Menu Icon (hamburger menu button) --- */}
                    <button 
                        className="block md:hidden ml-3" 
                        onClick={openMenu} 
                    >
                        <Image
                            // Display white icon if it's in dark mode, vice versa
                            src={isDarkMode ? assets.menu_white : assets.menu_black} 
                            alt="" 
                            className="w-6" 
                        />
                    </button>
                </div>

                {/* --- Mobile Sidebar Menu --- */}
                <ul 
                    ref={sideMenuRef} 
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 
                               h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
                    // hidden on desktop, vertical flex layout, off-screen by default (-right-64)
                    // smooth 0.5s slide animation, pink/light or dark gray background
                >
                    {/* --- Close Button --- */}
                    <div 
                        className="absolute right-6 top-6" 
                        onClick={closeMenu}
                    >
                        <Image 
                            // Display white close icon if it's dark-mode, and vice versa
                            src={isDarkMode ? assets.close_white : assets.close_black}
                            alt="Close menu icon" 
                            className="w-5 cursor pointer"
                        />
                    </div>

                    {/* --- Mobile Links --- */}
                    <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar