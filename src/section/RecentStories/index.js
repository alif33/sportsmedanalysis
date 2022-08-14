import React from 'react';
import NewsCard3 from '../../components/sectionCard/NewsCard3';
import style from './Recent.module.css';

const RecentStories = () => {
    return (
        <div>
            <h1 className={`${style.nfl_card_title2} ${style.smd_border_bottom} mb-4`}>Recent Stories</h1>
            {[1, 1, 1].map((item, i) => <NewsCard3 key={i} img="/images/landing_Page/palyer_news_card_img1.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" link='#!' />)}
        </div>
    );
};

export default RecentStories;