import React from "react";
import ArticleCard from "../../components/sectionCard/ArticleCard";
import Slider from "react-slick";

const Article = ({ posts }) => {
  var settings = {
    // dots: true,
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
          slidesToScroll: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-black container-fluid py-1">
      <Slider {...settings}>
        {posts.slice(0, 4).map((item, index) => (
          <div key={index}>
            <ArticleCard index={index} post={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Article;
