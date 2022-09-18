import db from "../../utils/db";
import Post from "../../models/Post";
import Player from "../../models/Player";
import Layout from "../../src/components/Layout";
import NflTeam from "../../src/section/NflTeam";
import ProfileCard from "../../src/section/ProfileCard";
import FollowingPlayersCard from "../../src/components/FollowingPlayersCard";
import PostCard from "../../src/components/PostCard";
import PlayerList from "../../src/section/PlayerList";
import NewsListCard from "../../src/components/sectionCard/NewsListCard";
import PostTapIcon from "../../src/components/svg/PostTapIcon";
import LatestNewsIcon from "../../src/components/svg/LatestNewsIcon";
import style from "./Newsfeed.module.css";
import { useState } from "react";
import UserPeple from "../../src/components/svg/UserPepole";
import SearchPlayer from "../../src/components/svg/SearchPlayer";
import ProfileIcon from "../../src/components/svg/ProfileIcon";
import BookmarkSection from "../../src/components/BookmarkSection";
import FollowingPlayers from "../../src/components/FollowingPlayers";

const Newsfeed = ({ posts }) => {
  const [tapList, setTapList] = useState("PostCard");
  const [newsfeedTap, setNewsfeedTap] = useState("posts");

  return (
    <Layout navheader={true}>
      <ul className={` d-lg-none ${style.tapList}`}>
        <li>
          <button
            onClick={() => setTapList("PostCard")}
            className={tapList === "PostCard" && style.active}
          >
            <PostTapIcon />
          </button>
        </li>
        <li>
          <button
            onClick={() => setTapList("NewsListCard")}
            className={tapList === "NewsListCard" && style.active}
          >
            <LatestNewsIcon />
          </button>
        </li>
        <li>
          <button
            onClick={() => setTapList("FollowingPlayersCard")}
            className={tapList === "FollowingPlayersCard" && style.active}
          >
            <UserPeple />
          </button>
        </li>
        <li>
          <button
            onClick={() => setTapList("PlayerList")}
            className={tapList === "PlayerList" && style.active}
          >
            <SearchPlayer />
          </button>
        </li>
        <li>
          <button
            onClick={() => setTapList("ProfileCard")}
            className={tapList === "ProfileCard" && style.active}
          >
            <ProfileIcon />
          </button>
        </li>
      </ul>
      <div className="nfl_con my-2 d-block d-lg-none">
        <div className="row">
          <div className="col-12">
            {tapList === "ProfileCard" && <ProfileCard />}
            {tapList === "FollowingPlayersCard" && <FollowingPlayersCard />}
            {tapList === "PostCard" && (
              <>
                <PostCard />
              </>
            )}
            {tapList === "PlayerList" && <PlayerList />}
            {tapList === "NewsListCard" && <NewsListCard />}
          </div>
        </div>
      </div>
      <div className="nfl_con my-2 d-none d-lg-block">
        <div className="row mt-3 ">
          <div className="col-lg-3">
            <ProfileCard
              newsfeedTap={newsfeedTap}
              setNewsfeedTap={setNewsfeedTap}
            />
            <FollowingPlayersCard />
          </div>
          <div className="col-lg-6">
            <div className={style.newsfeedPosts}>
              {newsfeedTap === "posts" && (
                <>
                  <PostCard />
                  <PostCard />
                  <PostCard />
                </>
              )}
              {newsfeedTap === "following-players" && (
                <>
                  <FollowingPlayers />
                </>
              )}
              {newsfeedTap === "bookmarks" && <BookmarkSection />}
            </div>
          </div>
          <div className="col-lg-3">
            <PlayerList />
            <div className="mt-2">
              <NewsListCard />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="nfl_con my-4">
        <BorderLine />
      </div> */}

      <NflTeam />
    </Layout>
  );
};

export default Newsfeed;

export async function getServerSideProps() {
  // await db.connect();
  // const posts = await Post.find({}, { _comments: 0 }).lean().limit(50);

  // const players = await Player.find().lean().limit(50);

  // await db.disconnect();

  return {
    props: {
      // posts: posts.map(db.convertDocToObj),
      // players: players.map(db.convertDocToObj),
    },
  };
}
