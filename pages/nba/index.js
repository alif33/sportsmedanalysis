import Navbar from '../../src/components/headers/Navbar';
import db from "../../utils/db";
import Post from '../../models/Post';
import Player from '../../models/Player';
import Layout from "../../src/components/Layout";
import NbaHero from '../../src/section/hero/NbaHero';
import BettingFantasy from '../../src/section/BettingFantasy';
import MoreNews from '../../src/section/MoreNews';
import NbaNews from '../../src/section/NbaNews';
import PlayerSection from '../../src/section/PlayerSection';
import TopPicks from '../../src/section/TopPicks';
import NflTeam from '../../src/section/NflTeam';

const NBA = ({ posts, players, topPicks, bettings }) => {

    return (
        <div>
            <Layout navheader={ true }>
              <NbaHero />
              <NbaNews title="NBA News" />
              <TopPicks 
                topPicks={ topPicks }
              />
              <BettingFantasy 
                title="Trendings"
                bettings={ bettings }
              />
              <PlayerSection />
              <MoreNews posts={ posts } />
              <NflTeam />
            </Layout>
        </div>
    );
};

export default NBA;

export async function getServerSideProps() {
  
    await db.connect();
    const posts = await Post.find()
        .lean()
        .limit(50);

    const topPicks = await Post.find({ 
          tags: { $in: [ "top_picks" ] } 
      })
      .lean()
      .limit(50);

    const players = await Player.find()
        .lean()
        .limit(50);

    const bettings = await Post.find({ 
          tags: { $in: [ "betting" ] } 
      })
      .lean()
      .limit(50);

    await db.disconnect();
  
    return {
      props: {
        posts: posts.map(db.convertDocToObj),
        topPicks: topPicks.map(db.convertDocToObj),
        bettings: bettings.map(db.convertDocToObj),
        players: players.map(db.convertDocToObj)
      },
    };
  }
  
