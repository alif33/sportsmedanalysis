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
                    height: "480px",
                    width: "822px"
                }}                        // defaults -> {}
                // onReady={func}                    // defaults -> noop
                // onPlay={func}                     // defaults -> noop
                onPause={() => setPlaying(false)}                    // defaults -> noop
            // onEnd={func}                      // defaults -> noop
            // onError={func}                    // defaults -> noop
            // onStateChange={func}              // defaults -> noop
            // onPlaybackRateChange={func}       // defaults -> noop
            // onPlaybackQualityChange={func}    // defaults -> noop
            /> :
                <div className={style.watchVideo}>
                    <Image width="863" height="484" src="/images/watch/video.png" alt="" />
                    <div className={style.videoPlayIcon}>

                        {false ? <IoMdPlay /> : <MdPause />}


                        {/* <button onClick={ ()=>setPlaying(true) }>Play Video</button> */}
                    </div>
                </div>

            }
        </>

    );
};

export default VideoPlayer;