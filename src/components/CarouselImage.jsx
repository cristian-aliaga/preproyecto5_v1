import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../img/hd1.jpg'
import img2 from '../img/hd2.jpg'
import img3 from '../img/hd3.jpg'

export const CarouselImage = () => {
    return (
        <>
            <div className='p-5'>
                <Carousel>
                    <Carousel.Item>
                        <img style={{ maxHeight: "80vh" }}
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Súper Mario Bross</h3>
                            <p>Nintendo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ maxHeight: "80vh" }}
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Súper Mario Bross</h3>
                            <p>Nintendo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ maxHeight: "80vh" }}
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Súper Mario Bross</h3>
                            <p>Nintendo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
