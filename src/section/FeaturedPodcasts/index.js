import React from 'react';
import FeaturedPodcastsSlider from '../../components/FeaturedPodcastsSlider';
import style from './FeaturedPodcasts.module.css'

const FeaturedPodcasts = ({ title }) => {
    return (
        <div className={`featuredPodcasts mb-5 ${style.featuredPodcasts}`}>
            <h3 className="my-3">{title}</h3>
            <FeaturedPodcastsSlider />
        </div>
    );
};

export default FeaturedPodcasts;