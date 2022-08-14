import React from 'react'
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import style from './NflSlider.module.css';


const items = [
    <div key={1} className="item" data-value="1">

        <div className={style.nfl_sec_one}>
            <div className={`${style.nfl_sec_one_img} w-100`}>

                <Image height="500" width="900" src="/images/landing_Page/nfl_sec_one_bg.png" alt="" />

            </div>

            <div className={style.nfl_sec_one_overlay}>
                <div className={style.nfl_video_icon}>

                    <Image height="68" width="68" src="/images/landing_Page/video_icon.png" alt="" />
                </div>


                <div>
                    <h3>Rice diversifies NFL</h3>
                    <p>
                        Condoleezza Rice gives the NFL a great opportuinty to <br />
                        increase diversity from the top down.
                    </p>
                </div>
            </div>
        </div>
    </div>,
    <div key={2} className="item" data-value="2">

        <div className={style.nfl_sec_one}>
            <div className={`${style.nfl_sec_one_img} w-100`}>

                <Image height="500" width="900" src="/images/landing_Page/nfl_sec_one_bg.png" alt="" />

            </div>

            <div className={style.nfl_sec_one_overlay}>
                <div className={style.nfl_video_icon}>

                    <Image height="68" width="68" src="/images/landing_Page/video_icon.png" alt="" />
                </div>


                <div>
                    <h3>Rice diversifies NFL</h3>
                    <p>
                        Condoleezza Rice gives the NFL a great opportuinty to <br />
                        increase diversity from the top down.
                    </p>
                </div>
            </div>
        </div>
    </div>,
    <div key={3} className="item" data-value="3">

        <div className={style.nfl_sec_one}>
            <div className={`${style.nfl_sec_one_img} w-100`}>

                <Image height="500" width="900" src="/images/landing_Page/nfl_sec_one_bg.png" alt="" />

            </div>

            <div className={style.nfl_sec_one_overlay}>
                <div className={style.nfl_video_icon}>

                    <Image height="68" width="68" src="/images/landing_Page/video_icon.png" alt="" />
                </div>


                <div>
                    <h3>Rice diversifies NFL</h3>
                    <p>
                        Condoleezza Rice gives the NFL a great opportuinty to <br />
                        increase diversity from the top down.
                    </p>
                </div>
            </div>
        </div>
    </div>,
];


function NFLSlider() {
    return (
        <div className='nfl_slider'>
            <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={3000}
                animationDuration={1000}
                infinite
                touchTracking={false}
                disableDotsControls
                disableButtonsControls
                items={items}
                controlsStrategy="alternate"
            />
        </div>
    )
}

export default NFLSlider