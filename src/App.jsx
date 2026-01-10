import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import TechnicalExpertise from './sections/TechnicalExpertise/TechnicalExpertise.jsx'

function App() {
  return (
    <>
      <Hero />
      <TechnicalExpertise />
    </>
  );
}


export default App
