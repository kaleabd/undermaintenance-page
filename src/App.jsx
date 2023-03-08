import React from 'react'
import Maintain from './assets/maintain.gif'
import Ld from './assets/linkedin.svg'
import git from './assets/git.svg'
import tw from './assets/twitter.svg'
import tg from './assets/telegram.svg'
import ig from './assets/instagram.svg'

export default function App() {
  //we're down for maintenance
  // we'll be back shortly

  // under construction
  // i am working on an awesome new stuff
    return ( 
      <div className='relative z-0'>
        <div className="flex flex-col justify-center items-center gap-2 absolute top-[40%] left-2 z-10">
              <a href='https://www.linkedin.com/in/kaleabdereje/'><img src={Ld} alt="/" className='w-10 h-10 hover:scale-105'/></a>
              <a href='https://github.com/kaleabd'><img src={git} alt="/" className='w-8 h-8 hover:scale-105'/></a>
              <a href='https://twitter.com/Kaleab_thoughts'><img src={tw} alt="/" className='w-8 h-8 hover:scale-105'/></a> 
              <a href='https://t.me/kaleabdereje'><img src={tg} alt="/" className='w-8 h-8 hover:scale-105'/></a>
              <a href='https://www.instagram.com/kaleab_thoughts/'><img src={ig} alt="/" className='w-10 h-10 hover:scale-105'/></a>
              <div className='h-12 border-l-2 border-l-[#f37f14]'></div>
        </div>
        <div className='absolute top-2 right-4 flex gap-2 '>
          <h1>Kaleab D. <sup>TM</sup></h1>
        </div>
        <div className='flex flex-col justify-center items-center h-screen mx-10'>
        <img src={Maintain} alt="under construction gif" className='w-[30%]' />
        <div className='flex flex-col justify-center items-center gap-4'>
          <div>
             <h1 className='text-5xl font-bold'>Under Construction </h1>
          </div>
          <div>
              <p className='text-xl text-slate-400 px-4'>I am working on an awesome new stuff</p>
          </div>
        </div>

      </div>
      </div>

    )

}
