import Image from "next/image";
import React, { useState } from "react";
// import AudioPlayerCard from "../AudioPlayerCard";
import Forward from "../svg/Forward";
import PodNextBtn from "../svg/PodNextBtn";
import PodPause from "../svg/PodPause";
import PodPlay from "../svg/PodPlay";
import PodPrevBtn from "../svg/PodPrevBtn";
import Reverse from "../svg/Reverse";
import style from "./PodcastVideoPlayer.module.css";

const PodcastVideoPlayer = ({ podcast }) => {
  const [audio] = useState(new Audio(podcast.audioUri));
  const [playing, setPlaying] = useState(false);


  const handlePlay = async()=>{
    await audio.play();
    setPlaying(true);
  }

  const handlePause = async()=>{
    await audio.pause();
    setPlaying(false);
  }

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
        <div className={style.videoTimePrograss}>
          <div style={{ width: "70%" }}></div>
        </div>
        <div className="mt-2 d-flex justify-content-between align-items-center">
          <span>15:29</span>
          <span>-15:29</span>
        </div>

        <div className={style.playBtn}>
          <PodNextBtn />
          <Reverse seound="50" />
          {/* <svg onClick={()=>audio.play()} width="67" height="68" viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.6654 0.708008C27.0727 0.708008 20.628 2.66297 15.1464 6.32569C9.66473 9.9884 5.39232 15.1944 2.8694 21.2852C0.346474 27.3761 -0.313637 34.0783 0.972537 40.5443C2.25871 47.0104 5.4334 52.9498 10.0952 57.6116C14.7569 62.2733 20.6963 65.448 27.1624 66.7342C33.6284 68.0204 40.3306 67.3602 46.4215 64.8373C52.5124 62.3144 57.7183 58.042 61.381 52.5603C65.0437 47.0787 66.9987 40.634 66.9987 34.0413C66.9987 29.6639 66.1365 25.3294 64.4614 21.2852C62.7862 17.241 60.3309 13.5664 57.2356 10.4711C54.1403 7.37583 50.4657 4.92051 46.4215 3.24536C42.3773 1.5702 38.0428 0.708008 33.6654 0.708008ZM26.9987 44.0413C26.9987 44.9254 26.6475 45.7732 26.0224 46.3984C25.3973 47.0235 24.5494 47.3747 23.6654 47.3747C22.7813 47.3747 21.9335 47.0235 21.3084 46.3984C20.6832 45.7732 20.332 44.9254 20.332 44.0413V24.0413C20.332 23.1573 20.6832 22.3094 21.3084 21.6843C21.9335 21.0592 22.7813 20.708 23.6654 20.708C24.5494 20.708 25.3973 21.0592 26.0224 21.6843C26.6475 22.3094 26.9987 23.1573 26.9987 24.0413V44.0413ZM46.9987 44.0413C46.9987 44.9254 46.6475 45.7732 46.0224 46.3984C45.3973 47.0235 44.5494 47.3747 43.6654 47.3747C42.7813 47.3747 41.9335 47.0235 41.3084 46.3984C40.6832 45.7732 40.332 44.9254 40.332 44.0413V24.0413C40.332 23.1573 40.6832 22.3094 41.3084 21.6843C41.9335 21.0592 42.7813 20.708 43.6654 20.708C44.5494 20.708 45.3973 21.0592 46.0224 21.6843C46.6475 22.3094 46.9987 23.1573 46.9987 24.0413V44.0413Z" fill="#D70404" />
          </svg> */}
          {
            playing?  <PodPause 
              handlePause={handlePause}
            />:  <PodPlay
              handlePlay={handlePlay}
            />
          }
         
         
          <Forward seound="50" />
          <PodPrevBtn />
        </div>
        {/* <AudioPlayerCard 
          podcast={ podcast }
        /> */}
      </div>
    </div>
  );
};

export default PodcastVideoPlayer;
