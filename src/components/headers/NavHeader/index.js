import React from 'react';
import style from './NavHeader.module.css';
import Link from 'next/link';

const NavHeader = () => {
    return (
        <div className={style.nfl_nav}>
            <ul className={style.nfl_nav_ul}>
                <li><Link href="/"><a>SCORES</a></Link></li>
                <li><Link href="/"><a>SCHEDULE</a></Link></li>
                <li><Link href="/"><a>STANDINGS</a></Link></li>
                <li><Link href="/"><a>STATS</a></Link></li>
                <li><Link href="/"><a>INJURIES</a></Link></li>
                <li><Link href="/"><a>TRANSACTIONS</a></Link></li>
                <li><Link href="/"><a>DRAFT TRACKERS</a></Link></li>
                <li><Link href="/"><a>FANNATION</a></Link></li>
                <li><Link href="/"><a>FUTURES</a></Link></li>
            </ul>
        </div>
    );
};

export default NavHeader;