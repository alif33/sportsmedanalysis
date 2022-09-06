import React from 'react';
import Slider from 'react-slick';
import MoreStorisCard from '../../components/sectionCard/MoreStorisCard';
import style from './MoreStoris.module.css'

const MoreStorisMobile = ({ title }) => {
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
        <div className="d-md-none d-block">
            <div className="row w-100 mb-3 mt-3" >
                <div className={`col-md-12 ${style.title}`}>
                    <h3>{title}</h3>
                </div>
            </div>
            {/* <div className={style.moreStoris}> */}
            <Slider {...settings}>
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
            </Slider>
        </div>
    );
};

export default MoreStorisMobile;