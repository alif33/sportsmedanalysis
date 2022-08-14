import React from 'react';
import style from './PageNews.module.css';
import Image from 'next/image'

const PageNewsSection = ({ title }) => {
    return (
        <div className="nfl_con">
            <div className={style.nfl_sec_three}>

            </div>
            <h4 className={style.nfl_card_title2}>{title}</h4>
            <div className={style.nfl_sec_grid}>

                <div className={style.cardImg}>
                    <a href="#!">
                        <Image width="350" height="300" src="/images/landing_Page/nfl_S3_img.png" alt="" />
                    </a>
                </div>

                <div>
                    <a href="#!">
                        <h4 className={style.nfl_title1}>
                            What happened to Andrew Luck? Our new series goes inside his rise, shocking retirement
                        </h4>
                        <p className={style.nfl_para1}>
                            What happened to Andrew Luck? Our new series goes inside his rise, shocking retirement
                        </p>
                        <p>Scott Wheeler <span style={{ content: 'url(/images/landing_Page/comment.svg)' }} className={style.nfl_comment_num}>377</span></p>
                    </a>
                </div>

                <div className='position-relative'>
                    <div className={style.nfl_sec2_vertical_line}></div>
                    <div className='d-flex'>
                        <h3 className={style.nfl_sec3_title}>Headlines</h3>
                    </div>

                    <ul className={style.nfl_S3__ul}>
                        <li><a href="#!">Former Chiefs OL Mitchell Schwartz retires</a></li>
                        <li><a href="#!">Dan Snyder: Will testify July 28,' no need for subpoena'</a></li>
                        <li><a href="#!">Patriots trade WR N'Keal Harry to Bears</a></li>
                        <li><a href="#!">Patriots trade WR N'Keal Harry to Bears</a></li>
                        <li><a href="#!">Texans to wear 'Battle Red' helmets in Week 9 vs. Eagles</a></li>
                        <li><a href="#!">Patriots trade WR N'Keal Harry to Bears</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default PageNewsSection;