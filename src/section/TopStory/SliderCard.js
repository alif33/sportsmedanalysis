import Link from "next/link";
import React from "react";
import slugify from "slugify";
import style from "./TopStorySliderCss.module.css";

const SliderCard = ({ item }) => {
  return (
    <div className={`border-bottom ${style.sliderCard} `}>
      <Link href={`/watch/${slugify(item.title, "-")}/${item._id}`}>
        <a>
          <h4 className="mt-2">
            { item.title }
          </h4>
          <h6>{item.league}</h6>
        </a>
      </Link>
    </div>
  );
};

export default SliderCard;
