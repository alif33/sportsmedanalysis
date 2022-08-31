import Image from 'next/image';
import React from 'react';
import style from './SinglePageComment.module.css'

const SinglePageComment = () => {
    return (
        <div className={style.singlePageComment}>
            <div className={style.commentImage} >
                <Image height="48px" width="48px" src="/images/user/user.png" alt="" />
            </div>
            <div className={style.content} >
                <h4>Flayd Miles <span>2 Days Ago</span></h4>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                </p>
            </div>
        </div>
    );
};

export default SinglePageComment;