import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { motion } from 'framer-motion'
import logo from '../assets/logo.svg'
import illustration from '../assets/screen-mockups.svg'
import iconCommunitie from '../assets/icon-communities.svg'
import iconMessage from '../assets/icon-messages.svg'

export const Header = () => {
  const logoref = useRef(null)
  const iconCommunitieref = useRef(null)
  const iconMessageref = useRef(null)
  useEffect(() => {
    const optionsLogo = {
      reverse: true
    }
    const optionsAvatar = {
      scale: 1.2,
      reverse: true
    }
    VanillaTilt.init(logoref.current, optionsLogo)
    VanillaTilt.init(iconCommunitieref.current, optionsAvatar)
    VanillaTilt.init(iconMessageref.current, optionsAvatar)
  }, [])

  return (
    <header className='px-6 pt-[1.6rem] lg:pt-[4.9rem] lg:px-20'>
      <div className='flex justify-between items-center'>
        <a href='/' aria-label='Go to home'><img ref={logoref} src={logo} alt='Logo Huddle' className='w-[6rem] lg:w-[15rem]' /></a>
        <a href='/' className='border-pink border text-xs lg:text-base py-[.1rem] lg:py-[.5rem] px-3 lg:px-8 rounded-full text-pink font-opensans hover:border-lightpink hover:text-lightpink transition-colors'>Try It Free</a>
      </div>
      <div className='mt-[7.5rem] lg:mt-[15rem] text-center overflow-hidden'>
        <h1 className='text-verydarkcyan font-poppins text-2xl lg:text-5xl'>Build The Community Your Fans Will Love</h1>
        <h2 className='mt-[1.45rem] lg:mt-[2.3rem] mb-[3.4rem] lg:mb-[4.7rem] leading-[1.45] text-[.94rem] lg:text-xl text-verydarkcyan font-opensans font-[600] lg:max-w-[36.7rem] lg:mx-auto'>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
        </h2>
        <a href='/' className='bg-pink text-white py-3 lg:py-[1.58rem] px-8 lg:px-24 rounded-full font-opensans font-[600] text-[.85rem] lg:text-[1.3rem] shadow-md lg:shadow-lg hover:bg-lightpink transition-colors'>Get Started For Free</a>
        <motion.img
          src={illustration} className='mt-[6.8rem] lg:mt-[8.4rem] w-full mx-auto max-w-[19rem] lg:max-w-[64.5rem]'
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <div className='my-[7.6rem] md:grid md:grid-flow-col'>
          <div className='w-max mx-auto'>
            <img src={iconCommunitie} ref={iconCommunitieref} alt='icon Communitie' className='w-8 md:w-12' />
            <h3 className='mt-2 text-6xl lg:text-[6.3rem] font-opensans font-[700]'>1.4k+</h3>
            <p className='mt-4 lg:mt-8 font-opensans text-[.93rem] lg:text-xl text-gray-400'>Communities Formed</p>
          </div>
          <div className='mt-[5.8rem] md:mt-0 w-max mx-auto'>
            <img src={iconMessage} ref={iconMessageref} alt='icon message' className='w-7 md:w-11' />
            <h3 className='mt-2 lg:mt-2 text-[3.4rem] lg:text-[6.3rem] leading-[1.1] font-opensans font-[700] '>2.7m+</h3>
            <p className='mt-2 lg:mt-6 font-opensans text-[.93rem] lg:text-xl text-gray-400'>Messages Sent</p>
          </div>
        </div>
      </div>
    </header>
  )
}
