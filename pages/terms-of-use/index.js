import React from 'react';
import Player from '../../models/Player';
import Layout from '../../src/components/Layout';
import HeaderSection from '../../src/section/HeaderSection';
import PlayerTab from '../../src/section/PlayerSection/PlayerTab';
import TermsDescription from '../../src/section/TermsDescription';
import db from '../../utils/db';

const TermsOfUse = ({ players }) => {
    return (
        <Layout navheader={true}>

            <HeaderSection img="/images/podcast/terms-of-use-bg.png" />
            <div className="container-fluid2">
                <div className="row my-2">
                    <div className="col-md-9">
                        <TermsDescription />
                    </div>
                    <div className="col-md-3 d-md-block d-none">
                        <PlayerTab 
                            players={ JSON.parse(players) }
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TermsOfUse;


export async function getStaticProps(context) {

    await db.connect();

    const players = await Player.find({}, { _comments: 0 })
        .sort({"createdAt": -1})
        .lean()
        .limit(50);
    await db.disconnect();

    return {
        props: {
            players: JSON.stringify(players)
        },
        revalidate: 60,
    };
}

