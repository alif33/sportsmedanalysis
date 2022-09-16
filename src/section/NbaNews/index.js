import React, { useState } from "react";
import MiddleTitleCard from "../../components/sectionCard/MiddleTitleCard";
import NewsCard from "../../components/sectionCard/NewsCard";
import NewsCard5 from "../../components/sectionCard/PlayerCard";
import PlayerTab from "../PlayerSection/PlayerTab";
import style from "./NbaNews.module.css";

const NbaNews = ({ title, players, posts }) => {
  return (
    <div className="container-fluid2">
      <h4 className={`${style.nfl_card_title2} mt-3`}>{title}</h4>
      <div className="row mt-3">
        <div className="col-lg-6">
          <NewsCard
            img={posts[3].image}
            title={posts[3].title}
            description={posts[3].description}
          />
        </div>
        <div className="col-lg-3">
          {[1, 1, 1, 1, 1].map((item, i) => (
            <MiddleTitleCard
              key={i}
              title="Hollinger: The 5 Kevin Durant trades that make"
              name="Scott Wheeler"
              comment="377"
            />
          ))}
        </div>
        <div className="col-lg-3">
          <PlayerTab players={players} />
        </div>
      </div>
    </div>
  );
};

export default NbaNews;
