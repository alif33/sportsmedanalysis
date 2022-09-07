import React from 'react';
import Layout from '../../src/components/Layout';
import FeaturedPodcasts from '../../src/section/FeaturedPodcasts';
import MoreStoris from '../../src/section/MoreStoris';
import Player from '../../src/section/Player';
import PlayerGallery from '../../src/section/PlayerGallery';
import PlayerVideo from '../../src/section/PlayerVideo';
import TopPlayers from '../../src/section/TopPlayers';

const Players = () => {
    return (
        <Layout>
            <div className="container-fluid2 py-2 pt-3">
                <TopPlayers title="Top Players" />
            </div>
            <div className="container-fluid2 my-2">
                <Player />
            </div>
            <div className="container-fluid2 my-2">
                <MoreStoris title="Lastest News on This Player" />
            </div>
            <PlayerVideo title="Lastest Videos on This Player" />

            <div className="my-2">
                <PlayerGallery title="Player Gallery" />
            </div>
            <div className="my-2 container-fluid2">
                <FeaturedPodcasts title="Featured Podcasts" />
            </div>

        </Layout>
    );
};

export default Players;