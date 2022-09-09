import Image from 'next/image';
import React from 'react';
import ShareIcon from '../svg/ShareIcon';
import style from './SubscribeCard.module.css'

const SubscribeCard = () => {
    return (
        <div className={style.subsribeCard}>
            <div className={style.userImage}>
                <div className={style.userpic}>
                    <Image width="100" height="100" src="/images/user/user.png" alt="" />
                </div>
                <div className={style.name}>
                    <h3>Cinema Harris</h3>
                    <p>129K Subscriber</p>
                </div>
            </div>
            <div className={style.subsribeBtnSide}>
                <p><Image width="20" height="20" src="/images/watch/like-btn.png" alt="" />1,342</p>
                <p><Image width="20" height="20" src="/images/watch/unlike-btn.png" alt="" />1,342</p>
                <p><ShareIcon /></p>
                <button>
                    <Image width="14" height="16" src="/images/watch/subscribe.png" alt="" />
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default SubscribeCard;