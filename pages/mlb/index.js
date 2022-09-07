import { useState } from 'react';
import db from "../../utils/db";
import Post from '../../models/Post';
import Player from '../../models/Player';
import Layout from "../../src/components/Layout";
import NFLSlider from '../../src/components/nlf_Slider/NFLSlider';
import ArticleSection from '../../src/section/ArticleSection';
import Trendings from '../../src/section/Trendings';
import MoreNews from '../../src/section/MoreNews';
import PageNewsSection from '../../src/section/PageNewsSection';
import NewsTab from '../../src/section/NewsTap';
import BorderLine from '../../src/components/BorderLine';

const MLB = ({ posts, players }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className='_nfl'>
      <Layout navheader={true}>
        <NFLSlider />
        <NewsTab
          posts={ posts } 
          players={ players }
        />
        <div className="nfl_con">
          <BorderLine />
        </div>
        <PageNewsSection title="MLB News" />
        <ArticleSection
          posts={posts}
        />
        <Trendings />
        <div className="nfl_con">
          <BorderLine />
        </div>
        <MoreNews posts={posts} />
        <div className="nfl_con">
          <BorderLine />
        </div>
      </Layout>
    </div>
  )
};

export default MLB;


export async function getStaticProps(context) {

  await db.connect();
  const posts = await Post.find({}, { _comments: 0 })
    .sort({"createdAt": -1})
    .lean()
    .limit(50);

  const players = await Player.find()
    .sort({"createdAt": -1})
    .lean()
    .limit(50);

  await db.disconnect();

  return {
    props: {
      posts: posts.map(db.convertDocToObj),
      players: players.map(db.convertDocToObj),
    },
    revalidate: 60,
  };
}
