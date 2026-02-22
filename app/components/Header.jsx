import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

/**
 * 
 * Header.jsx
 * ---------------
 * Displays the top "Header" section of the portfolio, including a profile photo,
 * introductory text, and buttons to contact and download resume.
 */

const Header = () => {
    return (
        <div 
            className="w-11/12 max-w-3xl text-center mx-auto h-screen flex 
                        flex-col items-center justify-center gap-4"
            // Responsive container: centered text, max width, full viewport height,
            // flex column layout, vertically/horizontally centered, spacing between children
        >
            
            {/* Profile image container with pop-in animation */}
            <motion.div
                initial={{ scale: 0 }}          // Start invisible (scaled down)
                whileInView={{ scale: 1 }}      // Grows to full size when in view
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }} // Spring effect for smooth bounce animation
            >
                <Image 
                    src={assets.profile_img}      // Profile image from assets
                    alt="" 
                    className="rounded-full w-32" // Circular image, fixed with
                />
            </motion.div>
            
            {/* --- Greeting --- */}
            <motion.h3 
                initial={{ y: -20, opacity: 0 }}            // Start slightly above and transparent
                whileInView={{ y: 0, opacity: 1 }}          // Slide down and fade in
                transition={{ duration: 0.6, delay: 0.3 }}  // Smooth delay and for staggered effect
                className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
                // flex to align text and emoji, medium/large text size, margin, Ovo font
            >
                Hi! I'm Andy Nguyen 
                <Image 
                    src={assets.hand_icon}                  // Waving hand icon from assets
                    alt=""
                    className="w-6"                         // Small icon size
                />
            </motion.h3>

        {/* --- Main title --- */}
        <motion.h1 
            initial={{ y: -30, opacity: 0 }}    // start above & invisible
            whileInView={{ y: 0, opacity: 1 }}  // slide in & appear
            transition={{ duration: 0.8, delay: 0.5 }}  // delayed animation
            className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
            // Large responsive text sizes for name/title, Ovo font
        >
            Computer Science Student @ Oregon State University
        </motion.h1>

        {/* --- Short bio paragraph --- */}
        <motion.p 
            initial={{ opacity: 0 }}            // start invisible
            whileInView={{ opacity: 1 }}        // fade in
            transition={{ duration: 0.6, delay: 0.7 }} // delayed animation
            className="max-w-2xl mx-auto font-Ovo"
            // Centered paragraph, limited width for readability, Ovo font
        >
            I am a third-year Computer Science student attending Oregon State University. 
            I have an applied focus in Data Science and am minoring in Statistics.
        </motion.p>

        {/* --- Action buttons (contact and resume) --- */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            {/* --- Contact button --- */}
            <motion.a 
                initial={{ y: 30, opacity: 0 }}             // Slide up from below, fade in
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                href="#contact"                             // Scroll to contact section
                className="px-10 py-3 border border-white rounded-full bg-black
                         text-white flex items-center gap-2 dark:bg-transparent"
                // Button styling: padding, border, round corners, dark/light mode adjustment
            >
                contact me 
                <Image 
                    src={assets.right_arrow_white}      // Arrow icon from assets
                    alt="Right arrow" 
                    className="w-4"/>
                </motion.a>

                {/* --- Resume download button --- */}
                <motion.a 
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/Andy_CS_Resume_Portfolio.pdf" download    // Resume file download
                    className="px-10 py-3 border rounded-full border-gray-500 flex 
                               items-center gap-2 bg-white dark:text-black"
                    // white background, black text in dark mode, round corners, padding
                >
                    my resume 
                    <Image 
                        src={assets.download_icon}      // Download icon from assets
                        alt="" 
                        className="w-4"/>
                </motion.a>
            </div>
        </div>
    )
}

export default Header