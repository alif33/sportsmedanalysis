import Link from "next/link";
import React from "react";
import slugify from "slugify";
import { Sortern } from "../../../__lib__/helpers/Validator";
import Featured from "../Featured";
import RecentStories from "../RecentStories";
import style from "./Fannation.module.css";

const Fannation = ({ recentStories }) => {
  return (
    <div className="container-fluid py-3">
      <div className="row m-0">
        <div className="col-lg-5 ">
          <RecentStories posts={recentStories.slice(0, 4)} />
        </div>

        <div className="col-lg-3 ">
          <Featured posts={recentStories} />
        </div>
        <div className="col-lg-4 ">
          <h1
            className={`${style.nfl_card_title2} ${style.smd_border_bottom} mb-4`}
          >
            Fannation
          </h1>

          {recentStories.slice(0, 5)?.map((item, i) => (
            <Link href={`/${item.slug? item.slug: slugify(item.title, "-")}/${item._id}`} key={i}>
              <a className={`${style.fannationCardNews}`}>
                <h4>{Sortern(item.title, 10)}</h4>
                <p className="mt-1">{item._author}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fannation;
