import Image from "next/image";
import PodcastCard from "../../src/components/sectionCard/PodcastCard";
import Layout from "../../src/components/Layout";
import HeaderSection from "../../src/section/HeaderSection";
import FeaturedPodcast from "../../src/section/FeaturedPodcast";

const PodcastPage = () => {
    return (
        <Layout>
           <HeaderSection img="/images/podcast/header-bg.png" title="Sports Meds Analytics Podcasts" />


         <FeaturedPodcast />

        <div className="podcast-cards">
            <div className="container-fluid">
                <div className="row">
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                </div>
            </div>
        </div>
            
        </Layout>
    );
};

export default PodcastPage;