import React from "react";
import Watch from "../../models/Watch";
import db from "../../utils/db";
import LiveWatchHeader from "../../src/section/LiveWatchHeader";
import Section from "../../src/components/watches/Section";
import Layout from "../../src/components/Layout";

const WatchPage =({ watches, topVideos, nfl, nba, mlb }) => {

    return (
        <Layout>
            <LiveWatchHeader 
                video={ watches[0] }
            />
            {/* <Section
                title="Watch more live"
                live={ true }
            /> */}
            <Section
                title="Top Videos"
                live={ false }
                lists= { topVideos }
            />

            <Section
                title="NFL"
                live={ false }
                lists={ nfl }
            />

            <Section
                title="NBA"
                live={ false }
                lists={ nba }
            />

            <Section
                title="MLB"
                live={ false }
                lists={ mlb }
            />
        </Layout>
    );
};

export default WatchPage;


export async function getStaticProps(context) {

    await db.connect();
    const watches = await Watch.find()
        .sort({"createdAt": -1})
        .lean()
        .limit(50);

    const topVideos = await Watch.find()
        .sort({ "views": -1 })
        .lean()
        .limit(50);

    const nfl = await Watch.find({ league: "NFL" })
        .lean()
        .limit(50);

    const nba = await Watch.find({ league: "NBA" })
        .lean()
        .limit(50);

    const mlb = await Watch.find({ league: "MLB" })
        .lean()
        .limit(50);

    await db.disconnect();

    return {
        props: {
            watches: watches.map(db.convertDocToObj),
            topVideos: topVideos.map(db.convertDocToObj),
            nfl: nfl.map(db.convertDocToObj),
            nba: nba.map(db.convertDocToObj),
            mlb: mlb.map(db.convertDocToObj)
        },
        revalidate: 60
    };
}

