
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Coursel from './Components/Coursel/Coursel';
import Offer from './Components/Offer/Offer';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer'

import './App.css'

function App() {
 

  return (
    <>
      <Navbar />
      <Coursel />
      <Offer/>
      <About />
      <Services />
      <Footer />
      

    </>
  )
}

export default App
