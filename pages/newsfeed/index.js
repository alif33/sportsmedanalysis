import React, { useState } from "react";
import db from "../../utils/db";
import cookie from "cookie";
import Player from "../../models/Player";
import User from "../../models/User";
import Layout from "../../src/components/Layout";
import ProfileCard from "../../src/section/ProfileCard";
import FollowingPlayersCard from "../../src/components/FollowingPlayersCard";
import PostCard from "../../src/components/PostCard";
import PlayerList from "../../src/section/PlayerList";
import NewsListCard from "../../src/components/sectionCard/NewsListCard";
import PostTapIcon from "../../src/components/svg/PostTapIcon";
import LatestNewsIcon from "../../src/components/svg/LatestNewsIcon";
import style from "./Newsfeed.module.css";
import UserPeple from "../../src/components/svg/UserPepole";
import SearchPlayer from "../../src/components/svg/SearchPlayer";
import ProfileIcon from "../../src/components/svg/ProfileIcon";
import BookmarkSection from "../../src/components/BookmarkSection";
import FollowingPlayers from "../../src/components/FollowingPlayers";
import { unsignedToken } from "../../utils/auth";
import Post from "../../models/Post";
import { __Auth } from "../../__lib__/helpers/AuthProvider";

const Newsfeed = ({ info, posts, players, _bookmarks }) => {
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
            { tapList === "ProfileCard" && <ProfileCard /> }
            { tapList === "FollowingPlayersCard" && <FollowingPlayersCard /> }
            { tapList === "PostCard" && (
              <>
                <PostCard />
              </>
            )}
            { tapList === "PlayerList" && <PlayerList /> }
            { tapList === "NewsListCard" && <NewsListCard /> }
          </div>
        </div>
      </div>
      <div className="nfl_con my-2 d-none d-lg-block">
        <div className="row mt-3 ">
          <div className="col-lg-3">
            <ProfileCard
              info={ info }
              _bookmarks={ JSON.parse(_bookmarks) }
              newsfeedTap={newsfeedTap}
              setNewsfeedTap={setNewsfeedTap}
            />
            <FollowingPlayersCard />
          </div>
          <div className="col-lg-6">
            <div className={style.newsfeedPosts}>
              {newsfeedTap === "posts" && (
                <>
                {
                  posts && posts.map((item, index)=>{
                    return(
                      <PostCard 
                        key={index}
                        _id={item._id}
                        item={item.title}
                        _author={item._author}
                        image={item.image}
                        comments={item.comments}
                      />
                    )
                  })
                }

                  {/* <PostCard />
                  <PostCard /> */}
                </>
              )}
              {newsfeedTap === "following-players" && (
                <>
                  <FollowingPlayers players={players} />
                </>
              )}
              {newsfeedTap === "bookmarks" && (
                <BookmarkSection 
                  _bookmarks={JSON.parse(_bookmarks)} 
                />
              )}
            </div>
          </div>
          <div className="col-lg-3">
            <PlayerList players={players} />
            <div className="mt-2">
              <NewsListCard />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Newsfeed;

export const getServerSideProps = __Auth( async(ctx) => {
  await db.connect();
  const { __t__ } = cookie.parse(ctx.req.headers.cookie);
  if (__t__) {
    const { _id } = await unsignedToken(__t__);
    const { fullName, firstName, lastName, userName, email, _bookmarks, tags } = await User.findOne({ _id }, { _comments: 0 })
      .populate(
        "_bookmarks",
        "title slug image description league views comments"
      )
      .lean()
      .limit(50);

    const posts = await Post.find(
      {
        tags: { $in: tags },
      },
      { _comments: 0 }
    )
      .sort({ createdAt: -1 })
      .lean()
      .limit(50);

    const players = await Player.find().lean().limit(50);

    await db.disconnect();
      console.log(posts);
    return {
      props: {
        info: {
          fullName, 
          firstName, 
          lastName,
          userName, 
          email
        },
        // post: post.map(db.convertDocToObj),
        _bookmarks: JSON.stringify(_bookmarks),
        posts: posts.map(db.convertDocToObj),
        players: players.map(db.convertDocToObj)
      },
    };
    // console.log(_bookmarks);
  }
  // if(?.){

  // }
  // console.log(ctx.req.headers.cookie?.__t__);
})
