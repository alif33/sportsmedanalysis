import React, { useEffect, useState } from "react";
import PodcastVideoPlayer from "../../components/PodcastVideoPlayer";
import PodRalatedVideo from "../../components/PodRalatedVideo";
import style from "./PodcastVideo.module.css";

const PodcastVideo = ({ podcast }) => {
  // const [audio] = useState(new Audio(podcast.audioUri));
  // const [playing, setPlaying] = useState(true);

  // const sessionStarted = async()=>{
  //   if(playing){
  //     await audio.play();
  //   }else{
  //     await audio.pause();
  //   }
  // }


  useEffect(() => {
    // sessionStarted()
    // console.log(audio);
    // playing ? audio.play() : audio.pause();
  }, []);

  return (
    <div className=" row mt-3 mb-2">
      <div className="col-md-8">
        <PodcastVideoPlayer />
        <div className={style.videoDescription}>
          <h3>{ podcast.title }</h3>
          <p>{ podcast.description }</p>
        </div>
      </div>
      <div className="col-md-4">
        <PodRalatedVideo />
      </div>
    </div>
  );
};

export default PodcastVideo;
