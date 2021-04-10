import React from 'react'
import { Carousel } from 'antd';

function ImageSlider(props) {
    return (
        <div style={{width:'100%'}} >

            <Carousel autoplay>
                {props.images.map((image, index) => (
                    <div style={{width:'100%'}} key={index}>
                        <center>
                        <img style={{width:'100%',height:'100%', maxHeight: '500px',maxWidth:'300px' }}
                            src={`http://localhost:5000/${image}`} alt="productImage" />
                        </center>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
