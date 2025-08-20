import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-light-bg dark:bg-dark-bg flex justify-center items-center p-4 sm:p-6 lg:p-8 transition-colors duration-300 pt-16 sm:pt-20'>
        <form method='POST' action="https://getform.io/f/zbxdzekb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-6 sm:pb-8 text-center sm:text-left'>
                <p className='text-3xl sm:text-4xl lg:text-5xl font-bold inline border-b-4 border-pink-600 text-light-text dark:text-dark-text mb-4'>
                  Contact
                </p>
                <p className='text-light-text dark:text-dark-text py-2 sm:py-4 text-sm sm:text-base lg:text-lg'>
                  Shoot me an email - vadapalli.j@northeastern.edu <br className='hidden sm:block'/> 
                  <span className='sm:hidden'>or</span>
                  <span className='hidden sm:inline'> (or) </span> 
                  Submit the form below
                </p>
            </div>
            <input 
              className='bg-light-card dark:bg-[#ccd6f6] p-3 sm:p-4 border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text placeholder-light-secondary dark:placeholder-dark-secondary focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200 text-sm sm:text-base' 
              type="text" 
              placeholder='Name' 
              name='name' 
            />
            <input 
              className='my-3 sm:my-4 p-3 sm:p-4 bg-light-card dark:bg-[#ccd6f6] border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text placeholder-light-secondary dark:placeholder-dark-secondary focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200 text-sm sm:text-base' 
              type="email" 
              placeholder='Email' 
              name='email' 
            />
            <textarea 
              className='bg-light-card dark:bg-[#ccd6f6] p-3 sm:p-4 border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text placeholder-light-secondary dark:placeholder-dark-secondary focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200 text-sm sm:text-base resize-none' 
              name="message" 
              rows="8" 
              placeholder='Message'
            ></textarea>
            <button className='text-light-text dark:text-white border-2 border-pink-600 hover:bg-pink-600 hover:border-pink-600 px-6 sm:px-8 py-3 sm:py-4 my-6 sm:my-8 mx-auto flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 transform font-medium text-sm sm:text-base lg:text-lg'>
              Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact
