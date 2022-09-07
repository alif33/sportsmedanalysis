import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import PostComment from '../../components/PostComment';
import SimilarNews from '../../components/SimiliarNews';
import SinglePageComment from '../../components/SinglePageComment';
import style from './SingleNews.module.css';

const SingleNews = ({ post, _comments }) => {
    const [comments, _setComments] = useState();

    useEffect(() => {
        _setComments(_comments)
    }, [])
    return (
        <>
            <ul className={style.newsCateHour}>
                <li>{post.league}</li>
                <li>2 Hours ago</li>
            </ul>

            <h1 className={style.title}>{post.title}</h1>
            <div className={style.postMaker}>
                <Image height="54" width="43" src={post.image} alt={post.title} />
                <h4>Cameron Williamson</h4>

            </div>

            <ul className={style.likeCommentShare}>
                <li><Image height="18.73" width="22.47" src="/images/icon/favorite.png" alt="" /> <span>521K</span></li>
                <li><Image height="18.73" width="22.47" src="/images/icon/commnet2.png" alt="" /> <span>521K</span></li>
                <li><Image height="18.73" width="22.47" src="/images/icon/share.png" alt="" /> <span>521K</span></li>

                <li className="d-md-block d-none"><Image height="20" width="20" src="/images/icon/facebook-share-icon.png" alt="" /> </li>
                <li className="d-md-none d-block"><Image height="10" width="9" src="/images/icon/facebook-share-icon.png" alt="" /> </li>
 
                <li className="d-md-block d-none"><Image height="20" width="20" src="/images/icon/instagram-share-icon.png" alt="" /> </li>
                <li className="d-md-none d-block"><Image height="10" width="9" src="/images/icon/instagram-share-icon.png" alt="" /> </li>

                <li className="d-md-block d-none"><Image height="20" width="20" src="/images/icon/twitter-share-icon.png" alt="" /> </li>
                <li className="d-md-none d-block"><Image height="10" width="9" src="/images/icon/twitter-share-icon.png" alt="" /> </li>

            </ul>
            <div className={style.postImage}>
                <Image height="593" width="1143" src={post.image} alt={post.title} />
            </div>
            <div className={style.descripton}>
                <p>
                    {post.description}
                </p>
            </div>
            <PostComment
                _id={post._id}
                _setComments={_setComments}
            />
            {
                comments && comments.reverse().map((item, index) => <SinglePageComment
                    key={index}
                    fullName={item.name}
                    comment={item.comment}
                />)
            }
            <SimilarNews />
        </>
    );
};

export default SingleNews;