import Link from "next/link";
import React from "react";
import slugify from "slugify";
import { Sortern } from "../../../__lib__/helpers/Validator";
import style from "./TopStorySliderCss.module.css";

const SliderCard = ({ item }) => {
  return (
    <div className={` ${style.sliderCard} `}>
      <Link href={`/watch/${slugify(item.title, "-")}/${item._id}`}>
        <a>
          <h4 className="mt-0">
            {Sortern( item.title, 10) }
          </h4>
          <h6>{item.league}</h6>
        </a>
      </Link>
    </div>
  );
};

export default SliderCard;
