import React from 'react'
import profile from "../assets/profile2.png"
// import profile from "../assets/about.png"
// import profile from "../assets/boy.png"
// import profile from "../assets/anime.jpg"
// import profile from "../assets/anim2.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {

  

  return (
    <>
    <div id='home' className='flex flex-col items-center justify-center '  >

      <img className='rounded profile  ' src={profile} alt="" />
      <div className='flex justify-center  items-center intro  ' >
      <h1 className='text-xl font-bold md:text-3xl text-center' > <h1 className='text-2xl md:text-4xl text-centerfont-extrabold   inline name' > I'm MUHAMMAD IBRAHIM </h1>, Front-end Developer Based In PAKISTAN.</h1>
      </div>
      <h1 className='intro text-center  ' >I'm  a frontend developer skilled in React, Next.js, and Tailwind CSS, building interactive web apps.
</h1>
<div className='flex gap-12' >
<button className='connect2  rounded-4xl cursor-pointer pr-3  ' ><AnchorLink offset={10} href='#contact' >ConnectWithMe</AnchorLink></button>
<button className=' resume hover:border-none font-mono border border-white-1  rounded-4xl cursor-pointer pr-3  ' >Resume</button>
</div>
    </div>
    </>
  )

}

export default Hero
