import React from 'react';
import Slider from 'react-slick';
import PlayerGallerySliderCard from '../../section/PlayerGallerySliderCard';

const PlayerGallerySlider = () => {
    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: "0px",
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
                <PlayerGallerySliderCard title="oshua Primo was the youngest player in the NBA" p="
this season. Drafted by the San Antonio Spurs with the 12th overall pick in the 2021 draft, " img="/images/card-img/gallery-img.png" mark="2/10" />
            </div>

            <div>
                <PlayerGallerySliderCard title="oshua Primo was the youngest player in the NBA" p="
this season. Drafted by the San Antonio Spurs with the 12th overall pick in the 2021 draft, " img="/images/card-img/gallery-img.png" mark="2/10" />
            </div>
            <div>
                <PlayerGallerySliderCard title="oshua Primo was the youngest player in the NBA" p="
this season. Drafted by the San Antonio Spurs with the 12th overall pick in the 2021 draft, " img="/images/card-img/gallery-img.png" mark="2/10" />
            </div>
            <div>
                <PlayerGallerySliderCard title="oshua Primo was the youngest player in the NBA" p="
this season. Drafted by the San Antonio Spurs with the 12th overall pick in the 2021 draft, " img="/images/card-img/gallery-img.png" mark="2/10" />
            </div>
            <div>
                <PlayerGallerySliderCard title="oshua Primo was the youngest player in the NBA" p="
this season. Drafted by the San Antonio Spurs with the 12th overall pick in the 2021 draft, " img="/images/card-img/gallery-img.png" mark="2/10" />
            </div>
            <div>
                <PlayerGallerySliderCard title="oshua Primo was the youngest player in the NBA" p="
this season. Drafted by the San Antonio Spurs with the 12th overall pick in the 2021 draft, " img="/images/card-img/gallery-img.png" mark="2/10" />
            </div>


        </Slider>
    );
};

export default PlayerGallerySlider;