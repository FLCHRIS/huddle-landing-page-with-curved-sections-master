import React from 'react'
import { Sections } from './Sections'
import illustrationTogether from '../assets/illustration-grow-together.svg'
import illustrationConversations from '../assets/illustration-flowing-conversation.svg'
import illustrationUsers from '../assets/illustration-your-users.svg'
import { Footer } from './Footer'

export const Main = () => {
  const dataSecctions = [
    {
      img: illustrationTogether,
      title: 'Grow Together',
      paragraph: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
      wave: true
    },
    {
      img: illustrationConversations,
      title: 'Flowing Conversations',
      paragraph: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      wave: false
    },
    {
      img: illustrationUsers,
      title: 'Your Users',
      paragraph: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      wave: true
    }
  ]

  return (
    <main className='pt-2 relative'>
      {
        dataSecctions.map((value, index) => (
          <Sections key={index} {...value} index={index} />
        ))
      }
      <div className='mt-[18rem] px-6 text-center lg:mt-[22.5rem]'>
        <h4 className='font-poppins mb-[3.1rem] lg:mb-[4.9rem] text-2xl lg:text-[2.53rem] text-verydarkcyan'>Ready To Build Your Community?</h4>
        <a href='/' className='py-[.6rem] lg:py-[1.8rem] px-7 lg:px-[6.5rem] rounded-full bg-pink text-white font-opensans font-[600] text-sm lg:text-xl hover:bg-lightpink transition-colors'>Get Started For Free</a>
      </div>
      <Footer />
    </main>
  )
}
