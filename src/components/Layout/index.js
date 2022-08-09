import React from 'react';
import { Toaster } from 'react-hot-toast';
import TopHeading from '../headers/TopHeading';
import Navbar from '../headers/Navbar';
import NavHeader from '../headers/NavHeader';
import SMDFooter from '../SMDFooter';

const Layout = ({ children, navheader }) => {
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <TopHeading />
            <Navbar />
            {
                navheader && <NavHeader />
            }
            <main>{children}</main>
            <SMDFooter />
        </>
    );
};

export default Layout;