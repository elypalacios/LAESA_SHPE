import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PCED from './Pages/pced';
import Membership from './Pages/membership';
import Eboard from './Pages/eboard';
import Calendar from './Pages/calendar';
import DonationPage from './Pages/DonationPage';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Navbar from './components/header';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <header className='header'>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/PCED" element={<PCED/>}/>
        <Route path="/Membership" element={<Membership/>} />
        <Route path="/Eboard" element={<Eboard/>} />
        <Route path='/Calendar' element={<Calendar/>}/>
        <Route path='/Donate' element={<DonationPage/>}/>

   </Routes>
   <Footer/>
 </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();