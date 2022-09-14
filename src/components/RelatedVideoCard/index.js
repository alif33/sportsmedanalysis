import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import slugify from 'slugify';
import { Sortern } from '../../../__lib__/helpers/Validator';
import EyeIcon from '../svg/EyeIcon';
import style from './RelatedVideoCard.module.css';

const RelatedVideoCard = ({ item }) => {
    return (
        <Link href={`/watch/${slugify(item.title, "-")}/${item._id}`}>
            <a>
                <div className={style.relatedVideoCard}>
                    <div>
                        <Image width="250" height="200" src={`https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`} alt="" />
                    </div>
                    <div className="">
                        <h4>{ Sortern(item.title, 10) }</h4>
                        <p><EyeIcon />{item.views}<ul><li>16 Jan 2022</li> </ul>  </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default RelatedVideoCard;