import Image from "next/image";
import db from "../../utils/db";
import Podcast from "../../models/Podcast";
import PodcastCard from "../../src/components/sectionCard/PodcastCard";
import Layout from "../../src/components/Layout";
import HeaderSection from "../../src/section/HeaderSection";
import FeaturedPodcast from "../../src/section/FeaturedPodcast";


const PodcastPage = ({ podcasts }) => {
    return (
        <Layout>
        <HeaderSection img="/images/podcast/header-bg.png" title="Sports Meds Analytics Podcasts" />
        <FeaturedPodcast />

        <div className="podcast-cards">
            <div className="container-fluid">
                <div className="row">
                    {
                        podcasts && podcasts.map((item, index)=>{
                            return(
                                <PodcastCard 
                                    key={ index }
                                    item={ item }
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
            
        </Layout>
    );
};

export default PodcastPage;


export async function getStaticProps(context) {

    await db.connect();
    const podcasts = await Podcast.find()
        .sort({"createdAt": -1})
        .lean()
        .limit(50);

    await db.disconnect();

    return {
        props: {
            podcasts: podcasts.map(db.convertDocToObj)
        },
        revalidate: 60
    };
}