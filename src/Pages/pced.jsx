import React from 'react';
import flier from '../images/pced_flier.png'
import './pced.css'
import nationalgrid from '../images/National_Grid.png'
import stem from '../images/stem.png'
import sodexo from '../images/sodexo.png'
import turner from '../images/turner.png'
import ww from '../images/whiting_turner.jpg'
import nutanix from '../images/LatinX_nutanix.png'
import verizon from '../images/Verizon.png'
import shpe2 from '../images/shpelogo2.png'
import progist from '../images/progsit.jpg'
import hla from '../images/hla.jpg'
import yeiry from '../images/Yeiry.png'
import Tim from '../images/Headshot Tim.jpg'
import chris from '../images/cgris.png'
import elbin from '../images/Headshot Madera.Elbin.jpeg'
import raisa from '../images/raisa.jpeg'
import Jean from '../images/jean.jpg'
import Gustavo from '../images/gustavo.jpg'
import Jonathan from '../images/jonathan.jpg'
import luna from '../images/luna.jpeg'
import Brandon from '../images/brandon.jpeg'
import anirudna from '../images/Anirudha.png'
import Andres from '../images/andres picture.png'
import Jack from '../images/jack.jpg'


function PCED(){

    return(
        <div className='app-container'> 
            <div className='heading'>
            
            <h1> 2023 Pre-College Engineering Day</h1>
            <h3> The Latin American Engineering Student Association (LAESA), chapter of the Society of Hispanics Professional Engineers (SHPE), is proud to announce the 29th annual Pre-College Engineering Day (PCED). </h3>
            <img src={flier} alt ='flier'/>
            <div className='pced-section'>  
            <h3> The goal  for this year's PCED is to introduce the younger Latinx and Black community to the world of aeronautics while exposing them to different STEM-related careers (Science, Technology, Engineering, and Mathematics)</h3>
            <h3>This event includes workshops led by sponsors, lab tours, a team-building project, and an engineering orientation session. This year's theme will be related to aerospace, but we will be exposing the participating students to several different engineering and science disciplines</h3>
        </div>
        </div>

        <div className='team'> <div className='title'> Meet the Team</div>
             <h1> 🚀 Directors 🚀 </h1>
            <div className='rowss'>
                <img src={yeiry} alt='yeiry'/>
                <div className='colss'>
                  <img src={Tim} alt='Tim'></img>
                </div>
              </div>

              
            <h1> 📊 Logistics 📊  </h1>
            <div className='rowss'>
                <img src={chris} alt='chris'/>
                <div className='colss'>
                  <img src={elbin} alt='elbin'></img>
                </div>
                <div className='colss'>
                  <img src={raisa} alt='raisa'></img>
                </div>
              </div>


            <h1> 🚀  Projects  🚀</h1>
            <div className='rowss'>
                <img src={Jean} alt='Jean'/>
                <div className='colss'>
                  <img src={Gustavo} alt='Gustavo'></img>
                </div>
                <div className='colss'>
                  <img src={Jonathan} alt='Jonathan'></img>
                </div>
              </div>

            <h1> 🏫 Schools 🏫 </h1>
            <div className='rowss'>
                <img src={luna} alt='luna'/>
                <div className='colss'>
                  <img src={Brandon} alt='Brandon'></img>
                </div>
                <div className='colss'>
                  <img src={anirudna} alt='anirudna'></img>
                </div>
              </div>


            <h1> 💸  Budget  💸 </h1>
            <div className='rowss'>
                <img src={Andres} alt='Andres'/>
                <div className='colss'>
                  <img src={Jack} alt='Jack'></img>
                </div>
              </div>
            

            </div>
      
      <div className='companies'> 
    <h1> MEET THE COMPANIES</h1>  
      <div className='row-pced'>
        <img className='nationalgrid' src={nationalgrid} alt='nationalgrid'/>
        <div className='cols-pced'>
        <img  className='stem' src={stem} alt ='stem'/>
        </div>

        <div className='cols-pced'>
        <img   className='sodexo'src={sodexo} alt ='sodexo'/>
        </div>

       
        <div className='cols-pced'>
        <img  className='ww' src={ww} alt ='ww'/>
        </div>

        
      </div>

      <div className='row-pced'>
      <div className='cols-pced'>
      <img className='turner' src={turner} alt='turner'/>
        </div>

        <div className='cols-pced'>
        <img className='verizon' src={verizon} alt='verizon'/>
        </div>

        <div className='cols-pced'>
        <img  className='shpe2' src={shpe2} alt ='shpe2'/>
      </div>

      <div className='cols-pced'>
      <img   className='nutanix'src={nutanix} alt ='nutanix'/>
        </div>
      </div>
     
    
      <div className='row-pced'>
      <div className='cols-pced'>
      <img  className='hla' src={hla} alt ='hla'/>
        </div>
        <div className='cols-pced'>
        <img className='progist' src={progist} alt='progist'/>
        </div>
      
      
       
        <div className='cols-pced'>
       
        </div>
      </div>



      </div>

        </div>
    )
}

export default PCED;