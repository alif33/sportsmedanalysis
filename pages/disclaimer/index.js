import React from 'react';
import Layout from '../../src/components/Layout';
import DisclaimerDescription from '../../src/section/DisclaimerDescription';
import HeaderSection from '../../src/section/HeaderSection';

import PlayerTab from '../../src/section/PlayerSection/PlayerTab';

const Disclaimer = () => {
    return (
        <Layout navheader={true}>

            <HeaderSection img="/images/podcast/disclaimer-bg.png" />
            <div className="container-fluid2">
                <div className="row my-2">
                    <div className="col-md-9">
                        <DisclaimerDescription />
                    </div>
                    <div className="col-md-3">
                        <PlayerTab />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Disclaimer;