import React from 'react';
import Player from '../../models/Player';
import db from '../../utils/db';
import Layout from '../../src/components/Layout';
import FeaturedPodcasts from '../../src/section/FeaturedPodcasts';
import MoreStoris from '../../src/section/MoreStoris';
import PlayerSection from '../../src/section/Player';
import PlayerGallery from '../../src/section/PlayerGallery';
import PlayerVideo from '../../src/section/PlayerVideo';
import TopPlayers from '../../src/section/TopPlayers';
// import Post from '../../models/Post';

const Players = ({ players, player }) => {
    console.log(player);
    return (
        <Layout>
            <div className="container-fluid2 py-2 pt-3">
                <TopPlayers 
                    title="Top Players" 
                    players={ JSON.parse(players) }
                />
            </div>
            <div className="container-fluid2 my-2">
                <PlayerSection 
                    player={ JSON.parse(player) }
                />
            </div>
            <div className="container-fluid2 my-2">
                <MoreStoris title="Lastest News on This Player" />
            </div>
            <PlayerVideo title="Lastest Videos on This Player" />

            <div className="my-2">
                <PlayerGallery title="Player Gallery" />
            </div>
            <div className="my-2 container-fluid2">
                <FeaturedPodcasts title="Featured Podcasts" />
            </div>

        </Layout>
    );
};

export default Players;


export async function getServerSideProps(context) {
    const { slug } = context.params;
    const rgx = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i
    if(!slug || slug.length !==2 || !rgx.test(slug[1])){
        return {
            redirect: {
                destination: '/404',
            }
        }
    }else{

        await db.connect();

        const players = await Player.find({})
            .sort({ "views": -1 })
            .lean()
            .limit(50);
        const player = await Player.findById(slug[1]);
            await Player.updateOne({ _id: slug[1] }, 
                { $inc: {
                    "views": 1
                }});


        // const posts = await Post.find({
        //         tags: { $in: ["top_picks"] }
        //     }, { _comments: 0 })
        //         .sort({"createdAt": -1})
        //         .lean()
        //         .limit(50);

        await db.disconnect();
    

        console.log(player);
        
        return {
            props: {
                players: JSON.stringify(players),
                player: JSON.stringify(player)

                // post :  {
                //     _id: _id.toString(),
                //     title, 
                //     image, 
                //     description, 
                //     league, 
                //     playersName, 
                //     views, 
                //     tags,
                //     createdAt: createdAt.toString(),
                //     updatedAt: updatedAt.toString()
                // },
                // _comments: JSON.stringify(_comments)
            }
        };
    }
}
