import React from "react";
import Layout from "../../src/components/Layout";
import NflNews from "../../src/section/NflNews";
import BorderLine from "../../src/components/BorderLine";
import MoreStoris from "../../src/section/MoreStoris";
import MostReadTap from "../../src/section/MostReadTap";
import db from "../../utils/db";
import Post from "../../models/Post";
import Watch from "../../models/Watch";

const Newsfeeds = ({ posts, latests, videos }) => {
  return (
    <Layout navheader={true}>
      <div className="container-fluid mt-2">
        <NflNews posts={JSON.parse(posts)} latests={JSON.parse(latests)} />
      </div>
      <div className="container-fluid my-2 d-md-block d-none">
        <BorderLine />
      </div>

      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-7 m-auto">
            <MostReadTap
              posts={JSON.parse(posts)}
              videos={JSON.parse(videos)}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid my-2">
        <MoreStoris title="More Stories" posts={JSON.parse(posts)} />
      </div>
    </Layout>
  );
};

export default Newsfeeds;

export async function getStaticProps(context) {
  await db.connect();

  const topPosts = await Post.find({}, { _comments: 0 })
    .sort({ views: -1 })
    .lean()
    .limit(50);

  const latests = await Post.find({}, { _comments: 0 })
    .sort({ createdAt: -1 })
    .lean()
    .limit(50);

  const topVideos = await Watch.find().sort({ views: -1 }).lean().limit(50);

  await db.disconnect();

  return {
    props: {
      posts: JSON.stringify(topPosts),
      latests: JSON.stringify(latests),
      videos: JSON.stringify(topVideos),
    },
    revalidate: 60,
  };
}
