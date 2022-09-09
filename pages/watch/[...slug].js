import React from 'react';
import Watch from "../../models/Watch";
import db from "../../utils/db";
import Layout from '../../src/components/Layout';


const WatchView = ({ watch }) => {
    return (
        <Layout>
            <h1></h1>
        </Layout>
    );
};

export default WatchView;

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
        await db.disconnect();
            
        return {
            props: {
                watch: JSON.stringify(watch)
            }
        };
    }
}



