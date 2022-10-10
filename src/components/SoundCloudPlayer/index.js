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

    const [duration, setDuration] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [playlistIndex, setPlaylistIndex] = useState(0);
      const [player, setPlayer] = useState(false);
  
    const iframeRef = createRef()
   
    // initialization - load soundcloud widget API and set SC event listeners
  
    useEffect(() => {
  
      // use load-script module to load SC Widget API
      loadscript('https://w.soundcloud.com/player/api.js', () => {
        
        // initialize player and store reference in state
  
        const player = window.SC.Widget(iframeRef.current)
        setPlayer( player )
      
        const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } = window.SC.Widget.Events
  
        // NOTE: closures created - cannot access react state or props from within and SC callback functions!!
  

        player.bind( PLAY, () => {
  
          // update state to playing
          setIsPlaying(true)
  
          // check to see if song has changed - if so update state with next index
          player.getCurrentSoundIndex( (playerPlaylistIndex) => {            
            setPlaylistIndex(playerPlaylistIndex)
          })
      
        })
  
        player.bind( PAUSE, () => {
          // update state if player has paused - must double check isPaused since false positives
          player.isPaused( (playerIsPaused) => {
            if (playerIsPaused) setIsPlaying(false)
          })
        })

      })
  
    }, [])
  
  
    // integration - update SC player based on new state (e.g. play button in React section was click)
  
    // adjust playback in SC player to match isPlaying state
    useEffect(() => {
      
      if (!player) return // player loaded async - make sure available
  
      player.isPaused( (playerIsPaused) => {
        if (isPlaying && playerIsPaused) {
          player.play()
        } else if (!isPlaying && !playerIsPaused) {
          player.pause()
        }
      })
      
    },[isPlaying])
  
    // adjust seleted song in SC player playlist if playlistIndex state has changed
    useEffect(() => {
      
      if (!player) return // player loaded async - make sure available
  
        player.getCurrentSoundIndex( (playerPlaylistIndex) => {            
            if (playerPlaylistIndex !== playlistIndex) player.skip(playlistIndex)
        })
      
        player.getDuration(function(duration){
            setDuration(convertMsToTime(duration));
        });

    },[playlistIndex])
  
  
    // React section button click event handlers (play/next/previous)
    //  - adjust React component state based on click events
  
    const togglePlayback = () => {
      setIsPlaying(!isPlaying)
    }
  
    const changePlaylistIndex = (skipForward = true) => {
  
      // get list of songs from SC widget
      player.getSounds( (playerSongList) => {      
  
        let nextIndex = (skipForward) ? playlistIndex + 1 : playlistIndex - 1
  
        // ensure index is not set to less than 0 or greater than playlist
        if (nextIndex < 0) nextIndex = 0
        else if (nextIndex >= playerSongList.length) nextIndex = playerSongList.length - 1
  
        setPlaylistIndex(nextIndex)
  
      })
  
    }

    console.log(duration);
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
        playing={ true }
        controls={ false }
        
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


