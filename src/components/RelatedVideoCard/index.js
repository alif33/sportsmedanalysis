import Image from 'next/image';
import React from 'react';
import style from './RelatedVideoCard.module.css';

const RelatedVideoCard = ({ item }) => {
    return (
        <div className={style.relatedVideoCard}>
            <div>
                <Image width="250" height="200" src={`https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`} alt="" />
            </div>
            <div className="">
                <h4>{ item.title }</h4>
                <p>{item.views}<ul><li>16 Jan 2022</li> </ul>  </p>
            </div>
        </div>
    );
};

export default RelatedVideoCard;