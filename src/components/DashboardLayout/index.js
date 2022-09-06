import React from 'react';
import { Toaster } from 'react-hot-toast';
import TopHeading from '../headers/TopHeading';
import Navbar from '../headers/Navbar';
import NavHeader from '../headers/NavHeader';
import SMDFooter from '../SMDFooter';
import DashboardSidebar from '../DashboardSidebar';
import MobileFooter from '../../section/MobileFooter';
import MobileNavbar from '../../section/MobileNavbar';
import style from '../Layout/Layout.module.css';

const DashboardLayout = ({ children, navheader, stutas }) => {
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
            <MobileNavbar />
            {
                navheader && <NavHeader />
            }
            <div className="dashboard-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 d-md-block d-none">
                            <DashboardSidebar stutas={stutas} />
                        </div>
                        <div className="col-md-9 col-12 ps-md-0 pe-md-2 ">
                            <main className="dashboard-main">{children}</main>
                        </div>
                    </div>
                </div>
            </div>
            <SMDFooter />
            <MobileFooter />
        </>
    );
};

export default DashboardLayout;