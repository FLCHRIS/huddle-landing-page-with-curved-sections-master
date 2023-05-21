import React, { useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'
import logo from '../assets/logo.svg'
import iconEmail from '../assets/icon-email.svg'
import iconPhone from '../assets/icon-phone.svg'
import iconFacebook from '../assets/icon-facebook.svg'
import iconTwitter from '../assets/icon-twitter.svg'
import iconInstagram from '../assets/icon-instagram.svg'
import iconInfo from '../assets/icon-info.svg'

export const Footer = () => {
  const logoref = useRef(null)
  const [email, setEmail] = useState('')
  const [classLabel, setClassName] = useState('fixed right-10 top-4 opacity-0')
  const [message, setMessage] = useState('')
  useEffect(() => {
    const options = {
      reverse: true
    }
    VanillaTilt.init(logoref.current, options)
  }, [])
  const submitForm = e => {
    e.preventDefault()
    if (email.length === 0) {
      setMessage('Empty input')
    } else {
      setMessage('Check your email please')
    }
    setClassName('fixed right-10 top-4 bg-red-300 text-red-600 font-opensans font-[600] text-sm rounded-md px-4 py-3 flex items-center gap-2 opacity-100 transition-opacity duration-300')
    setTimeout(() => {
      setClassName('fixed right-10 top-4 bg-red-300 text-red-600 font-opensans font-[600] text-sm rounded-md px-4 py-3 flex items-center gap-2 opacity-0 transition-opacity duration-1000')
    }, 1500)
  }

  return (
    <footer className='mt-[23rem] pb-10 lg:pb-[6.3rem] px-6 lg:px-20 lg:pt-[7.3rem] bg-verydarkcyan footerWave relative lg:flex lg:flex-row-reverse lg:justify-between'>
      <form className='lg:max-w-[34.2rem]' onSubmit={submitForm}>
        <h4 className='text-white font-poppins text-[1.3rem] lg:text-2xl'>NEWSLETTER</h4>
        <p className='mt-4 text-white font-opensans lg:mt-[1.1rem] lg:pr-[11.8rem]'>
          To recieve tips on how to grow your community, sign up to uor weekly newsletter.
          We'll never send you spam or pass on your email address.
        </p>
        <div className='mt-8 lg:mt-10 lg:pr-7 flex flex-col gap-4 lg:gap-10 lg:flex-row'>
          <label htmlFor='email' className={classLabel}>
            <img src={iconInfo} alt='' />
            {message}
          </label>
          <input type='email' name='email' id='email' className='w-full py-3 px-3 font-opensans font-[600] rounded-md' value={email} onChange={e => setEmail(e.target.value)} />
          <button type='submit' className='bg-pink ml-auto py-3 px-[3rem] text-white font-opensans font-[600] rounded-md'>Suscribe</button>
        </div>
      </form>
      <div className='mt-[6.3rem] lg:mt-0 lg:ml-7 '>
        <a href='/'><img src={logo} ref={logoref} alt='logo huddle' className='grayscale brightness-0 invert w-[12.8rem] lg:w-[15rem]' /></a>
        <p className='mt-4 lg:mt-6 text-white font-opensans lg:max-w-md'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
        <address className='mt-4 lg:mt-6'>
          <p className='flex items-center gap-4 text-white not-italic lg:text-[1.05rem]'>
            <img src={iconPhone} alt='' className='ml-2 lg:ml-1' />
            Phone: +1-543-123-4567
          </p>
          <p className='mt-4 ml-2 flex items-center gap-4 text-white not-italic lg:text-[1.05rem]'>
            <img src={iconEmail} alt='' />
            example@huddle.com
          </p>
        </address>
        <div className='mt-12 flex gap-4 lg:mt-[4.5rem]'>
          <a href='/' aria-label='Go to Facebook'><img src={iconFacebook} alt='' className='w-7 lg:w-10 hover:scale-110 transition-transform' /></a>
          <a href='/' aria-label='Go to Instagram'><img src={iconInstagram} alt='' className='w-7 lg:w-10 hover:scale-110 transition-transform' /></a>
          <a href='/' aria-label='Go to Twitter'><img src={iconTwitter} alt='' className='w-7 lg:w-10 hover:scale-110 transition-transform' /></a>
        </div>
      </div>
    </footer>
  )
}
