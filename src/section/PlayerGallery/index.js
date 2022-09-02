import React from 'react';
import PlayerGallerySlider from '../../components/PlayerGallerySlider';
import style from './PlayerGallery.module.css';

const PlayerGallery = ({ title }) => {
    return (
        <>
            <div className="container-fluid2 my-2">
                <h2 className={style.playerVideoTitle}>
                    {title}
                </h2>
            </div>

            <div className="bg-black">
                <div className="container-fluid2 py-2">
                    <PlayerGallerySlider />
                </div>
            </div>
        </>
    );
};

export default PlayerGallery;