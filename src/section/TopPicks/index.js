import NewsCard from '../../components/sectionCard/NewsCard';
import NewsCard3 from '../../components/sectionCard/NewsCard3';
import style from './TopPicks.module.css';

const TopPicks = ({ topPicks }) => {

    return (
        <div className="container-fluid py-3">
            <h1 className={style.nfl_card_title2}>Top Picks</h1>
            <div className="row m-0 mt-2">
                {
                    topPicks && topPicks.map((item, index)=>{
                        return(
                           <>
                                <div className={`col-lg-${index===0? "7": "5"}`}>
                                    {
                                        index===0 ? <NewsCard 
                                            img="/images/landing_Page/top_picks_img1.png" 
                                            title="  Who profited most from transfer portal? Illinois, Creighton among big winners" 
                                            description='  Our college basketball experts pick the teams that helped themselves the most during the transfer shopping season.' 
                                        />: <NewsCard3 
                                            img="/images/landing_Page/palyer_news_card_img1.png" 
                                            title="Who profited most from transfer portal?"
                                            name="John Holinger" 
                                            comment="541" 
                                            link='#!' 
                                        />
                                    }
                                </div>
                                {/* <div className="col-lg-5">
                                    <NewsCard3 img="/images/landing_Page/palyer_news_card_img1.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" link='#!' />
                                    <NewsCard3 img="/images/landing_Page/palyer_news_card_img1.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" link='#!' />
                                </div> */}
                           </>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default TopPicks;