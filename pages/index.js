import db from "../utils/db";
import _ from "lodash";
import Post from "../models/Post";
import Player from "../models/Player";
import TopStory from "../src/section/TopStory";
import PlayerSection from "../src/section/PlayerSection";
import TopPicks from "../src/section/TopPicks";
import BettingFantasy from "../src/section/BettingFantasy";
import Fannation from "../src/section/Fannation";
import Layout from "../src/components/Layout";
import Article from "../src/section/Article";
import BorderLine from "../src/components/BorderLine";
import { useSelector } from "react-redux";
import Watch from "../models/Watch";

const LandingPage = ({ posts, topPosts, topVideos, players, topPicks, bettings }) => {
  const { user } = useSelector((state) => state);

  return (
    <div className="_LandingPage">
      <Layout navheader={true}>
        <Article posts={JSON.parse(posts)} />

        <TopStory 
          topPosts={JSON.parse(topPosts)} 
          topVideos={ JSON.parse(topVideos) }
        />

        <div className="container-fluid">
          <BorderLine />
        </div>

        <PlayerSection posts={JSON.parse(posts)} players={players} />

        <div className="container-fluid">
          <BorderLine />
        </div>

        <TopPicks topPicks={JSON.parse(posts)} />
        <BettingFantasy
          title="Betting & Fantasy"
          bettings={JSON.parse(posts)}
        />
        <Fannation recentStories={JSON.parse(posts)} />
      </Layout>
    </div>
  );
};

export default LandingPage;

export async function getStaticProps(context) {
  await db.connect();
  const posts = await Post.find({}, { _comments: 0 })
    .sort({ createdAt: -1 })
    .lean()
    .limit(50);

  const topPosts = await Post.find({}, { _comments: 0 })
    .sort({ views: -1 })
    .lean()
    .limit(50);

  const topVideos = await Watch.find()
    .sort({ "views": -1 })
    .lean()
    .limit(50);

  const players = await Player.find({}, { _comments: 0 })
    .sort({ createdAt: -1 })
    .lean()
    .limit(50);

  const topPicks = await Post.find(
    {
      tags: { $in: ["top_picks"] },
    },
    { _comments: 0 }
  )
    .sort({ createdAt: -1 })
    .lean()
    .limit(50);

  const bettings = await Post.find(
    {
      tags: { $in: ["betting"] },
    },
    { _comments: 0 }
  )
    .sort({ createdAt: -1 })
    .lean()
    .limit(50);

  await db.disconnect();

  return {
    props: {
      posts: JSON.stringify(posts),
      topPosts: JSON.stringify(topPosts),
      topVideos: JSON.stringify(topVideos),
      players: players.map(db.convertDocToObj),
      topPicks: JSON.stringify(topPicks),
      bettings: JSON.stringify(bettings),
    },
    revalidate: 60,
  };
}
