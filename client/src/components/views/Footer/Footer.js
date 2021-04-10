import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
            <br/>
            <br/>
           <p style={{color:'#FF416C',fontFamily: 'Brush Script MT, Brush Script Std', fontSize: '60px'}}> Be Unique <i className="fa fa-heart" style={{fontSize:'50px', color:'#FF416C'}}></i></p>
        </div>
    )
}

export default Footer
