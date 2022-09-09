import React from 'react';
import ClockIcon from '../svg/ClockIcon';
import DownloadIcon from '../svg/DownloadIcon';
import EyeIcon from '../svg/EyeIcon';
import ShareIcon from '../svg/ShareIcon';
import style from './ViewsCard.module.css';

const ViewsCard = ({ watch }) => {
    return (
        <ul className={style.viewsCard}>
            <li><EyeIcon />{ watch.views } views | Sep 10, 2022</li>
            <li><ShareIcon /></li>
        </ul>
    );
};

export default ViewsCard;