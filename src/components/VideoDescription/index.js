import React from 'react';
import ViewsCard from '../ViewsCard';
import style from './VideoDescription.module.css'

const VideoDescription = () => {
    return (
        <div className={style.videoDescription}>
            <div className={style.description}>
                <h2>Where Jags Defense Needs To Step Up This Season</h2>
                <ViewsCard/>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.</p> <br /><br />
            </div>
        </div>
    );
};

export default VideoDescription;