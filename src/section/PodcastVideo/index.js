import React from "react";
import PodcastVideoPlayer from "../../components/PodcastVideoPlayer";
import PodRalatedVideo from "../../components/PodRalatedVideo";
import style from "./PodcastVideo.module.css";

const PodcastVideo = () => {
  return (
    <div className=" row mt-3 mb-2">
      <div className="col-md-8">
        <PodcastVideoPlayer />
        <div className={style.videoDescription}>
          <h3>The Things Wrong That You Think About People</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <PodRalatedVideo />
      </div>
    </div>
  );
};

export default PodcastVideo;
