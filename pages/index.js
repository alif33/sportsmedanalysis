import ScoreSlider from "../src/section/ScoreSlider";
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
import { useSelector } from "react-redux";


const LandingPage = ({ posts, topPosts, players, topPicks, bettings }) => {

    const { user } = useSelector(state=>state);
    console.log(user);

    // console.log(JSON.parse(post));
    return (

        <div className="_LandingPage">
            <Layout>

                <Article posts={ JSON.parse(posts) } />

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

                <PlayerSection 
                    posts={ JSON.parse(posts) }
                    players={ players }
                />

                <div className="container-fluid">
                    <BorderLine />
                </div>

                <TopPicks
                    topPicks={ JSON.parse(posts) }
                />
                <BettingFantasy
                    title="Betting & Fantasy"
                    bettings={ JSON.parse(posts) }
                />
                <Fannation
                    recentStories={ JSON.parse(posts).slice(5, 10) }
                />

            </Layout>
        </div>
    );
};

export default LandingPage;


export async function getServerSideProps() {

    await db.connect();
    const posts = await Post.find()
        .sort()
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
            posts: JSON.stringify(posts),
            topPosts: topPosts.map(db.convertDocToObj),
            players: players.map(db.convertDocToObj),
            topPicks: topPicks.map(db.convertDocToObj),
            bettings: bettings.map(db.convertDocToObj),
        },
    };
}

