import React from 'react';
import Post from "../../models/Post";
import db from "../../utils/db";
import Layout from '../../src/components/Layout';
import LiveBtn from '../../src/components/LiveBtn';
import SingleNews from '../../src/section/SingleNews';

const Single = ({ post }) => {
    return (
        <Layout>
            <div className="container-fluid my-2">
                <LiveBtn name="live" />
            </div>
            <div className="container">
                <SingleNews />
            </div>
        </Layout>
    );
};

export default Single;






// import { useEffect } from "react";


// const News = ({ post }) => {

//     useEffect(()=>{

//     }, [])
//     return (
//         <>
//             <h1>This is the most important news</h1>
//         </>
//     )
// }

// export default News;



export async function getServerSideProps(context) {
    const { slug } = context.params;

    await db.connect();
    const { _doc } = await Post.findById(slug[1]);
                await Post.updateOne({ _id: slug[1] }, 
                    { $inc: {
                        "views": 1
                    }});
    await db.disconnect();
    
    return {
        props: {

            post :  {
                ..._doc,
                _id: _doc._id.toString(),
                createdAt: _doc.createdAt.toString(),
                updatedAt: _doc.updatedAt.toString()
            }
        }

    };
}

