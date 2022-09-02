import React from 'react';
import Slider from 'react-slick';
import FeaturedPodcastCard from '../sectionCard/FeaturedPodcastCard';

const FeaturedPodcastsSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrow: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
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
                <FeaturedPodcastCard />
            </div>
            <div>
                <FeaturedPodcastCard />
            </div>
            <div>
                <FeaturedPodcastCard />
            </div>
            <div>
                <FeaturedPodcastCard />
            </div>
            <div>
                <FeaturedPodcastCard />
            </div>
        </Slider>
    );
};

export default FeaturedPodcastsSlider;