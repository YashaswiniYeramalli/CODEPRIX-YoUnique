import React from 'react'
import r from '../LandingPage/assets/riya.jpeg';
import a from '../LandingPage/assets/y1.jpeg';
import y from '../LandingPage/assets/y.jpeg';

function contactus() {
    return (
        <div>
            <div style={{color:'#FF416C',fontFamily: 'Brush Script MT, Brush Script Std', fontSize: '120px', textAlign:'center'}}> 
                     DEVELOPERS
    
            </div>
        <div style={{display:'flex',marginLeft:'25%', alignItems:'center', paddingTop:'4%'}}>
           
            <div style={{marginLeft:'100px'}} >
                <div>
                <img  style ={{width:'300px',height:'400px'}} src={r}/>
                </div>
                <div style={{color:'#FF416C',fontFamily: '"American Typewriter", serif', fontSize: '40px',fontWeight:'bold' ,textAlign:'center'}}>
                    RIYA 
                </div>
            </div>
            <div style={{marginLeft:'100px',}} >
                <div>
                <img  style ={{width:'300px',height:'400px'}}src={a}/>
                </div>
                <div style={{color:'#FF416C',fontFamily: '"American Typewriter", serif', fontSize: '40px',fontWeight:'bold',textAlign:'center' }}>
                   AYUSHEE
                </div>
            </div>
            <div style={{marginLeft:'100px'}}>
                <div>
                <img  style ={{width:'300px',height:'400px'}} src={y}/>
                </div>
                <div style={{color:'#FF416C',fontFamily: '"American Typewriter", serif', fontSize: '40px',fontWeight:'bold',textAlign:'center' }}>
                   YASHASWINI
                </div>
            </div> 
        </div>
        </div>
    )
}

export default contactus
