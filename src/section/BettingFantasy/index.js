import React from 'react';
import NewsCard6 from '../../components/sectionCard/NewsCard6';
import style from './Betting.module.css';

const BettingFantasy = ({ title, bettings }) => {
    return (
        <div className="container-fluid py-2" style={{ background: '#000' }}>

            <h1 className={`${style.nfl_card_title2} text-white bf_title mb-4`} >{title}</h1>

            <div className={style._smd_bf_grid_main}>
                {
                    bettings && bettings.map((item, index)=>{
                        return(
                            <NewsCard6 
                                key={ index } 
                                _id={ item._id }
                                slug={ item.slug }
                                title="Betting" 
                                img={ item.image } 
                                description=" Who profited most from transfer portal?" 
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BettingFantasy;