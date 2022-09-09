import Image from 'next/image';
import React from 'react';
import style from './RelatedVideoCard.module.css';

const RelatedVideoCard = () => {
    return (
        <div className={style.relatedVideoCard}>
            <div>
                <Image width="250" height="200" src="/images/card-img/related.png" alt="" />
            </div>
            <div className="">
                <h4>How Is The Correct
                    Solo Vlogger</h4>
                <p>For beginners who are just..</p>
                <p>150.398 view <ul><li>16 Jan 2022</li> </ul>  </p>
            </div>
        </div>
    );
};

export default RelatedVideoCard;