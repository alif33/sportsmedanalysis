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


const LandingPage = ({ posts, players }) => {

    console.log(posts);
    return (

        <div className="_LandingPage">
            <Layout>

                <Article posts={posts} />


                <ScoreSlider />
                <div className="container-fluid">
                    <BorderLine />
                </div>

                <TopStory />

                <div className="container-fluid">
                    <BorderLine />
                </div>

                <PlayerSection players={players} />

                <div className="container-fluid">
                    <BorderLine />
                </div>

                {/* Top Picks */}
                <TopPicks />
                {/* Top Picks */}

                {/* Betting & Fantasy */}

                <BettingFantasy title="Betting & Fantasy" />

                {/* Betting & Fantasy */}

                {/* recent,feature,fannation */}
                <Fannation />
                {/* recent,feature,fannation */}

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

    const players = await Player.find()
        .lean()
        .limit(50);
    await db.disconnect();
    // console.log(posts);

    return {
        props: {
            // adress: ['ismail', 'alif', 'hosen'],
            posts: posts.map(db.convertDocToObj),
            players: players.map(db.convertDocToObj),
            // mlbs,
        },
    };
}

