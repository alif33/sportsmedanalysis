import Image from 'next/image';
import React from 'react';
import PostComment from '../../components/PostComment';
import style from './SingleNews.module.css';

const SingleNews = () => {
    return (
        <>
            <ul className={style.newsCateHour}>
                <li>Football</li>
                <li>2 Hours ago</li>
            </ul>
            <h1 className={style.title}>What happened to Andrew Luck? Our new series goes inside his rise, shocking retirement</h1>
            <div className={style.postMaker}>
                <Image height="54" width="43" src="/images/user/user.png" alt="" />
                <h4>Cameron Williamson</h4>

            </div>
            <ul className={style.likeCommentShare}>
                <li><Image height="18.73" width="22.47" src="/images/icon/favorite.png" alt="" /> <span>521K</span></li>
                <li><Image height="18.73" width="22.47" src="/images/icon/commnet2.png" alt="" /> <span>521K</span></li>
                <li><Image height="18.73" width="22.47" src="/images/icon/share.png" alt="" /> <span>521K</span></li>
            </ul>
            <div className={style.postImage}>
                <Image height="593" width="1143" src="/images/post/bg-img.png" alt="" />
            </div>
            <div className={style.descripton}>
                <p>
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                    Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic innovation via workplace diversity and empowerment.
                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. content in real-time will have multiple touchpoints for offshoring.
                    Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information
                    <br />
                    <br />

                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    <br />
                    <br />

                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

                </p>
            </div>
            <PostComment />

        </>
    );
};

export default SingleNews;