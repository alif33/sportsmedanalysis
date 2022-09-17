import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imageResize } from "../../../../__lib__/helpers/Validator";
import style from "./TopPlayersSliderCard.module.css";

const TopPlayersSliderCard = ({
  active,
  _id,
  firstName,
  lastName,
  slug,
  img,
}) => {
  return (
    <Link href={`/player/${slug}/${_id}`}>
      <a>
        <div className={style.topPlayersSliderCard}>
          <Image
            height="724"
            width="1070"
            src={imageResize(img, "c_thumb,g_face,h_724,w_1070")}
            alt={`${firstName} ${lastName}`}
          />
          <h3 className={active && style.active}>
            {firstName} {lastName}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default TopPlayersSliderCard;
