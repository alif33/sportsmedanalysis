import React from 'react';
import { Toaster } from 'react-hot-toast';
import TopHeading from '../headers/TopHeading';
import Navbar from '../headers/Navbar';
import NavHeader from '../headers/NavHeader';
import SMDFooter from '../SMDFooter';
import MobileFooter from '../../section/MobileFooter';
import style from './Layout.module.css'
import MobileNavbar from '../../section/MobileNavbar';

const Layout = ({ children, navheader }) => {
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
           <div className={style.navbar}>
           <TopHeading />
            <Navbar />
           </div>
           <MobileNavbar/>
            {
                navheader && <NavHeader />
            }
            <main>{children}</main>
            <SMDFooter />
            <MobileFooter/>
        </>
    );
};

export default Layout;