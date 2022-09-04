import React from 'react';
import { Toaster } from 'react-hot-toast';
import TopHeading from '../headers/TopHeading';
import Navbar from '../headers/Navbar';
import NavHeader from '../headers/NavHeader';
import SMDFooter from '../SMDFooter';
import DashboardSidebar from '../DashboardSidebar';

const DashboardLayout = ({ children, navheader, stutas }) => {
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
            <div className="dashboard-section">
                <div className="row">
                    <div className="col-md-3">
                        <DashboardSidebar stutas={stutas} />
                    </div>
                    <div className="col-md-9 ps-0 pe-2">
                        <main className="dashboard-main">{children}</main>
                    </div>
                </div>
            </div>
            <SMDFooter />
        </>
    );
};

export default DashboardLayout;