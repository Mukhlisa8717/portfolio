import React from 'react'
import About from '../components/about/About.jsx'
import Projects from '../components/projects/Projects.jsx'
import Contact from '../components/contact/Contact.jsx'
import Hero from '../components/hero/Hero.jsx'


const Home = () => {
  
  return (
    <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
    </main>
  );
}

export default Home
