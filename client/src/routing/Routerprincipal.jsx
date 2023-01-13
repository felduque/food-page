import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { About } from '../components/About/About.jsx';
import { Home } from '../components/Home/Home.jsx';
import { CardDetail } from '../components/CardDetail/CardDetail.jsx';

export const Routerprincipal = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipe/:id" element={<CardDetail />} />
    </Routes>
    </>
  )
}
