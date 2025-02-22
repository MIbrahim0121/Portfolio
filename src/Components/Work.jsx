import React from 'react'
import calc from "../assets/calculator.png"
import rec from "../assets/recipe-app.jpg"
import tic from "../assets/ti-tac-toe.png"
import todo from "../assets/to-do.png"
import { FaArrowRightLong } from "react-icons/fa6";



const Work = () => {
  return (
    <div>
      <div className="heading">
        <h1 className="text-4xl font-extrabold text-center !mt-8 underline">
          MY Latest Work
        </h1>
      </div>
      <div className="cont !m-auto w-[65%] grid md:grid-cols-3 grid-cols-1 md:!m-auto !ml-5 ">
  <div className="box2 w-full md:w-[100%] !ml-11 !p-6 !mt-8 ">
    <img className="  w-full aspect-video object-cover rounded-md" src={calc} alt="Calculator" />
    <div className='flex justify-center items-center gap-3   ' >
    <a href="https://calculator-with-react-lilac.vercel.app/" target='_blank' className="link underline hover:underline block text-center mt-2">
      Calculator

    </a> <span><FaArrowRightLong />
    </span> 
    </div>
  </div>

  <div className="box2 w-full md:w-[100%] !ml-11 !p-6 !mt-8 ">
    <img className="  w-full aspect-video object-cover rounded-md" src={rec} alt="Recipe App" />
    <div className='flex justify-center items-center gap-3   ' >
    <a href="https://recipe-app-flame.vercel.app/" className="link underline hover:underline block text-center mt-2">
      Recipe App

    </a> <span><FaArrowRightLong />
    </span> 
    </div>
  </div>

  <div className="box2 w-full md:w-[75%] !ml-11 !p-6 !mt-8 ">
    <img className="  w-full aspect-video object-cover rounded-md" src={tic} alt="Tic Tac Toe" />
    <div className='flex justify-center items-center gap-3   ' >
    <a href="https://tic-tac-toe-ruby-ten.vercel.app/" className="link underline hover:underline block text-center mt-2">
      Tic-Tac-Toe

    </a> <span><FaArrowRightLong />
    </span> 
    </div>
  </div>

  <div className="box2 w-full md:w-[75%] !ml-11 !p-6 !mt-8 ">
    <img className="  w-full aspect-video object-cover rounded-md" src={todo} alt="To-Do List" />
    <div className='flex justify-center items-center gap-3   ' >
    <a href="https://to-do-list-two-beta-64.vercel.app/" className="link underline hover:underline block text-center mt-2">
      To-Do list app

    </a> <span><FaArrowRightLong />
    </span> 
    </div>
  </div>
</div>

    </div>
  )
}

export default Work
