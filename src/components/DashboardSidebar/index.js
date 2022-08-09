import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DashboardSidebar = () => {
    return (
        <div className="bg-black _smd_dashboard-sidebar h-100">
            <h4>Account Links</h4>
            <ul className="sidebar-link">
                <li className="sidebar-navlink active">
                    <Link href="/dashboard/profile-dashboard"><a><Image height="22" width="18" src="/images/icon/user.png" alt="" /> <h4>My Account</h4></a></Link>
                </li>
                <li className="sidebar-navlink">
                    <Link href="/dashboard/profile-dashboard"><a><Image height="20" width="20" src="/images/icon/message.png" alt="" /> <h4>Email Preferences</h4></a></Link>
                </li>
            </ul>
        </div>
    );
};

export default DashboardSidebar;