import React from 'react';
import RelatedVideoCard from '../RelatedVideoCard';
import ThreeDot from '../svg/ThreeDot';
import style from './RelatedVideos.module.css';

const RelatedVideos = ({ watches }) => {
    return (
        <div className={style.relatedVideo}>
            <div className={style.relatedHeader}>
                <h5>Related Videos</h5>
                <ThreeDot />
            </div>
            {
                watches && watches.map((item, index)=><RelatedVideoCard 
                    key={ index }
                    item={ item }
                />)
            }

            <div className={style.moreBtn}>
                <button>Show More<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
                </button>
            </div>
        </div>
    );
};

export default RelatedVideos;