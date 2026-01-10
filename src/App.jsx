import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import TechnicalExpertise from './sections/TechnicalExpertise/TechnicalExpertise.jsx'
import Research from './sections/Research/Research.jsx'
import Contact from './sections/Contact/Contact.jsx'

function App() {
  return (
    <>
      <Hero />
      <TechnicalExpertise />
      <Research />
      <Contact />
    </>
  );
}


export default App
