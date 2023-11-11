import React from "react";
import '../App.css'


class Carousel extends React.Component {
    render(){
        //get images from props

        const { images } = this.props;

        //create map to map each src to an index

        const carouselItems = images.map((imageSrc, index) => (
            <div className="imageItem" key={index}>
                <img src={imageSrc} alt={`Image ${index}`}></img>
            </div>
        ));


        return(
            <div className="owl-carousel owl-theme">
                {carouselItems}
            </div>
        );
    }
}

export default Carousel;