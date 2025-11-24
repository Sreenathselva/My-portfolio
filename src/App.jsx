import { useState } from 'react'
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Experiences from './sections/Experiences.jsx';
function App() {

  return (
   <div className='container mx-auto max-w-7xl'>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects />
    <Experiences />
    <section className='min-h-screen'/>
    <section className='min-h-screen'/>
    {/* testimonial */}
    {/* contact */}
    {/* footer */}
   </div>
  )
}

export default App;