import React from "react";
import style from "./TopStorySliderCss.module.css";

const SliderCard = () => {
  return (
    <div className={`border-bottom ${style.sliderCard} `}>
      <a href="#!">
        <h4 className="mt-2">
          Peacock <br />
          Brother From Another
        </h4>
        <h6>News</h6>
        <h6>Wed 12am PST</h6>
      </a>
    </div>
  );
};

export default SliderCard;
