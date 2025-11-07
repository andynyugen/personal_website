import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

/**
 * Experience.jsx
 * ----------------
 * Displays the "Experience" section with animated cards for current experiences
 * Each card includes an icon, title, description, time, and link.
 */

const Experience = () => {
    return (
        <motion.div
            // Fade-in animation for the entire section
            initial={{ opacity: 0 }}        // Start invisible
            whileInView={{ opacity: 1 }}    // Fade in
            transition={{ duration: 1 }}    // 1s duration
            id="experience" 
            className="w-full px-[12%] py-10 scroll-mt-20"
            // Full width, horizontal padding (12%), vertical padding, top scroll margin
        >
            
            {/* --- Section subtitle --- */}
            <motion.h4 
                initial={{ y:-20, opacity: 0 }}             // Start slightly above
                whileInView={{ y: 0, opacity: 1 }}          // Slide down and fade in
                transition={{ delay: 0.3, duration: 0.5 }}  // Smooth delay for staggered effect
                className="text-center mb-2 text-lg font-Ovo"
                // center text, small bottom margin, medium-large text, Ovo font
            >
                What I offer
            </motion.h4>

            {/* --- Main section title --- */}
            <motion.h2 
                initial={{ y:-20, opacity: 0 }}             // Start slightly above
                whileInView={{ y: 0, opacity: 1 }}          // Slide down and fade in
                transition={{ delay: 0.5, duration: 0.5 }}  // Smooth delay for staggered effect
                className="text-center text-5xl font-Ovo"
                // center text, large heading, Ovo font
            >
                Experience
            </motion.h2>
            
            {/* --- Section description --- */}
            <motion.p 
                initial={{ y:-20, opacity: 0 }}             // Start slightly above
                whileInView={{ y:0, opacity: 1 }}           // Slide down and fade in
                transition={{ delay: 0.7, duration: 0.5 }}  // Smooth delay for staggered effect
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
            >
                    I am the current President of the Society of Asian Scientists and Engineers (SASE) at Oregon State University. 
                    I also serve as a Peer Tutor for TRIO Student Support Services and as a Youth Leader at my local church.
            </motion.p>

            {/* --- Grid layout for experience cards --- */}
            <motion.div 
                initial={{ opacity: 0 }}                    // start invisible
                whileInView={{ opacity: 1 }}                // fade in
                transition={{ delay: 0.9, duration: 0.6 }}  // smooth delay for staggered effect
                className="grid grid-cols-auto gap-6 my-10"
                // Responsive grid with spacing between cards and vertical margins
            >
                {/* Loop through serviceData array from assets */}
                {serviceData.map(({icon, title, description, time, link}, index) => (
                    <motion.div 
                        whileHover={{ scale: 1.05 }}        // slight zoom effect on hover
                        key={index}                         // unique key for each card
                        className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointerhover:bg-lightHover 
                                   hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
                        // gray border, rounded corners, padding, shadow on hover, upward hover motion, dark mode styling
                    >
                        {/* --- Experience company icon --- */}
                        <Image 
                            src={icon} 
                            alt=""
                            className="w-10"
                        />

                        {/* --- Position title --- */}
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                            {title}
                        </h3>
                        {/* --- Company name and time period--- */}
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                            {description} <br/> 
                            {time}
                        </p>

                        {/* --- "Read more" link --- */}
                        <a 
                            href={link} 
                            className="flex items-center gap-2 text-sm mt-5"
                        >
                            Read more 
                            <Image  
                                src={assets.right_arrow} 
                                alt="Right arrow"
                                className="w-4"/>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Experience