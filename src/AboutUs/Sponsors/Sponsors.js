import React from 'react';
import './Sponsors.css';
import Logo from "../../logo192.png";
import Carousel from 'react-bootstrap/Carousel';

const sponsors = props=>{
    return (
    <div>
        <h5 className='sponsorTitle' style={{textAlign:'center',fontFamily:'planetn'}}>Our Proud Sponsors</h5>
        <Carousel interval={2000} className="sponsorContainer">
        <Carousel.Item className='sponsor'>
            <img
            src={Logo}
            alt="First slide"
            width="192px"
            height="192px"
            />
        
        </Carousel.Item>
        <Carousel.Item className="sponsor">
            <img
            src={Logo}
            alt="Third slide"
            width="192px"
            height="192px"
            />

            
        </Carousel.Item>
        <Carousel.Item className='sponsor'>
            <img
            src={Logo}
            alt="Third slide"
            width="192px"
            height="192px"
            />

            
        </Carousel.Item>
        </Carousel>
    </div>
    );
}

export default sponsors;