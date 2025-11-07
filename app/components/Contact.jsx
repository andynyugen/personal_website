import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'

/**
 * Contact.jsx
 * ----------------
 * Displays the "Contact" section with a heading, description, and a form.
 * Handles form submission using Web3Forms API with asynchronous POST requests.
 */

// Web3Forms API
const Contact = () => {
    // Stores the form submission status message
    const [result, setResult] = React.useState("");

    // Handles form submission
    const onSubmit = async (event) => {
      event.preventDefault();                             // Prevent default form submission behavior
      setResult("Sending....");                           // Show sending message
      const formData = new FormData(event.target);        // Collect form input values
  
      // Add API key for Web3Forms
      formData.append("access_key", "bbeae556-8b69-4e45-8884-11927a741528");
  
      // Send POST request to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
      
      // Update result message based on API response
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();                         // Reset form fields on successful submission
      } else {
        console.log("Error", data);
        setResult(data.message);                      // Display error message
      }
    };

    return (
        <motion.div 
          initial={{ opacity: 0 }}          // start invisible
          whileInView={{ opacity: 1 }}      // fade in when in view
          transition={{ duration: 1 }}      // 1s duration
          id="contact" 
          className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] 
                    bg-no-repeeat bg-center bg-[length:90%_auto] dark:bg-none'
          // full width, padding, scroll margin, bakcground imagein in light mode, none in dark mode
          >

            {/* --- Section subtitle --- */} 
            <motion.h4 
              initial={{ y: -20, opacity: 0 }}            // Start slightly above and invsibile
              whileInView={{ y: 0, opacity: 1 }}          // Slide in and appear
              transition={{ duration: 0.5, delay: 0.3 }}  // Smooth animation with delay
              className="text-center mb-2 text-lg font-Ovo"
              // center text, bottom margin, large text, Ovo font
            >
                Connect with me
            </motion.h4>

            {/* --- Main section title --- */}
            <motion.h2 
              initial={{ y: -20, opacity: 0 }}            // Start slightly above and invisible
              whileInView={{ y: 0, opacity: 1 }}          // Slide in and appear
              transition={{ duration: 0.5, delay: 0.5 }}  // Smooth animation with delay
              className="text-center text-5xl font-Ovo"
              // center text, 5XL font size, Ovo font
            >
                Get in touch
            </motion.h2>

            {/* --- Section description --- */}
            <motion.p 
              initial={{ opacity: 0 }}        // Start invisible
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
              // center text, maximum width, horizontally center, vertical padding, Ovo font
            >
                I'd love to hear from you! If you have any questions, comments, or 
                opportunities to present, please use the form below.
            </motion.p>

            {/* --- Contact Form --- */}
            <motion.form 
              initial={{ opacity: 0 }}                      // Start invisible
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}    // Smooth delayed transition
              onSubmit={onSubmit} 
              className="max-w-2xl mx-auto"
            >

                {/* --- Name and Email Inputs --- */}
                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <motion.input 
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      type="text" 
                      placeholder='Enter your name' 
                      required
                      className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
                               bg-white dark:bg-darkHover/30 dark:border-white/90"
                      name='name'/>

                    <motion.input
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      type="email" 
                      placeholder='Enter your email' 
                      required
                      className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
                               bg-white dark:bg-darkHover/30 dark:border-white/90"
                      name="email"
                    />
                </div>

                {/* --- Message Text Area --- */}
                <motion.textarea 
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  rows="6"                                      // Box is 6 rows long
                  placeholder="Enter your message" 
                  required
                  className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md
                           bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
                  name="message"
                >
                </motion.textarea>

                {/* --- Submit Button --- */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}      // Slight zoom effect on hover
                  transition={{ duration: 0.3 }}    // Smooth scaling
                  type="submit"
                  className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
                          text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent 
                            dark:border-[0.5px] dark:hover:bg-darkHover"
                >
                  Submit now 
                  <Image 
                    src={assets.right_arrow_white} 
                    alt="" 
                    className="w-4"/>
                </motion.button>

                  {/* --- Submission Result Message --- */}
                  <p className="mt-4">
                    {result}
                  </p>
            </motion.form>
        </motion.div>
    )
}

export default Contact