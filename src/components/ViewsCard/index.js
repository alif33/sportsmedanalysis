import React from 'react';
import EyeIcon from '../svg/EyeIcon';
import style from './ViewsCard.module.css';
import { FacebookShareButton, LinkedinShareButton, PinterestShareButton, TwitterShareButton } from "react-share";
import { SiFacebook, SiLinkedin, SiPinterest, SiTwitter } from 'react-icons/si';

const ViewsCard = ({ watch }) => {




    return (
        <div className="d-flex justify-content-between align-items-center ">
            <ul className={style.viewsCard}>
                <li><EyeIcon />{watch.views} views | Sep 10, 2022</li>
            </ul>
            <ul className={style.socialLink}>
                <p>Share on :</p>
                <li className={style.sharebtn}><FacebookShareButton url={location.href} >< SiFacebook /> </FacebookShareButton> </li>
                <li className={style.sharebtn}><LinkedinShareButton url={location.href} >< SiLinkedin /> </LinkedinShareButton> </li>
                <li className={style.sharebtn}><PinterestShareButton url={location.href} >< SiPinterest /> </PinterestShareButton> </li>
                <li className={style.sharebtn}><TwitterShareButton url={location.href} >< SiTwitter /> </TwitterShareButton> </li>
            </ul>
        </div>
    );
};

export default ViewsCard;