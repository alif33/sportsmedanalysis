import Image from "next/image";
import React from "react";
import AudioPlayerCard from "../AudioPlayerCard";
import Forward from "../svg/Forward";
import PodNextBtn from "../svg/PodNextBtn";
import PodPause from "../svg/PodPause";
import PodPrevBtn from "../svg/PodPrevBtn";
import Reverse from "../svg/Reverse";
import style from "./PodcastVideoPlayer.module.css";

const PodcastVideoPlayer = () => {
  return (
    <div className="mt-2 mb-3">
      <div className={style.podcastImage}>
        <Image
          width="1379"
          height="535"
          src="/images/card-img/podcast-video.png"
          alt=""
        />
      </div>
      <div className="w-75 mx-auto mt-4">
        {/* <div className={style.videoTimePrograss}>
          <div style={{ width: "70%" }}></div>
        </div>
        <div className="mt-2 d-flex justify-content-between align-items-center">
          <span>15:29</span>
          <span>-15:29</span>
        </div> */}

        {/* <div className={style.playBtn}>
          <PodNextBtn />
          <Reverse seound="50" />
          <PodPause />
          <Forward seound="50" />
          <PodPrevBtn />
        </div> */}
        <AudioPlayerCard />
      </div>
    </div>
  );
};

export default PodcastVideoPlayer;
