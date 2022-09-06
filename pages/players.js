import React from 'react';
import Player from '../models/Player';
import Layout from '../src/components/Layout';
import PlayersFollowing from '../src/section/PlayersFollowing';

const Players = ({ players }) => {
    return (
        <Layout navheader={ true }>
            <div className="container-fluid2 mt-3">
                <h3>Player Lists</h3>
            </div>
            <div className="container mb-4">
                <PlayersFollowing title="Players Following" />
            </div>
        </Layout>
    );
};

export default Players;


export async function getStaticProps(context) {

    await db.connect();
    const players = await Player.find({}, { _comments: 0 })
        .sort()
        .lean()
        .limit(50);

    await db.disconnect();


    return {
        props: {
            players: JSON.stringify(players),
        },
        revalidate: 60,
    };
}
