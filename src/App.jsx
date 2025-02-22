import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Work from './Components/Work'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About/>
      <Services/>
      <Work/>
    </div>
  )
}

export default App
