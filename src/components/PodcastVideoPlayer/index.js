import Image from "next/image";
import React, { useState } from "react";
import AudioPlayerCard from "../AudioPlayerCard";
import Forward from "../svg/Forward";
import PodNextBtn from "../svg/PodNextBtn";
import PodPause from "../svg/PodPause";
import PodPlay from "../svg/PodPlay";
import PodPrevBtn from "../svg/PodPrevBtn";
import Reverse from "../svg/Reverse";
import style from "./PodcastVideoPlayer.module.css";

const PodcastVideoPlayer = ({ _id, podcast, podcasts, trackIndex, setTrackIndex }) => {
  // const index = podcasts.map(e => e._id).indexOf(_id);
  // console.log(index);
  // const [audio, setAudio] = useState(new Audio(podcast.audioUri));
  // const [playing, setPlaying] = useState(false);


  // audio.addEventListener('loadeddata', (event) => {
  //   console.log('Yay! The readyState just increased to  ' +
  //       'HAVE_CURRENT_DATA or greater for the first time.');
  // });

  // const handlePlay = async()=>{
  //   await audio.play();
  //   setPlaying(true);
  // }

  // const handlePause = async()=>{
  //   await audio.pause();
  //   setPlaying(false);
  // }

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

        {/* <div className={style.playBtn}>
          <PodNextBtn />
          <Reverse seound="50" />
          {
            playing?  <PodPause 
              handlePause={handlePause}
            />:  <PodPlay
              handlePlay={handlePlay}
            />
          }
         
         
          <Forward seound="50" />
          <PodPrevBtn />
        </div> */}

        <AudioPlayerCard 
          podcast={ podcast }
          podcasts={ podcasts }
          trackIndex={ trackIndex }
          setTrackIndex={ setTrackIndex }
        />
      </div>
    </div>
  );
};

export default PodcastVideoPlayer;
