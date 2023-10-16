import React from 'react';
import logo from '../images/LAESA_Logo_Transparent.png'
import './calendar.css'
function Calendar(){
    return(
        

        <div className='calendarpage'> 
            <h1 className='calendar-title'> Join Us On Our Next Event! </h1>
            <div className='calendar'>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=1&showNav=1&showDate=1&showPrint=1&showTabs=0&showCalendars=1&showTz=0&src=bjNpdXA2N2dwamNoYmlwZmhpODhrczB1ZHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D50000" width="1000" height="600" frameborder="0" ></iframe>
            </div>
        
         </div>
    )
}

export default Calendar;