import { useState } from 'react';
import NewsCard3 from '../../components/sectionCard/NewsCard3';
import NewsCard4 from '../../components/sectionCard/NewsCard4';
import PlayerTab from './PlayerTab';
import style from './PlayerSection.module.css';


const PlayerSection = ({ posts, players }) => {


    return (
        <div className="container-fluid py-3">
            <h1 className={style.nfl_card_title2}>Player News</h1>
            <div className="row mt-2">

                <div className="col-12 col-md-6 col-lg-5">
                    {
                        posts && posts.slice(0, 4).map((item, index) => {
                            return (
                                <NewsCard3
                                    key={index}
                                    _id={item._id}
                                    slug={item.slug}
                                    title={item.title}
                                    img={item.image}
                                    name="John Holinger"
                                    comment={item?.comments ? item?.comments : "0"}
                                />
                            )
                        })
                    }
                </div>


                <div className="col-12 col-md-6 col-lg-4">
                    {
                        posts && posts.slice(3, 5).map((item, index) => {
                            return (
                                <NewsCard4
                                    key={index}
                                    _id={item._id}
                                    slug={item.slug}
                                    title={item.title}
                                    img={item.image}
                                    name="John Holinger"
                                    comment={item?.comments ? item?.comments : "0"}
                                />
                            )
                        })
                    }
                </div>
                <div className="col-12 col-md-6  mx-auto col-lg-3">
                    <PlayerTab players={players} />
                </div>
            </div>
        </div>
    );
};

export default PlayerSection;