import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
   <BrowserRouter>
   <div className='max-w-7xl m-auto'>
   <Header />
   <div className='min-h-screen'>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/shop' element={<Shop />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<Error />} />
   </Routes>
   </div>
   </div>
   <Footer />
   </BrowserRouter>
  
    </>
  )
}

export default App