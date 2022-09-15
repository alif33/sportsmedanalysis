import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { imageResize } from '../../../../__lib__/helpers/Validator';
import articleStyle from './Article.module.css';

const ArticleCard = ({ index, post }) => {

    return (
        <div className={`${articleStyle._smd_article_card} w-100 px-2`}>
            <Link key={index} href={`/${post.slug}/${post._id}`}>
                <a>
                    <div className={articleStyle._smd_article_card_img}>
                        <Image
                            height="550"
                            width="740"
                            src={imageResize(post.image, "c_thumb,g_face,h_290,w_630")}
                            alt={ post.title }
                        />
                    </div>
                    <h4>Article</h4>
                </a>
            </Link>
        </div>
    );
};

export default ArticleCard;


// https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/woman.jpg