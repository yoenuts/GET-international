import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class CarouselFade extends React.Component {

    render() {
        const {carImages} = this.props;

        const carouselItems = carImages.map((imageSrc, index) => (
            <Carousel.Item key={index}>
                <div className='carImages'>
                    <img src={imageSrc} alt={`Slide ${index + 1}` }></img>
                </div>
            </Carousel.Item>
        ));

        return (
            <Carousel fade>
                {carouselItems}
            </Carousel>
        );
    }
}

export default CarouselFade;