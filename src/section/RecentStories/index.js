import React from 'react';
import NewsCard3 from '../../components/sectionCard/NewsCard3';
import style from './Recent.module.css';

const RecentStories = ({ posts }) => {
    return (
        <div>
            <h1 className={`${style.nfl_card_title2} ${style.smd_border_bottom} mb-4`}>
                Recent Stories
            </h1>
            {posts && posts.map((item, index ) => <NewsCard3 
                key={ index } 
                name="John Holinger" 
                title={ item.title } 
                img={ item.image } 
                comment={ item?.comments && item.comments }
                link='#!' 
            />)}
        </div>
    );
};

export default RecentStories;