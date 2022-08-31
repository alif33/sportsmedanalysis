import React from 'react';
import Layout from '../../src/components/Layout';
import LiveBtn from '../../src/components/LiveBtn';
import SingleNews from '../../src/section/SingleNews';

const Single = () => {
    return (
        <Layout>
            <div className="container-fluid my-2">
                <LiveBtn name="live" />
            </div>
            <div className="container">
                <SingleNews />
            </div>
        </Layout>
    );
};

export default Single;