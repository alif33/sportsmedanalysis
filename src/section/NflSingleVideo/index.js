import React from 'react';
import CommentCard from '../../components/CommentCard';
import RelatedVideos from '../../components/RelatedVideos';
import SubscribeCard from '../../components/SubscribeCard';
import VideoDescription from '../../components/VideoDescription';
import VideoPlayer from '../../components/VideoPlayer';
import style from './NflSingleVideo.module.css';

const NflSingleVideo = () => {
    return (
        <>
            <div className="row mt-3 mb-2">
                <div className="col-12">
                    <h3 className={style.title}>NFL Videos</h3>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-8">

                    <VideoPlayer />
                    <SubscribeCard />
                    <VideoDescription />
                </div>
                <div className="col-md-4">
                    <CommentCard />
                    <div className="mt-4"></div>
                    <RelatedVideos />
                </div>
            </div>
        </>
    );
};

export default NflSingleVideo;