import { useState } from 'react';
import NewsCard3 from '../../components/sectionCard/NewsCard3';
import NewsCard4 from '../../components/sectionCard/NewsCard4';
import PlayerTab from './PlayerTab';
import style from './PlayerSection.module.css';


const PlayerSection = ({ posts, players }) => {


    return (
        <div className="container-fluid py-3">
            <h1 className={style.nfl_card_title2}>Player News</h1>
            <div className={style._smd_player_news_main}>
                <div>
                    {   
                        posts && posts.slice(0, 3).map((item, index)=>{
                            return(
                                <NewsCard3
                                    key={ index } 
                                    _id={ item._id }
                                    slug={ item.slug }
                                    title={ item.title }
                                    img={ item.image }
                                    name="John Holinger" 
                                    comment={ item?.comments ? item?.comments: "0" }
                                />
                            )
                        })
                    }
                </div>


                <div>
                    {   
                        posts && posts.slice(3, 5).map((item, index)=>{
                            return(
                                <NewsCard4
                                    key={ index } 
                                    _id={ item._id }
                                    slug={ item.slug }
                                    title={ item.title }
                                    img={ item.image }
                                    name="John Holinger" 
                                    comment={ item?.comments ? item?.comments: "0" }
                                />
                            )
                        })
                    }
                </div>

                {/* <div>

                    <NewsCard4 img="/images/landing_Page/player_news_img2.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" />
                    <NewsCard4 img="/images/landing_Page/player_news_img2.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" />
                </div> */}
                <PlayerTab players={ players } />
            </div>
        </div>
    );
};

export default PlayerSection;