import './App.css';
import React from 'react';

import shpe from './images/shpeconference.png'

function App() {
  return (
    
    <div className='app-container'>


      <section className='section1'>
      <div className='famila'>  
        <h1>MEET US!</h1>
          <img className='pic'src = {shpe} alt='2021'/> 
         <h3> 2021 SHPE CONFERENCE</h3>
         </div>
      
      </section>
  
    <section className='section2'>
    <div className='aboutus'> 
    <h1> ABOUT US </h1>
    <p> The Latin American Engineers Student Association – the Society of Hispanic Professional Engineers (LAESA–SHPE) is the largest and most prominent undergraduate student organization at The City College of New York. In 1983, a group of dedicated students, to unite all Latino and other minority engineering students, share cultural ideas and promote leadership, founded LAESA within City College. In 1986, LAESA joined forces with the Society of Hispanic Professional Engineers (SHPE) to better achieve their goals and connect with a larger body of professionals. This partnership has flourished over the years and today, LAESA is a firm supporter of the SHPE core values, while remaining true to its original mission. With over 150 members, LAESA-SHPE has been able to gather motivated students from all engineering disciplines and a diverse pool of cultural backgrounds. This dynamic group of students, alongside their highly supportive alumni members, has had many achievements at The City College of New York and within the community. Some of our accomplishments are listed below:  </p>
    </div>
       
    </section>

    <section className='section3'>    
    <div className='row'>
     
     <div className='col'> 
     <h1> Academic Development & Leadership Yearly Programs </h1>
     <li> Developing Excellence in Academic and Leadership DEAL Program since 2000</li>
     <li> Information Technology Program since 1990 </li>
     <li> Mentorship Program since 2018 </li>
     </div>
     <div className='col'> 
     <h1> Community Outreach Programs & Events </h1>
   <li> Pre-College Engineering Day since 19994</li>
   <li> New York Institute of Science, Technology, Engineering, and Mathematics since 2001 </li>
   <li> Noche de Ciencas since 2017</li>
   <li> First Lego League since 2001</li>
   <li> SHPE Jr. Chapter at Manhattan Brifges High School and George Washington High School since 2019</li>
     </div>
   </div>
      </section>

      <div></div>

      <section> h</section>
    </div>

  
  );
}

export default App;