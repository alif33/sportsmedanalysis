import React from 'react';
import RelatedVideoCard from '../RelatedVideoCard';
import style from './PodRalatedVideo.module.css';

const PodRalatedVideo = () => {
    return (
        <div className={style.podRalatedVideo}>
            <h3>Related Podcast</h3>
            <div className="row">
                <div className="col-md-4">
                    <RelatedVideoCard />
                    <RelatedVideoCard />
                </div>
            </div>
        </div>
    );
};

export default PodRalatedVideo;