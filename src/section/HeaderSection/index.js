import React from 'react';
import Image from 'next/image';
import headerCss from './Header.module.css';

const HeaderSection = ({ img, title }) => {
    return (
        <div className={headerCss.podcastHeader}>
            {/* <img src="/images/podcast/header-bg.png" alt="" /> */}
            <Image height="400" width="1000" src={img} alt="" />
            {title && <h3>{title}</h3>}
        </div>
    );
};

export default HeaderSection;