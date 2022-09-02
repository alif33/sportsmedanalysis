import React from 'react';
import Layout from '../../src/components/Layout';
import NflNews from '../../src/section/NflNews';
import BorderLine from '../../src/components/BorderLine';
import MoreStoris from '../../src/section/MoreStoris';
import MostReadTap from '../../src/section/MostReadTap';

const Newsfeeds = () => {
    return (
        <Layout>
            <div className="container-fluid mt-2">
                <NflNews />
            </div>
            <div className="container-fluid my-2">
                <BorderLine />
            </div>
            <div className="container-fluid my-2">
                <MoreStoris title="More Stories" />
            </div>
            <div className="container-fluid my-2">
                <div className="row">
                    <div className="col-md-7 m-auto">
                        <MostReadTap />
                    </div>
                </div>
            </div>
            <div className="container-fluid my-2">
                <MoreStoris title="More Stories" />
            </div>

        </Layout>
    );
};

export default Newsfeeds;