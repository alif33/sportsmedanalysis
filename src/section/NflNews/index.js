import Image from "next/image";
import React from "react";
import LatestNewsCard from "../../components/sectionCard/LatestNewsCard";
import style from "./Nflnews.module.css";
import Link from "next/link";
import slugify from "slugify";
import { imageResize } from "../../../__lib__/helpers/Validator";

const NflNews = ({ posts, latests }) => {
  return (
    <div className={`row mt-1 ${style.nflNews}`}>
      <div className={`col-md-7 ${style.mainNewsCard}`}>
        {/* <h3 className="mb-1">NFL News</h3> */}
        <Link href={`/${slugify(posts[0].title, "-")}/${posts[0]._id}`}>
          <a className={style.nflNewsCard}>
            <Image
              height="474px"
              width="798px"
              src={imageResize(posts[0].image, "c_thumb,g_face,h_724,w_1070")}
              alt={posts[0].title}
            />
            <div className={style.nflNewsCardContent}>
              <p className="badge badge-secondary">{posts[0].league}</p>
              <h4>{posts[0].title}</h4>
              {/* <p>LIVE UPDATES</p> */}
            </div>
          </a>
        </Link>
      </div>
      <div className={`col-md-5 ${style.latestNews}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Latest News</h5>
          <Link href="/">
            <a className="show-more">
              <h3>Show More</h3>
              <i>
                <Image
                  height="8"
                  width="12"
                  src="/images/icon/arrow-right2.png"
                  alt=""
                />
              </i>
            </a>
          </Link>
        </div>
        {latests.slice(0, 3)?.map((item, i) => (
          <LatestNewsCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NflNews;
