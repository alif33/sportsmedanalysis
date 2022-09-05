import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Mousewheel, Navigation } from "swiper";
import SliderCard from "./SliderCard";
import style from "./TopStorySliderCss.module.css";

function TopStoryVerticalSlider() {
    return (
        <div className="position-relative">

            <Swiper
                direction={"vertical"}
                slidesPerView={5}
                spaceBetween={30}
                navigation={true}
                mousewheel={false}
                modules={[Mousewheel, Navigation]}
                className="vertical_slider"
            >
                <div className={`${style.v_s_div} ${style.v_s_top}`}></div>
                <SwiperSlide>
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard />
                </SwiperSlide>

                <div className={`${style.v_s_div} ${style.v_s_bottom}`}></div>
            </Swiper>
        </div>
    )
}

export default TopStoryVerticalSlider