import React, { useEffect, useState } from "react";
import PodcastVideoPlayer from "../../components/PodcastVideoPlayer";
import PodRalatedVideo from "../../components/PodRalatedVideo";
import style from "./PodcastVideo.module.css";

const PodcastVideo = ({ _id, podcast, podcasts }) => {
  const [trackIndex, setTrackIndex] = useState(podcasts.map(
    e => e._id).indexOf(_id)
  );


  return (
    <div className=" row mt-3 mb-2">
      <div className="col-md-8">
        <PodcastVideoPlayer 
          _id={ _id }
          podcast={ podcast }
          podcasts={ podcasts }
          trackIndex={ trackIndex }
          setTrackIndex={ setTrackIndex }
        />
        <div className={style.videoDescription}>
          <h3>{ podcast?.title }</h3>
          <p>{ podcast?.description }</p>
        </div>
      </div>
      <div className="col-md-4">
        <PodRalatedVideo />
      </div>
    </div>
  );
};

export default PodcastVideo;
