import React from 'react';
import Slider from "react-slick";
import TopPlayersSliderCard from '../sectionCard/TopPlayersSliderCard';

const TopPlayersSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
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
                <TopPlayersSliderCard />
            </div>
            <div>
                <TopPlayersSliderCard active={true} />
            </div>
            <div>
                <TopPlayersSliderCard active={true} />
            </div>
            <div>
                <TopPlayersSliderCard active={true} />
            </div>
            <div>
                <TopPlayersSliderCard active={true} />
            </div>
            <div>
                <TopPlayersSliderCard active={true} />
            </div>
            <div>
                <TopPlayersSliderCard active={true} />
            </div>
            <div>
                <TopPlayersSliderCard active={true} />
            </div>
            <div>
                <TopPlayersSliderCard active={true} />
            </div>
            <div>
                <TopPlayersSliderCard active={true} />
            </div>

        </Slider>
    );
};

export default TopPlayersSlider;