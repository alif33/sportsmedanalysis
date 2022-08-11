import React from 'react';
import Layout from '../../src/components/Layout';
import HeaderSection from '../../src/section/HeaderSection';
import PlayerTab from '../../src/section/NewsTap/PlayerTab';
import TermsDescription from '../../src/section/TermsDescription';

const TermsOfUse = () => {
    return (
        <Layout navheader={true}>

            <HeaderSection img="/images/podcast/terms-of-use-bg.png" />
            <div className="container-fluid2">
                <div className="row my-2">
                    <div className="col-md-9">
                        <TermsDescription />
                    </div>
                    <div className="col-md-3">
                        <PlayerTab />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TermsOfUse;