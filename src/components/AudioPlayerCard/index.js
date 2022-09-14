import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioPlayerCard = ({ podcast }) => {
  const [audio] = useState(new Audio(podcast.audioUri));

  // const [trackIndex, setTrackIndex] = useState(0);

  // console.log(podcast.audioUri);

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

  // const handleClickPrevious = () => {
  //   setTrackIndex((currentTrack) =>
  //     currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
  //   );
  // };

  // const handleClickNext = () => {
  //   setTrackIndex((currentTrack) =>
  //     currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
  //   );
  // };
  audio.addEventListener('playing', (event) => {
    console.log('Video is no longer paused');
  });
  //  console.log(a);
  return (
    <div className="adio-player">
      {/* <button onClick={()=>audio.play()}>play</button>
      <br/>
      <button onClick={()=>audio.pause()}>pause</button> */}
      {/* <AudioPlayer
        // style={{ width: "300px" }}
        style={{ borderRadius: "1rem" }}
        autoPlay
        // layout="horizontal"
        src={"https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        // other props here
      /> */}
    </div>
  );
};

export default AudioPlayerCard;
