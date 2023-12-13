import logo from '../images/LAESA_Logo_Transparent.png'
import {Link } from 'react-router-dom';
import './header.css'

function Navbar(){
    return(
    <div>
        <header className='nav'> 
            <Link to='/'> <img  className='logo' src = {logo} alt ='logo'/> </Link>
           <div className='nav-links'>

            <ul> <Link to='/'> Home </Link></ul>
            <ul> <Link to='PCED'> PCED </Link></ul>
            <ul> <Link to='Membership'> Membership </Link></ul>
            <ul> <Link to='Eboard'> Eboard </Link></ul>
            <ul> <Link to='Calendar'> Calendar </Link></ul>
            <ul> <Link to='/Donate'> Make a Donation </Link></ul> 

   
            </div>
  
           
        </header>
    </div>
    )
}

export default Navbar