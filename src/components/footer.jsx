import './footer.css'
import shpelogo from '../images/shpelogo.png'

function Footer(){
    return(

            <footer className="footer">

            <div className="footer-row">
            <img className='shpelogo'src={shpelogo} alt='shpelogo'/>

            <div className='footer-col'>
               <h1> Follow Us </h1> 
                
                <div>
                <i class="fa-brands fa-instagram fa-2xl"></i>
                 @LAESA_SHPE
               <div>
               <i class="fa-brands fa-facebook fa-2xl"></i>
               @LAESA-SHPE
               </div>
               </div>
               <div>
               <i class="fa-brands fa-linkedin fa-2xl"></i>
               @LAESA-SHPE

               </div>
            </div>

            <div className='footer-col'>
             <h1> Contact Information</h1> 
             <div>
             <i class="fa-solid fa-house fa-2xl"></i>
             160 Convent Ave, New York, NY 10031
             </div>

             <div>
             <i class="fa-solid fa-phone fa-2xl" ></i>
             (212) 650-7220

             </div>

             <div>
             <i class="fa-solid fa-envelope fa-2xl"></i>
             laesashpe@gmail.com
             </div>

            </div>
            </div>
         

            </footer>



    )
}

export default Footer