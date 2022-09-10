import React from 'react';
import Watch from "../../models/Watch";
import db from "../../utils/db";
import Layout from '../../src/components/Layout';
import NflSingleVideo from '../../src/section/NflSingleVideo';


const SingleVideo = ({ watch, watches }) => {
    return (
        <Layout>
            <div className="container-fluid2">
                <NflSingleVideo 
                    watch={ JSON.parse(watch) }
                    watches={ JSON.parse(watches) }
                />
            </div>
        </Layout>
    );
};

export default SingleVideo;



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
        const watch = await Watch.findById(slug[1]);
                    await Watch.updateOne({ _id: slug[1] }, 
                        { $inc: {
                            "views": 1
                        }});

        const watches = await Watch.find({
            league: watch.league
        });

        await db.disconnect();
            
        return {
            props: {
                watches: JSON.stringify(watches),
                watch: JSON.stringify(watch)
            }
        };
    }
}



