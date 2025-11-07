import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

/**
 * Footer.jsx
 * ----------------
 * Displays the website footer with logo, contact email, and social links.
 * Adapts to light and dark mode based on the `isDarkMode` prop.
 * 
 * Props:
 * - isDarkMode (boolean): Used to toggle dark/light mode assets and colors.
 */

const Footer = ({ isDarkMode }) => {
    return (

        <div className="mt-20">

            {/* --- Logo and Contact Email --- */}
            <div className="text-center">
                {/* Logo changes based on dark mode */}
                <Image 
                    src={isDarkMode ? assets.logo_dark : assets.logo} 
                    alt="Logo" 
                    className="w-36 mx-auto mb-2"
                />

                {/* --- Email with mail icon --- */}
                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image 
                        src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
                        alt="Mail Icon" 
                        className="w-6"
                    />
                    andynguyena49@gmail.com
                </div>
            </div>

            {/* --- Footer bottom section with copyright and social links --- */}
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            
                {/* --- Copyright text --- */}
                <p>@ 2025 Andy Nguyen. All rights reserved.</p>

                {/* --- Social links --- */}
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target="_blank" href="https://github.com/andynyugen">Github</a></li>
                    <li><a target="_blank" href="https://linkedin.com/in/nguyenandyyy">LinkedIn</a></li>
                    <li><a target="_blank" href="https://instagram.com/osu.sase">Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer