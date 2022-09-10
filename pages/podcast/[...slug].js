import React from 'react';
import Layout from '../../src/components/Layout';
import PodcastVideo from '../../src/section/PodcastVideo';

const PodcastPage = () => {
    return (
        <Layout>
            <div className="container-fluid2">
                <PodcastVideo />
            </div>
        </Layout>
    );
};

export default PodcastPage;