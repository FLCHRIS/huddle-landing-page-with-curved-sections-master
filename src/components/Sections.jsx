import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export const Sections = ({ img, title, paragraph, wave, index }) => {
  const dataClasses = {
    container: '',
    containerData: '',
    paragraph: '',
    title: ''
  }

  if (wave === true && index === 0) {
    dataClasses.container = 'mt-[5.5rem] lg:mt-[10rem] px-6 lg:px-[8rem] lg:py-[5rem] bg-verypaleblue togetherWave relative lg:flex lg:flex-row-reverse'
    dataClasses.containerData = 'mt-[4.8rem] text-center lg:text-start lg:mt-[9.5rem] lg:max-w-[40rem]'
    dataClasses.title = 'font-poppins text-xl text-verydarkcyan md:text-[2.53rem]'
    dataClasses.paragraph = 'mt-[.8rem] lg:mt-[2.3rem] lg:pr-24 font-opensans text-sm lg:text-[1rem] font-[600] leading-[1.5] text-verydarkcyan'
  }
  if (wave === false && index === 1) {
    dataClasses.container = 'mt-[15.5rem] lg:mt-[18.3rem] px-6 lg:flex lg:px-[8.5rem]'
    dataClasses.containerData = 'mt-[5.8rem] lg:mt-[8.5rem] lg:pl-[8.4rem] text-center lg:text-left'
    dataClasses.title = 'font-poppins text-xl text-verydarkcyan md:text-[2.53rem] lg:leading-[1]'
    dataClasses.paragraph = 'mt-[.8rem] lg:mt-[2.4rem] font-opensans text-sm lg:text-[1rem] font-[600] leading-[1.5] text-verydarkcyan'
  }
  if (wave === true && index === 2) {
    dataClasses.container = 'mt-[15.16rem] px-6 lg:mt-[19.3rem] lg:px-[7.6rem] bg-verypaleblue usersWave relative lg:flex lg:flex-row-reverse'
    dataClasses.containerData = 'mt-[5.4rem] lg:mt-[8.8rem] lg:mr-32 text-center lg:text-left'
    dataClasses.title = 'font-poppins text-xl text-verydarkcyan md:text-[2.53rem]'
    dataClasses.paragraph = 'mt-[.8rem] lg:mt-[2.3rem] lg:max-w-[32rem] font-opensans text-sm lg:text-[1rem] font-[600] leading-[1.5] text-verydarkcyan'
  }

  return (
    <div className={dataClasses.container}>
      <motion.img
        className='max-w-[16.2rem] mx-auto lg:max-w-[33rem]'
        src={img} initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        alt=''
      />
      <div className={dataClasses.containerData}>
        <h4 className={dataClasses.title}>{title}</h4>
        <p className={dataClasses.paragraph}>{paragraph}</p>
      </div>
    </div>
  )
}

Sections.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  wave: PropTypes.bool,
  index: PropTypes.number
}
