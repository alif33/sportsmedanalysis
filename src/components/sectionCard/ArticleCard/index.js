import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import articleStyle from './Article.module.css';

const ArticleCard = ({ index, post }) => {
    return (
        <Link key={index} href={`/news/${post.slug}/${post._id}`}>
            <a>

                <div className={`${articleStyle._smd_article_card} w-100`}>
                    <div className={articleStyle._smd_article_card_img}>
                        <Image
                            height="150"
                            width="240"
                            src={post.image}
                            alt={post.title}

                        // placeholder="blur"
                        />
                    </div>

                    <h4>Article</h4>
                </div>
            </a>
        </Link>
    );
};

export default ArticleCard;