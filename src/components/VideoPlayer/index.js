import Image from 'next/image';
import React from 'react';
import NextBtn from '../svg/NextBtn';
import Pause from '../svg/Phush';
import PodcastIcon from '../svg/PodcastIcon';
import PrevBtn from '../svg/PrevBtn';
import Sound from '../svg/Sound';
import style from './VideoPlayer.module.css';

const VideoPlayer = () => {
    return (
        <div className={style.watchVideo}>
            <Image width="863" height="484" src="/images/watch/video.png" alt="" />
            <div className={style.videoPlayIcon}>
                <div className={style.playBtn}>
                    <PrevBtn />
                    <Pause />
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
    );
};

export default VideoPlayer;