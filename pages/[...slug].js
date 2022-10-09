import React from "react";
import Post from "../models/Post";
import db from "../utils/db";
import Layout from "../src/components/Layout";
import LiveBtn from "../src/components/LiveBtn";
import SingleNews from "../src/section/SingleNews";

const Single = ({ post, posts, topPosts, _comments }) => {
  return (
    <Layout>
      <div className="container">
        <SingleNews
          post={post}
          posts={JSON.parse(posts)}
          topPosts={JSON.parse(topPosts)}
          _comments={JSON.parse(_comments).reverse()}
        />
      </div>
    </Layout>
  );
};

export default Single;

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const rgx = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
  if (!slug || slug.length !== 2 || !rgx.test(slug[1])) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  } else {
    await db.connect();
    const { _doc } = await Post.findById(slug[1]);
    await Post.updateOne(
      { _id: slug[1] },
      {
        $inc: {
          views: 1,
        },
      }
    );

    const {
      _id,
      title,
      image,
      description,
      league,
      playersName,
      views,
      tags,
      comments,
      _comments,
      createdAt,
      updatedAt,
    } = _doc;

    const posts = await Post.find(
      {
        tags: { $in: [...tags] },
      },
      { _comments: 0 }
    )
      .sort({ createdAt: -1 })
      .lean()
      .limit(5);

    const topPosts = await Post.find({}, { _comments: 0 })
      .sort({ views: -1 })
      .lean()
      .limit(5);

    await db.disconnect();

    return {
      props: {
        post: {
          _id: _id.toString(),
          title,
          image,
          description,
          league,
          playersName,
          views,
          tags,
          comments,
          createdAt: createdAt.toString(),
          updatedAt: updatedAt.toString(),
        },
        posts: JSON.stringify(posts),
        topPosts: JSON.stringify(topPosts),
        _comments: JSON.stringify(_comments),
      },
    };
  }
}
