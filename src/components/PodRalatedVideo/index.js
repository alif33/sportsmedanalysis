import React from "react";
import PodcastRelatedVideoCard from "../PodcastRelatedVideoCard";
import style from "./PodRalatedVideo.module.css";

const PodRalatedVideo = ({ podcasts }) => {
  return (
    <div className={style.podRalatedVideo}>
      <h3 className="mb-1">Related Podcast</h3>
      {
          podcasts && podcasts.map((podcast, index)=>{
            return(
              <PodcastRelatedVideoCard 
                key={index}
                podcast={podcast}
              />
          )
        })
      }
    </div>
  );
};

export default PodRalatedVideo;
