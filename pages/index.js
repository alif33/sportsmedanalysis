import Navbar from "../src/components/headers/Navbar";
import TopHeading from "../src/components/headers/TopHeading";
import ScoreSlider from "../src/section/ScoreSlider";
import ArticleCard from "../src/components/sectionCard/ArticleCard";
import SMDFooter from "../src/components/SMDFooter";
import db from "../utils/db";
import _ from "lodash";
import Post from "../models/Post";
import Player from "../models/Player";
import TopStory from "../src/section/TopStory";
import PlayerSection from "../src/section/PlayerSection";
import TopPicks from "../src/section/TopPicks";
import BettingFantasy from "../src/section/BettingFantasy";
import RecentStories from "../src/section/RecentStories";
import Featured from "../src/section/Featured";
import Fannation from "../src/section/Fannation";
import Layout from "../src/components/Layout";
import Article from "../src/section/Article";
import BorderLine from "../src/components/BorderLine";


const LandingPage = ({ posts, topPosts, players, topPicks, bettings }) => {

    // console.log(posts);
    return (

        <div className="_LandingPage">
            <Layout>

                <Article posts={posts} />




                <ScoreSlider />
                <div className="container-fluid">
                    <BorderLine />
                </div>

                <TopStory
                    topPosts={topPosts}
                />

                <div className="container-fluid">
                    <BorderLine />
                </div>

                <PlayerSection players={players} />

                <div className="container-fluid">
                    <BorderLine />
                </div>

                <TopPicks
                    topPicks={topPicks}
                />
                <BettingFantasy
                    title="Betting & Fantasy"
                    bettings={bettings}
                />
                <Fannation
                    recentStories={posts.slice(5, 10)}
                />

            </Layout>
        </div>
    );
};

export default LandingPage;


export async function getServerSideProps() {

    await db.connect();
    const posts = await Post.find()
        .lean()
        .limit(50);

    const topPosts = await Post.find()
        .sort({ "views": -1 })
        .lean()
        .limit(50);

    const players = await Player.find()
        .lean()
        .limit(50);

    const topPicks = await Post.find({
        tags: { $in: ["top_picks"] }
    })
        .lean()
        .limit(50);

    const bettings = await Post.find({
        tags: { $in: ["betting"] }
    })
        .lean()
        .limit(50);

    await db.disconnect();


    console.log(topPosts);
    return {
        props: {
            // adress: ['ismail', 'alif', 'hosen'],
            posts: posts.map(db.convertDocToObj),
            topPosts: topPosts.map(db.convertDocToObj),
            players: players.map(db.convertDocToObj),
            topPicks: topPicks.map(db.convertDocToObj),
            bettings: bettings.map(db.convertDocToObj),
            // mlbs,
        },
    };
}

