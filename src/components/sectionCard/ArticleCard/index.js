import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import articleStyle from './Article.module.css';

const ArticleCard = ({ index, post }) => {
    return (
        <Link key={ index } href={`/news/${ post.title }/${ post._id }`}>
            <a className={`${articleStyle._smd_article_card} w-100 w-md-25 mx-0 mx-md-1`}>
                <Image height="150" width="240" src={ post.image } alt={post.title} />
                <h4>Article</h4>
            </a>
        </Link>
    );
};

export default ArticleCard;