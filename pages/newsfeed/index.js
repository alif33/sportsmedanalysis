import db from "../../utils/db";
import Post from '../../models/Post';
import Player from '../../models/Player';
import Layout from "../../src/components/Layout";
import NflTeam from "../../src/section/NflTeam";
import ProfileCard from "../../src/section/ProfileCard";
import FollowingPlayersCard from "../../src/components/FollowingPlayersCard";
import PostCard from "../../src/components/PostCard";
import PlayerList from "../../src/section/PlayerList";
import NewsListCard from "../../src/components/sectionCard/NewsListCard";
import BorderLine from "../../src/components/BorderLine";


const Newsfeed = ({ posts }) => {
    return (
        <Layout>


            <div className="nfl_con my-2">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileCard />
                        <FollowingPlayersCard />
                    </div>
                    <div className="col-md-6">
                        <PostCard />
                    </div>
                    <div className="col-md-3">
                        <PlayerList />
                        <div className="mt-2">
                            <NewsListCard />
                        </div>
                    </div>
                </div>
            </div>


            <div className="nfl_con">
               <BorderLine />
            </div>
            <NflTeam />
        </Layout>
    )
}

export default Newsfeed;

export async function getServerSideProps() {

    await db.connect();
    const posts = await Post.find({}, { _comments: 0 })
        .lean()
        .limit(50);

    const players = await Player.find()
        .lean()
        .limit(50);

    await db.disconnect();

    return {
        props: {
            posts: posts.map(db.convertDocToObj),
            players: players.map(db.convertDocToObj)
        },
    };
}