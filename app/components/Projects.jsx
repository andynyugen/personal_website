import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

/**
 * Projects.jsx
 * ----------------
 * Displays the "Projects" section with motion animations and dynamic project cards.
 * 
 * Props:
 * - isDarkMode (boolean): Used to toggle dark/light mode assets and colors.
 */
const Projects = ({isDarkMode}) => {
    return (
        <motion.div // Apply fade-in animation
            initial={{ opacity: 0 }}           // Start invisible
            whileInView={{ opacity: 1 }}      // Fade in when it comes into view
            transition={{ duration: 1 }}      // Animation lasts 1 second
            id="project" 
            className="w-full px-[12%] py-10 scroll-mt-20" // Apply Tailwind CSS
            // full width, horizontal and vertical padding, scroll marign
        >

            {/* --- Project subtitle --- */}
            <motion.h4 
                initial={{ y: -20, opacity: 0 }}           // Start slightly above and invisible
                whileInView={{ y: 0, opacity: 1 }}         // Slide in and appear
                transition={{ duration: 0.5, delay: 0.3 }} // Smooth animation with delay
                className="text-center mb-2 text-lg font-Ovo"
                // center text, bottom margin, large text, Ovo font
            >
                My portfolio
            </motion.h4>

            {/* --- Main section title --- */}
            <motion.h2 
                initial={{ y: -20, opacity: 0 }}            // Start slightly above and invisible
                whileInView={{ y: 0, opacity: 1 }}          // Slide in and appear
                transition={{ duration: 0.5, delay: 0.5 }}  // Smooth animaiton with delay
                className="text-center text-5xl font-Ovo"
                // center text, 5XL font size, Ovo font
            >
                My latest projects
            </motion.h2>

            {/* --- Brief introduction --- */}
            <motion.p 
                initial={{ opacity: 0 }}                  // Start invisible
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
                // center text, maximum width, horziontally center, top and bottom margin, Ovo font
            >
                Welcome to my coding portfolio! Here you’ll find a collection of personal and 
                class projects that showcase my technical skills and growth as a developer.
            </motion.p>

            {/* --- Grid container for projects --- */}
            <motion.div 
                initial={{ opacity: 0 }}              // Start invisible
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-auto my-10 gap-5 dark:text-black"
                // CSS Grid layout, auto fit, vertical margin, grid gap, black text color in dark mode (white box)
            >
                {/* Map over all projects from workData in assets */}
                {workData.map((project, index) => (
                    <motion.div 
                        whileHover={{ scale: 1.05 }}      // Slight zoom effect on hover
                        transition={{ duration: 0.3 }}    // Smooth scaling
                        key={index}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg 
                                relative cursor-pointer group"
                        // equal width/height, center/cover background, round courners, relative position, pointer cursor on hover
                        style = {{backgroundImage: `url(${project.bgImage})`}} // Set project background
                    >
                        {/* Floating info card for each project */}
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                                          -translate-x-1/2 py-3 px-5 flex items-center justify-between
                                          duration-500 group-hover:bottom-7">
                            {/* white background, adjust width, round courners, absolute position, adjust positions, padding, flexbox, vertically center, 0.5 second transition, move box up on hover */}

                            {/* Project title and description */}
                            <div>
                                <h2 className="font-semibold">
                                    {project.title}
                                </h2> 
                                <p className="text-sm text-gray-700">
                                    {project.description}
                                </p>
                            </div>

                            {/* Circle button with arrow icon (styled and animated) */}
                            <div className="border rounded-full border-black w-9 aspect-square flex 
                                            items-center justify-center shadow-[2px_2px_0_#000] 
                                            group-hover:bg-lime-300 transition">
                                {/* rounded borders, black border, width, square, center icons, box shadow, lime green background when hovered, hover transition */}
                                <Image 
                                    src={assets.send_icon} // Use the send arrow icon from assets
                                    alt="send icon"
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* --- GitHub "Show more" button --- */}
            <motion.a 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                href="https://github.com/andynyugen"  // Link to GitHub
                target="_blank"                       // Open link in new tab
                className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
                         border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover
                           duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
                    // max width, align, gap between text and icon, gray text, gray border, full round corners, padding, horizontally center, vertical padding, change background on hover, 0.5 second duration, adjust colors in dark mode
            >
                Show more 
                {/* Arrow icon that changes depending on dark mode */}
                <Image 
                    // Display dark-mode arrow if it's dark-mode, and vice versa
                    src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
                    alt="Right arrow"
                    className="w-4"/>
            </motion.a>
 
        </motion.div>
    )
}

export default Projects