
import React from 'react';
import Layout from '../../src/components/Layout';
import HeaderSection from '../../src/section/HeaderSection';
import PlayerTab from '../../src/section/NewsTap/PlayerTab';
import PravacyDescription from '../../src/section/PravacyDescription';
import TableOFContents from '../../src/section/TableOFContents';

const PrivacPolicy = () => {
    return (
        <Layout navheader={true}>

            <HeaderSection img="/images/podcast/header-card.png" />
            <div className="container-fluid2">
                <div className="row my-2">
                    <div className="col-md-9">
                        <PravacyDescription />
                    </div>
                    <div className="col-md-3">
                        <PlayerTab />
                    </div>
                </div>
            </div>
            <div className="container-fluid2">
                <div className="row">
                    <div className="col-md-12">
                        <TableOFContents />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PrivacPolicy;