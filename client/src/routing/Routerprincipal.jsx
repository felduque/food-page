import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { About } from '../components/About/About';
import { Footer } from '../components/Footer/Footer';
import { Landing } from '../components/Landing/Landing';
import { Navbar } from '../components/Navbar/Navbar';


function Routerprincipal() {
  return (
    <>
    <Navbar />
    <Routes>

      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />

    </Routes>
    <Footer />
    </>
  )
}
export {
  Routerprincipal
}