import Image from "next/image";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
import EyeIcon from "../svg/EyeIcon";
import style from "./PodcastRelatedVideoCard.module.css";

const PodcastRelatedVideoCard = ({ podcast }) => {
  return (
    <Link href={`/podcast/${slugify(podcast.title, "-")}/${podcast._id}`}>
      <a>
        <div className={style.relatedVideoCard}>
          <div>
            <Image
              width="250"
              height="200"
              src={podcast.image}
              alt={podcast.title}
            />
          </div>
          <div className="">
            <h4>{podcast.title}</h4>
            <p>
              <EyeIcon />
              For beginners who are just..
              <span className="ml-1">16 Jan 2022</span>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PodcastRelatedVideoCard;
