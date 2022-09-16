import React from 'react';
import Slider from 'react-slick';
import NewsCard6 from '../../components/sectionCard/NewsCard6';
import style from './Betting.module.css';

const BettingFantasy = ({ title, bettings }) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
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
        <div className="container-fluid py-2" style={{ background: '#000' }}>

            <h1 className={`${style.nfl_card_title2} text-white bf_title mb-3`} >{title}</h1>


            <Slider {...settings}>
                {
                    bettings && bettings.slice(0, 5).map((item, index) => {
                        return (
                            <div key={index}> <NewsCard6
                                _id={ item._id }
                                slug={ item.slug }
                                title="Betting"
                                _title={ item.title }
                                img={ item.image }
                                description=" Who profited most from transfer portal?"
                            /></div>
                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default BettingFantasy;