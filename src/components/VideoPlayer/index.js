import React, { useState } from 'react';
import Image from 'next/image';
import NextBtn from '../svg/NextBtn';
import Pause from '../svg/Phush';
import PodcastIcon from '../svg/PodcastIcon';
import PrevBtn from '../svg/PrevBtn';
import Sound from '../svg/Sound';
import style from './VideoPlayer.module.css';
import YouTube from 'react-youtube';

const VideoPlayer = ({ watch }) => {
    const [playing, setPlaying] = useState(false);

    return (

        <>
            {   playing ?  <YouTube
                videoId={ watch.videoId } 
                // defaults -> ''
                // id={string}                       // defaults -> ''
                className={ style.watchVideo }                // defaults -> ''
                // iframeClassName={string}          // defaults -> ''
                // style={object}                    // defaults -> {}
                // title={string}                    // defaults -> ''
                // loading={string}                  // defaults -> undefined
                opts={{
                    height: "480px",
                    width: "822px"
                }}                        // defaults -> {}
                // onReady={func}                    // defaults -> noop
                // onPlay={func}                     // defaults -> noop
                onPause={ ()=>setPlaying(false) }                    // defaults -> noop
                // onEnd={func}                      // defaults -> noop
                // onError={func}                    // defaults -> noop
                // onStateChange={func}              // defaults -> noop
                // onPlaybackRateChange={func}       // defaults -> noop
                // onPlaybackQualityChange={func}    // defaults -> noop
              />: <div className={style.watchVideo}>
              <Image width="863" height="484" src="/images/watch/video.png" alt="" />
              <div className={style.videoPlayIcon}>
                  <div className={style.playBtn}>
                      <PrevBtn />
                      <Pause />
                      {/* <button onClick={ ()=>setPlaying(true) }>Play Video</button> */}
                      <NextBtn />
                  </div>
                  <div className={style.videoTime}>
                      12:46/24:07
                  </div>
                  <div className={style.videoTimePrograss}>
                      <div style={{ width: "50%" }} ></div>
                  </div>
                  <div className={style.soundIcon}>
                      <Sound />
                      <PodcastIcon />
                  </div>
              </div>
          </div>

            }
        </>

    );
};

export default VideoPlayer;