import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NflTeamItem = () => {
    return (
        <li>
            <Link href="/">
                <a className='nfl_S7_item'>
                    <Image width="20" height="20" src="/images/landing_Page/bill.svg" alt="" /> <span>Bills</span>
                </a></Link>
        </li>
    );
};

export default NflTeamItem;