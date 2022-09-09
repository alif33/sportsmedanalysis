import React from 'react';
import ClockIcon from '../svg/ClockIcon';
import DownloadIcon from '../svg/DownloadIcon';
import EyeIcon from '../svg/EyeIcon';
import ShareIcon from '../svg/ShareIcon';
import style from './ViewsCard.module.css';

const ViewsCard = () => {
    return (
        <ul className={style.viewsCard}>
                <li><EyeIcon /> 137.897 views</li>
                <li><ClockIcon /> 10 Feb 2022 release</li>
                <li><ShareIcon /> 103 shared</li>
                <li><DownloadIcon /> 295 downloaded</li>
        </ul>
    );
};

export default ViewsCard;