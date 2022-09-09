import React from 'react';
import CommentCard from '../../components/CommentCard';
import RelatedVideos from '../../components/RelatedVideos';
import SubscribeCard from '../../components/SubscribeCard';
import VideoDescription from '../../components/VideoDescription';
import VideoPlayer from '../../components/VideoPlayer';
import style from './NflSingleVideo.module.css';

const NflSingleVideo = ({ watch }) => {
    return (
        <>
            <div className="row my-4">
                <div className="col-md-8">
                    <VideoPlayer 
                        watch={ watch }
                    />
                    {/* <SubscribeCard /> */}
                    <VideoDescription />
                </div>
                <div className="col-md-4">
                    <RelatedVideos />
                </div>
            </div>
        </>
    );
};

export default NflSingleVideo;