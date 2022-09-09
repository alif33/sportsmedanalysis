import React from "react";
import Link from "next/link";
import style from './Watches.module.css';
import Image from 'next/image'
import slugify from "slugify";

const Card = ({ item }) => {

    return (
        <div>
            <Link href={`/watch/${ item?.slug? item.slug: slugify(item.title, "-") }/${ item._id }`}>
                <a>
                    <div>
                        <div className={style.nfl_s2_img}>
                            <Image height="153" width="274" src={`https://i.ytimg.com/vi/${item.videoId}/mq1.jpg`} alt={ item.title } />
                        </div>
                        <p className={`${style.nfl_para1} ${style._smd_card_desc}`}>
                            Follow here for signings, trades, rumors and analysis from
                        </p>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default Card;