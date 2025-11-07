import { assets, infoList, toolsData } from '@/assets/assets' // Tool icons
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

/**
 * About.jsx
 * ----------------
 * Displays an introduction section with a profile image, summary text,
 * key information cards, and a list of tools/technologies 
 * 
 * Props:
 * - isDarkMode (boolean): Used to toggle dark/light mode assets and colors.
 */

const About = ({isDarkMode}) => {
    return (
        // Main container with fade-in animation
        <motion.div 
            id="about" 
            className="w-full px-[12%] py-10 scroll-mt-20"  // full width, horizontal & vertical padding, scroll margin
            initial={{ opacity: 0 }}                        // start invisible
            whileInView={{ opacity: 1 }}                    // fade in when in view
            transition={{ duration: 1 }}                    // 1 second duration
        >
            {/* --- Subtitle --- */}
            <motion.h4 
                initial={{ opacity: 0, y: -20}}             // start above & invisible
                whileInView={{ opacity: 1, y: 0}}           // slide in & appear
                transition={{ duration: 1, delay: 0.3}}     // delayed animation
                className="text-center mb-2 text-lg font-Ovo" // center, bottom margin, large text, Ovo font
            >
                Introduction
            </motion.h4>
            
            {/* --- Main title --- */}
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}            // start above & invisible
                whileInView={{ opacity: 1, y: 0 }}          // slide in & appear
                transition={{ duration: 0.5, delay: 0.5}}   // delayed animation
                className="text-center mb-2 text-5xl font-Ovo" // center, large Ovo font
            >
                About me
            </motion.h2>

            {/* --- Container for image + text content --- */}
            <motion.div 
                initial={{opacity: 0}}                      // start invisible
                whileInView={{ opacity: 1 }}                // fade in
                transition={{ duration: 0.8}}               // 0.8s duration
                className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
                // column on mobile, row on large screens, gap between items, vertical margin
            >
                {/* --- Profile Image --- */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}        // start smaller & invisible
                    whileInView={{ opacity: 1, scale: 1 }}      // fade & scale in
                    transition={{ duration: 0.6 }}              // 0.6s duration
                    className="w-64 sm:w-80 rounded-3xl max-w-none"
                    // responsive width, rounded corner
                >
                    <Image 
                        src={assets.user_image}         // User image from assets
                        alt="User Profile"  
                        className= "w-full rounded-3xl" // responsive & rounded corners
                    />
                </motion.div>

                {/* --- Text and Details Section --- */}
                <motion.div 
                    className="flex-1"                  // take remaining width
                    initial={{ opacity: 0 }}            // start invisible
                    whileInView={{ opacity: 1 }}        // fade in
                    transition={{ duration: 0.6, delay: 0.8 }}  // delayed animation
                >
                    {/* Personal Summary */}
                    <p className="mb-10 max-w-2xl font-Ovo">
                        I’m a third-year Computer Science major with a minor in Statistics and a strong passion for data. 
                        Alongside my studies, I bring several years of leadership experience in diverse settings. 
                        I’m an avid learner, always eager to grow and explore new skills.
                    </p>

                    {/* --- Info Cards --- */}
                    <motion.ul 
                        initial={{ opacity: 0 }}                    // start invisible
                        whileInView={{ opacity: 1 }}                // fade in
                        transition={{ duration: 0.8, delay: 1} }    // delayed animation
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
                        // 1 column mobile, 3 columsn larger screens, gap, max width
                    >
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <motion.li 
                                whileHover={{ scale: 1.05 }}    // slight zoom effect on hover
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                                         hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                                         dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                                // border, rounded, padding, hover color/effect, dark mode adjustments
                                key = {index}
                            >
                                {/* --- Icons --- */}
                                <Image
                                    // Display dark-mode icons if it's dark-mode, and vice versa 
                                    src={isDarkMode ? iconDark : icon} 
                                    alt={title} 
                                    className="w-7 mt-3"
                                />
                                {/* Card title */}
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                    {title}
                                </h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">
                                    {description}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* --- Tools Heading --- */}
                    <motion.h4 
                        initial={{ y: -20, opacity: 0 }}            // start invisible & slightly above
                        whileInView={{ y: 0, opacity: 1 }}          // slide in & apear
                        transition={{ delay: 1.5, duration: 0.6 }}  // delayed animation
                        className="my-6 text-gray-700 font-Ovo dark:text-white/80"
                    >
                        Tools I use
                    </motion.h4>

                    {/* --- Tool Icons --- */}
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {toolsData.map((tool, index) => (
                            <motion.li 
                                whileHover={{ scale: 1.1 }}     // hover zoom effect
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square 
                                           border border-gray-400 rounded-lg cursor-pointer 
                                           hover:-translate-y-1 duration-500"
                                // box size, border, round corners, hover effect
                                key={index}
                            >
                                <Image 
                                    src={tool} 
                                    alt="Tool" 
                                    className="w-5 sm:w-7" // responsive size
                                />
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About