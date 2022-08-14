import Image from 'next/image';
import React from 'react';
import style from './Swiper.module.css';

const SwiperSlideCard = () => {
    return (
        <div className={`${style._smd_nfl_scroe_card}`}>
            <div className={`${style._smd_nfl_scroe_card_inner}`}>
                <div className={style._smd_inner_table}>
                    <div className='d-flex'>
                        <Image height="13.98" width="15.87" src="/images/landing_Page/tex.svg" alt="" />
                        <p>TEX</p>
                    </div>
                    <p className='_tex_num_one'>5</p>
                </div>
                <div className={style._smd_inner_table}>
                    <div className='d-flex'>
                        <Image height="15.16" width="15" src="/images/landing_Page/bal.svg" alt="" />
                        <p>BAL</p>
                    </div>
                    <p className='_tex_num_two'>5</p>
                </div>
                <div className={style._smd_inner_table}>
                    <p className='_smd_date'>8th, 0 Outs</p>
                </div>
            </div>
            <div className={style._smd_nfl_scroe_card_child2}>
                <Image height="15" width="20" src="/images/landing_Page/squreShape.png" className={style._smd_squreShape} alt="" />
            </div>
        </div>
    );
};

export default SwiperSlideCard;