import TopStoryVerticalSlider from './TopStoryVerticalSlider';
import Image from 'next/image';
import NewsCard from '../../components/sectionCard/NewsCard';
import MiddleTitleCard from '../../components/sectionCard/MiddleTitleCard';

import style from './TopStory.module.css';

const TopStory = ({ topPosts }) => {
    
    const _topImage = topPosts[0]?.image.split("upload");
    return (
        <>
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className={style._smd_newCard}>
                            <h2>Top Story</h2>
                            <NewsCard
                                _id={topPosts[0]?._id}
                                slug={topPosts[0]?.slug}
                                title={topPosts[0]?.title}
                                img={`${_topImage[0]}/upload/c_thumb,g_face,h_760,w_1080/${_topImage[1]}`} 
                                description='NBA free agency 2022 live tracker: News, rumors, trades, signings, as the offseason rolls on'
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mx-auto col-lg-3">
                        <h4 className={`${style.nfl_card_title2} mb-4 ${style.smd_border_bottom_Headlines}`}>Headlines</h4>
                        {topPosts && topPosts?.slice(0, 6).map((item, i) => <MiddleTitleCard
                            key={i}
                            _id={item._id}
                            slug={item.slug}
                            title={item.title}
                            name="Scott Wheeler"
                            comment={ item?.comments && item?.comments }
                        />)}
                    </div>
                    <div className="col-12 mx-auto col-lg-3">
                        <h1 className={style._smd_Upcoming_events}>Trending Now</h1>
                        <TopStoryVerticalSlider />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopStory;