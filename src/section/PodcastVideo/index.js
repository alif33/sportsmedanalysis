import React, { useEffect, useState } from "react";
import SoundCloudPlayer from "../../components/SoundCloudPlayer";
import PodRalatedVideo from "../../components/PodRalatedVideo";
import style from "./PodcastVideo.module.css";

const PodcastVideo = ({ _id, podcast, podcasts }) => {
  // const [trackIndex, setTrackIndex] = useState(podcasts.map(
  //   e => e._id).indexOf(_id)
  // );
  console.log(podcast);

  return (
    <div className=" row mt-3 mb-2">
      <div className="col-md-8">
        <SoundCloudPlayer 
          name="ismail"
          audioUri={podcast.audioUri}
          image={podcast.image}
        />
        <div className={style.videoDescription}>
          <h3>{ podcast?.title }</h3>
          <p>{ podcast?.description }</p>
        </div>
      </div>
      <div className="col-md-4">
          <PodRalatedVideo 
            podcasts={podcasts}
          />
      </div>
    </div>
  );
};

export default PodcastVideo;
