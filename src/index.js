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
import Login from './Pages/login';
import Profile from './Pages/userProfile';
import SignUp from './Pages/signup';
import { UserProvider } from './Pages/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
 <UserProvider>
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
        <Route path= "/Login" element={<Login/>}/>
        <Route path='/User' element={<Profile/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Donate' element={<DonationPage/>}/>

   </Routes>
   <Footer/>
 </BrowserRouter>
 </UserProvider>
  </React.StrictMode>
);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();