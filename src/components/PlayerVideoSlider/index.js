import React from 'react';
import Slider from "react-slick";
import PlayerVideoSliderCard from '../sectionCard/PlayerVideoSliderCard';

const PlayerVideoSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrow: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <div>
                <PlayerVideoSliderCard title="Target Regression TE’s" img="/images/card-img/video-card.png" name="video" />
            </div>
            <div>
                <PlayerVideoSliderCard title="Target Regression TE’s" img="/images/card-img/video-card.png" name="video" />
            </div>
            <div>
                <PlayerVideoSliderCard title="Target Regression TE’s" img="/images/card-img/video-card.png" name="video" />
            </div>
            <div>
                <PlayerVideoSliderCard title="Target Regression TE’s" img="/images/card-img/video-card.png" name="video" />
            </div>
            <div>
                <PlayerVideoSliderCard title="Target Regression TE’s" img="/images/card-img/video-card.png" name="video" />
            </div>
            <div>
                <PlayerVideoSliderCard title="Target Regression TE’s" img="/images/card-img/video-card.png" name="video" />
            </div>

        </Slider>
    );
};

export default PlayerVideoSlider;