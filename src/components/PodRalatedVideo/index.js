import React from "react";
import PodcastRelatedVideoCard from "../PodcastRelatedVideoCard";
import style from "./PodRalatedVideo.module.css";

const PodRalatedVideo = () => {
  return (
    <div className={style.podRalatedVideo}>
      <h3 className="mb-1">Related Podcast</h3>
      <PodcastRelatedVideoCard />
      <PodcastRelatedVideoCard />
    </div>
  );
};

export default PodRalatedVideo;
