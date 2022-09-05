import React from 'react';
import Layout from '../../src/components/Layout';
import FeaturedPodcasts from '../../src/section/FeaturedPodcasts';
import MoreStoris from '../../src/section/MoreStoris';
import PlayerGallery from '../../src/section/PlayerGallery';
import PlayerVideo from '../../src/section/PlayerVideo';
import Teams from '../../src/section/Teams';
import TopPlayers from '../../src/section/TopPlayers';

const TeamsPage = () => {
    return (
        <Layout>
            <div className="container-fluid2 my-2">
                <TopPlayers title="Top Teams" />
            </div>
            <div className="container-fluid2 my-2">
                <Teams />
            </div>
            <div className="container-fluid2 my-2">
                <MoreStoris title="Lastest News on This Team" />
            </div>
            <PlayerVideo title="Lastest Videos on This Team" />

            <div className="my-2">
                <PlayerGallery title="Team Gallery" />
            </div>
            <div className="my-2 container-fluid2">
                <FeaturedPodcasts title="Featured Podcasts" />
            </div>

        </Layout>
    );
};

export default TeamsPage;