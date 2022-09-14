import React from "react";
import Slider from "react-slick";
import TopPlayersSliderCard from "../sectionCard/TopPlayersSliderCard";

const TopPlayersSlider = ({ players }) => {
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
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {players &&
        players.map((item, index) => {
          return (
            <div key={index}>
              <TopPlayersSliderCard
                active={true}
                _id={item._id}
                firstName={item.firstName}
                lastName={item.lastName}
                slug={item.slug}
                img={item.image}
              />
            </div>
          );
        })}
      {/* 
            <div>
                <TopPlayersSliderCard  />
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
            </div> */}
    </Slider>
  );
};

export default TopPlayersSlider;
