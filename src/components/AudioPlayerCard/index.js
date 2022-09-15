import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import SoundCloud from "react-soundcloud-widget";

const AudioPlayerCard = ({ podcast, podcasts, trackIndex, setTrackIndex }) => {

  // const [trackIndex, setTrackIndex] = useState(0);


  // const musicTracks = [
  //   // {
  //   //   name: "Memories",
  //   //   src: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
  //   // },
  //   {
  //     name: "Creative Minds",
  //     src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
  //   },
  //   {
  //     name: "Acoustic Breeze",
  //     src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
  //   },
  //   {
  //     name: "Sunny",
  //     src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
  //   },
  //   {
  //     name: "Tenderness",
  //     src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
  //   },
  //   {
  //     name: "Once Again",
  //     src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
  //   },
  //   {
  //     name: "Sweet",
  //     src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3",
  //   },
  //   {
  //     name: "Love",
  //     src: "https://www.bensound.com/bensound-music/bensound-love.mp3",
  //   },
  //   {
  //     name: "Piano Moment",
  //     src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3",
  //   },
  //   {
  //     name: "E.R.F",
  //     src: "https://www.bensound.com/bensound-music/bensound-erf.mp3",
  //   },
  //   {
  //     name: "Dreams",
  //     src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3",
  //   },
  //   {
  //     name: "A Day To Remember",
  //     src: "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music",
  //   },
  //   {
  //     name: "Adventure",
  //     src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3",
  //   },
  //   {
  //     name: "Photo Album",
  //     src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3",
  //   },
  //   {
  //     name: "November",
  //     src: "https://www.bensound.com/bensound-music/bensound-november.mp3",
  //   },
  // ];

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? podcasts.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < podcasts.length - 1 ? currentTrack + 1 : 0
    );
  };

  console.log(trackIndex);
  // console.log(podcasts[trackIndex].audioUri);

  return (
    <div className="adio-player">
      
      {/* <AudioPlayer
        // style={{ width: "300px" }}
        style={{ borderRadius: "1rem" }}
        autoPlay
        // layout="horizontal"
        src={ podcasts[trackIndex].audioUri }
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        // other props here
      /> */}

    <iframe 
      width="100%" 
      height="166" 
      scrolling="no" 
      frameBorder="no" 
      allow="autoplay"
      src="https://soundcloud.com/sportsmedanalytics/nfl-week-1-fantasy-football-injury-analysis-jk-dobbins-chris-godwin-michael-thomas-more?ref=clipboard&p=i&c=0&si=21BDA7C892A44341979857BFD8E1F7D8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
    </iframe>

      {/* <SoundCloud
        url={ podcasts[trackIndex].audioUri }         // required
        // id={string}          // defaults -> 'react-sc-widget'
        // opts={object}        // defaults -> './lib/default-options'
        // onPlay={func}        // defaults -> noop
        // onPause={func}       // defaults -> noop
        // onEnd={func}         // defaults -> noop
      /> */}
    </div>
  );
};

export default AudioPlayerCard;
