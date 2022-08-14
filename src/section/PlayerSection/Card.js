import React from "react";
import style from './PlayerSection.module.css';

const Card = () => {
    return (
        <a href="#!" className='mt-2 d-block'>
            <div className={`${style.nfl_S2_3rd_card} d-flex align-items-center p-1`}>
                <img src="/images/landing_Page/userImg1.png" alt="" />
                <div>
                    <h1 className={style.nfl_card_title1}>ALLEN LAZARD</h1>
                    <p className='mb-0'>
                        Possible suspension has ‘no timetable’ for decision
                    </p>
                </div>
            </div>
        </a>
    );
};

export default Card;