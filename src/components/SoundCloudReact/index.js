import React, { 
    useState, 
    createRef,
    useEffect } from "react";
import Image from "next/image";
import Forward from "../svg/Forward";
import PodNextBtn from "../svg/PodNextBtn";
import PodPause from "../svg/PodPause";
import PodPlay from "../svg/PodPlay";
import PodPrevBtn from "../svg/PodPrevBtn";
import Reverse from "../svg/Reverse";
import loadscript from "load-script";
import style from "./SoundCloudPlayer.module.css";
import ReactPlayer from "react-player/soundcloud";
import { convertMsToTime } from "../../../__lib__/helpers/Validator";

const PodcastVideoPlayer = ({ _id, podcast, podcasts, trackIndex, setTrackIndex }) => {

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
      <ReactPlayer 
        url={"https://soundcloud.com/sportsmedanalytics/nfl-week-1-fantasy-football-injury-analysis-jk-dobbins-chris-godwin-michael-thomas-more?ref=clipboard&p=i&c=0&si=21BDA7C892A44341979857BFD8E1F7D8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"}
        // playing={ true }
        // controls={ false }
        // light={ }
        // loop={ }
        // volume={ }

      />
      <div className="soundcloud-section" style={{ display: "none" }}>
            <h3>SoundCloud Widget</h3>
            <iframe 
                ref={iframeRef} id="sound-cloud-player" 
                style={{border: 'none', height: 314, width: 400}} 
                scrolling="no" 
                allow="autoplay" 
                src={ "https://w.soundcloud.com/player/?url=https://soundcloud.com/sportsmedanalytics/nfl-week-1-fantasy-football-injury-analysis-jk-dobbins-chris-godwin-michael-thomas-more?ref=clipboard&p=i&c=0&si=21BDA7C892A44341979857BFD8E1F7D8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }>
            </iframe>
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
          {
             true?  <PodPause 
              handlePause={togglePlayback}
            />:  <PodPlay
              handlePlay={()=>console.log("Playing")}
            />
          }
         
          <Forward seound="50" />
          <PodPrevBtn />
        </div>
      </div>
    </div>
  );
};

export default PodcastVideoPlayer;
