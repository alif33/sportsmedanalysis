import React, { useState } from 'react';
import Image from 'next/image';
import Pause from '../svg/Phush';
import style from './VideoPlayer.module.css';
import YouTube from 'react-youtube';
import { IoMdPlay } from 'react-icons/io';
import { MdPause } from 'react-icons/md';

const VideoPlayer = ({ watch }) => {
    const [playing, setPlaying] = useState(false);

    return (

        <>
            {playing ? <YouTube
                videoId={watch.videoId}
                // defaults -> ''
                // id={string}                       // defaults -> ''
                className={style.watchVideo}                // defaults -> ''
                // iframeClassName={string}          // defaults -> ''
                // style={object}                    // defaults -> {}
                // title={string}                    // defaults -> ''
                // loading={string}                  // defaults -> undefined
                opts={{
                    width: "822px",
                    height: "480px",
                    playerVars: {
                        autoplay: 1,
                        // controls: 0,
                        // rel: 0,
                        // showinfo: 0,
                        // mute: 1,
                        // loop: 1
                      }
                }}                        // defaults -> {}
                // onReady={func}                    // defaults -> noop
                // onPlay={func}                     // defaults -> noop
                // onPause={() => setPlaying(false)}                    // defaults -> noop
            // onEnd={func}                      // defaults -> noop
            // onError={func}                    // defaults -> noop
            // onStateChange={func}              // defaults -> noop
            // onPlaybackRateChange={func}       // defaults -> noop
            // onPlaybackQualityChange={func}    // defaults -> noop
            /> :
                <div className={style.watchVideo}>
                    <Image width="863" height="484" src={`https://i.ytimg.com/vi/${ watch.videoId }/hq720.jpg`} alt="" />
                    <div className={style.videoPlayIcon}>
                        <IoMdPlay onClick={()=>setPlaying(true)} />
                    </div>
                </div>

            }
        </>

    );
};

export default VideoPlayer;