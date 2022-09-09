import React from 'react';
import Layout from "../../../src/components/Layout";
import NflSingleVideo from '../../../src/section/NflSingleVideo';

const SingleVideo = () => {
    return (
        <Layout>
            <div className="container-fluid2">
                <NflSingleVideo />
            </div>
        </Layout>
    );
};

export default SingleVideo;