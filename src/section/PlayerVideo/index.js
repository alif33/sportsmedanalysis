import React from 'react';
import PlayerVideoSlider from '../../components/PlayerVideoSlider';
import style from './PlayerVideo.module.css';


const PlayerVideo = ({ title }) => {
    return (
        <>
            <div className="container-fluid2 my-2">
                <h2 className={style.playerVideoTitle}>
                    {title}
                </h2>
            </div>

            <div className="bg-black">
                <div className="container-fluid2 py-2">
                    <PlayerVideoSlider />
                </div>
            </div>
        </>
    );
};

export default PlayerVideo;