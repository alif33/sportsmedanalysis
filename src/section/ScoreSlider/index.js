import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import swiperStyle from './Swiper.module.css';

// import required modules
import { Navigation } from "swiper";
import SwiperSlideCard from "./SwiperSlideCard";

const ScoreSlider = () => {
    return (
        <div className={` smd-scoreSlider-n ${swiperStyle._smd_scoreSlider_n} container-fluid py-2`}>

            <div className={swiperStyle._smd_scoreSlider_date_n}>
                <h3>Sunday</h3>
                <p>3 July 2022</p>
            </div>


            <div className={`${swiperStyle.scoreSlider} d-flex w-100 align-items-center  flex-row gap-md-2   gap-0 gap-md-0`}>

                <div className={swiperStyle._smd_scoreSlider_dropdown}>
                    {/* <select name="" id="" className="_smd_scoreSlider_dropdown_btn">
                        <option value="">NFL SCORE <img src="/images/icon/arrow-down-black.png" alt="" /></option>
                    </select> */}
                    <select name="" id="" className={swiperStyle._smd_scoreSlider_dropdown_btn}>
                        <option value="">NFL SCORE</option>
                        <option value="">NFL SCORE</option>
                        <option value="">NFL SCORE</option>
                        <option value="">NFL SCORE</option>
                        <option value="">NFL SCORE</option>
                    </select>
                </div>

                <Swiper
                    navigation={true}
                    slidesPerView="auto"
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },

                        1400: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    className={swiperStyle.sliderPart}
                >

                    <SwiperSlide>
                        <SwiperSlideCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSlideCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSlideCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSlideCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSlideCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSlideCard />
                    </SwiperSlide>


                    {/* <SwiperSlide>
                        <div className='_smd_nfl_scroe_card'>
                            <div className='_smd_nfl_scroe_card_inner'>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/tex.svg" alt="" />
                                        <p>TEX</p>
                                    </div>
                                    <p className='_tex_num_one'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/bal.svg" alt="" />
                                        <p>BAL</p>
                                    </div>
                                    <p className='_tex_num_two'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <p className='_smd_date'>8th, 0 Outs</p>
                                </div>
                            </div>
                            <div className="_smd_nfl_scroe_card_child2">
                                <img src="/images/landing_Page/squreShape.png" className='_smd_squreShape' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='_smd_nfl_scroe_card'>
                            <div className='_smd_nfl_scroe_card_inner'>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/tex.svg" alt="" />
                                        <p>TEX</p>
                                    </div>
                                    <p className='_tex_num_one'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/bal.svg" alt="" />
                                        <p>BAL</p>
                                    </div>
                                    <p className='_tex_num_two'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <p className='_smd_date'>8th, 0 Outs</p>
                                </div>
                            </div>
                            <div className="_smd_nfl_scroe_card_child2">
                                <img src="/images/landing_Page/squreShape.png" className='_smd_squreShape' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='_smd_nfl_scroe_card'>
                            <div className='_smd_nfl_scroe_card_inner'>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/tex.svg" alt="" />
                                        <p>TEX</p>
                                    </div>
                                    <p className='_tex_num_one'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/bal.svg" alt="" />
                                        <p>BAL</p>
                                    </div>
                                    <p className='_tex_num_two'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <p className='_smd_date'>8th, 0 Outs</p>
                                </div>
                            </div>
                            <div className="_smd_nfl_scroe_card_child2">
                                <img src="/images/landing_Page/squreShape.png" className='_smd_squreShape' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='_smd_nfl_scroe_card'>
                            <div className='_smd_nfl_scroe_card_inner'>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/tex.svg" alt="" />
                                        <p>TEX</p>
                                    </div>
                                    <p className='_tex_num_one'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/bal.svg" alt="" />
                                        <p>BAL</p>
                                    </div>
                                    <p className='_tex_num_two'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <p className='_smd_date'>8th, 0 Outs</p>
                                </div>
                            </div>
                            <div className="_smd_nfl_scroe_card_child2">
                                <img src="/images/landing_Page/squreShape.png" className='_smd_squreShape' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='_smd_nfl_scroe_card'>
                            <div className='_smd_nfl_scroe_card_inner'>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/tex.svg" alt="" />
                                        <p>TEX</p>
                                    </div>
                                    <p className='_tex_num_one'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/bal.svg" alt="" />
                                        <p>BAL</p>
                                    </div>
                                    <p className='_tex_num_two'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <p className='_smd_date'>8th, 0 Outs</p>
                                </div>
                            </div>
                            <div className="_smd_nfl_scroe_card_child2">
                                <img src="/images/landing_Page/squreShape.png" className='_smd_squreShape' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='_smd_nfl_scroe_card'>
                            <div className='_smd_nfl_scroe_card_inner'>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/tex.svg" alt="" />
                                        <p>TEX</p>
                                    </div>
                                    <p className='_tex_num_one'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/bal.svg" alt="" />
                                        <p>BAL</p>
                                    </div>
                                    <p className='_tex_num_two'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <p className='_smd_date'>8th, 0 Outs</p>
                                </div>
                            </div>
                            <div className="_smd_nfl_scroe_card_child2">
                                <img src="/images/landing_Page/squreShape.png" className='_smd_squreShape' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='_smd_nfl_scroe_card'>
                            <div className='_smd_nfl_scroe_card_inner'>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/tex.svg" alt="" />
                                        <p>TEX</p>
                                    </div>
                                    <p className='_tex_num_one'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/bal.svg" alt="" />
                                        <p>BAL</p>
                                    </div>
                                    <p className='_tex_num_two'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <p className='_smd_date'>8th, 0 Outs</p>
                                </div>
                            </div>
                            <div className="_smd_nfl_scroe_card_child2">
                                <img src="/images/landing_Page/squreShape.png" className='_smd_squreShape' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='_smd_nfl_scroe_card'>
                            <div className='_smd_nfl_scroe_card_inner'>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/tex.svg" alt="" />
                                        <p>TEX</p>
                                    </div>
                                    <p className='_tex_num_one'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <div className='d-flex'>
                                        <img src="/images/landing_Page/bal.svg" alt="" />
                                        <p>BAL</p>
                                    </div>
                                    <p className='_tex_num_two'>5</p>
                                </div>
                                <div className='_smd_inner_table'>
                                    <p className='_smd_date'>8th, 0 Outs</p>
                                </div>
                            </div>
                            <div className="_smd_nfl_scroe_card_child2">
                                <img src="/images/landing_Page/squreShape.png" className='_smd_squreShape' alt="" />
                            </div>
                        </div>
                    </SwiperSlide> */}

                </Swiper>
            </div>

        </div>
    );
};

export default ScoreSlider;