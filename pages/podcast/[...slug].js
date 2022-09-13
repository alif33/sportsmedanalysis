import React from 'react';
import Podcast from '../../models/Podcast';
import Layout from '../../src/components/Layout';
import PodcastVideo from '../../src/section/PodcastVideo';
import db from '../../utils/db';

const PodcastPage = () => {
    return (
        <Layout>
            <div className="container-fluid2">
                <PodcastVideo />
            </div>
        </Layout>
    );
};

export default PodcastPage;


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
        const podcast = await Podcast.findById(slug[1]);
                    // await Post.updateOne({ _id: slug[1] }, 
                    //     { $inc: {
                    //         "views": 1
                    //     }});
        await db.disconnect();

        console.log(podcast);
    
        // const { _id, title, image, description, league, playersName, views, tags, comments, _comments, createdAt, updatedAt } = _doc;
        
        return {
            props: {
                podcast :  {
                    // _id: _id.toString(),
                    // title, 
                    // image, 
                    // description, 
                    // league, 
                    // playersName, 
                    // views, 
                    // tags,
                    // createdAt: createdAt.toString(),
                    // updatedAt: updatedAt.toString()
                },
            }
        };
    }
}