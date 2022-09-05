import TopStoryVerticalSlider from './TopStoryVerticalSlider';
import Image from 'next/image';
import NewsCard from '../../components/sectionCard/NewsCard';
import MiddleTitleCard from '../../components/sectionCard/MiddleTitleCard';

import style from './TopStory.module.css';

const TopStory = ({ topPosts }) => {

    return (
        <>
            <div className="container-fluid py-3">
                <div className={style._smd_top_story_main}>
                    <div>
                        <div className={style._smd_newCard}>
                            <h2>Top Story</h2>
                            <NewsCard
                                _id={ topPosts[0]._id }
                                slug={ topPosts[0].slug } 
                                title={ topPosts[0].title }
                                img={ topPosts[0].image } 
                                description='NBA free agency 2022 live tracker: News, rumors, trades, signings, as the offseason rolls on' 
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className={`${style.nfl_card_title2} mb-4 ${style.smd_border_bottom_Headlines}`}>Headlines</h4>
                        { topPosts && topPosts.slice(1, 5).map((item, i) => <MiddleTitleCard 
                            key={i} 
                            _id={ item._id }
                            slug={ item.slug }
                            title={ item.title } 
                            name="Scott Wheeler" 
                            comment={ item?.comments ? item?.comments.length: "0"}
                        />)}
                    </div>
                    <div>
                        <h1 className={style._smd_Upcoming_events}>Upcoming events</h1>
                        <TopStoryVerticalSlider />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopStory;