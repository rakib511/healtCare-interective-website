import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner4 from '../../images/Banner/banner4.jpg'
import banner5 from '../../images/Banner/banner5.jpg'
import banner6 from '../../images/Banner/banner6.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <>
             <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner4}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner5}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner6}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </>
    );
};

export default Banner;