import { useState } from 'react';
import NewsCard4 from '../../components/sectionCard/NewsCard4';
import NewsCard7 from '../../components/sectionCard/NewsCard7';
import PlayerTab from '../PlayerSection/PlayerTab';
import style from './NewsTap.module.css';

const NewsTab = ({ posts, players }) => {

    return (
        <div className={ style.nfl_con }>
            <div className={ style.nfl_sec_two }>
                {
                    posts &&  <div>
                        <NewsCard4
                            _id={ posts[0]._id } 
                            slug={ posts[0].slug }
                            title={ posts[0].title } 
                            img={ posts[0].image }  
                            description="Follow here for signings, trades, rumors and analysis from The Athletic's staff as the" 
                            name="John Holinger" 
                            comment={ posts[0]?.comments? posts[0]?.comments.length: "0" } 
                        />
                    </div>
                }

                <div>
                    {
                      posts && posts.slice(1, 4).map(( item ) => <NewsCard7 
                            _id={ item._id }
                            slug={ item.slug }
                            title={ item.title }
                            description="The Athletic NFL Staff" 
                            img={ item.image }
                        />)
                    }
                </div>

                <PlayerTab players={ players } />
            </div>
        </div>
    );
};

export default NewsTab;