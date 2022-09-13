import Image from "next/image";
import Link from "next/link";
import React from "react";
import EyeIcon from "../svg/EyeIcon";
import style from "./PodcastRelatedVideoCard.module.css";

const PodcastRelatedVideoCard = () => {
  return (
    <Link href={`/podacast/alsdkfj/asldk`}>
      <a>
        <div className={style.relatedVideoCard}>
          <div>
            <Image
              width="250"
              height="200"
              src={`/images/card-img/related.png`}
              alt=""
            />
          </div>
          <div className="">
            <h4>How Is The Correct Solo Vlogger</h4>
            <p>
              <EyeIcon />
              For beginners who are just..
              <ul>
                <li>16 Jan 2022</li>{" "}
              </ul>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PodcastRelatedVideoCard;
