import React from 'react';
import ViewsCard from '../ViewsCard';
import style from './VideoDescription.module.css'

const VideoDescription = ({ watch }) => {
    return (
        <div className={style.videoDescription}>
            <div className={style.description}>
                <h2>{ watch.title }</h2>
                <ViewsCard
                    watch={ watch }
                />
                <p>{ watch.description }</p> <br /><br />
            </div>
        </div>
    );
};

export default VideoDescription;