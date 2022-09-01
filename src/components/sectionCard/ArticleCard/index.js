import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import articleStyle from './Article.module.css';

const ArticleCard = ({ post }) => {
    return (
        <Link href="/">
            <a className={`${articleStyle._smd_article_card} w-100 w-md-25 mx-0 mx-md-1`}>
                <Image height="150" width="240" src="/images/card-img/card-img1.png" alt={post.title} />
                <h4>Article</h4>
            </a>
        </Link>
    );
};

export default ArticleCard;