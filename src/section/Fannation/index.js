import Link from "next/link";
import React from "react";
import { Sortern } from "../../../__lib__/helpers/Validator";
import Featured from "../Featured";
import RecentStories from "../RecentStories";
import style from "./Fannation.module.css";

const Fannation = ({ recentStories }) => {
  return (
    <div className="container-fluid py-3">
      <div className="row m-0">
        <div className="col-lg-5 col-md-6">
          <RecentStories posts={recentStories.slice(0, 4)} />
        </div>

        <div className="col-lg-3 col-md-6">
          <Featured posts={recentStories} />
        </div>
        <div className="col-lg-4 col-md-6 mx-auto">
          <h1
            className={`${style.nfl_card_title2} ${style.smd_border_bottom} mb-4`}
          >
            Fannation
          </h1>

          {recentStories.slice(0, 5)?.map((item, i) => (
            <Link href="/" key={i}>
              <a className={`border-bottom ${style.fannationCardNews}`}>
                <h4 className="mt-2">{Sortern(item.title, 8)}</h4>
                <p className="mt-1">John Holinger</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fannation;
