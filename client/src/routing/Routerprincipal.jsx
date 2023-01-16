import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { About } from '../components/About/About.jsx';
import { Home } from '../components/Home/Home.jsx';
import { CardDetail } from '../components/CardDetail/CardDetail.jsx';
import { Filters } from '../components/Filters/Filters.jsx';
export const Routerprincipal = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipe/:id" element={<CardDetail />} />
      <Route path="/filters" element={<Filters />} />
    </Routes>
    </>
  )
}
