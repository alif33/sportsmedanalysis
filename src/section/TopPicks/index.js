import NewsCard from '../../components/sectionCard/NewsCard';
import NewsCard3 from '../../components/sectionCard/NewsCard3';
import style from './TopPicks.module.css';

const TopPicks = ({ topPicks }) => {

    return (
        <div className="container-fluid py-3">
            <h1 className={style.nfl_card_title2}>Top Picks</h1>
            <div className="row m-0 mt-2">

                <div className="col-lg-7">
                    <NewsCard
                        _id={topPicks[0]._id}
                        slug={topPicks[0]?.slug}
                        title={topPicks[0]?.title}
                        img={topPicks[0]?.image}
                        description='  Our college basketball experts pick the teams that helped themselves the most during the transfer shopping season.'
                    />
                </div>

                <div className="col-lg-5">
                    {topPicks && topPicks.slice(1, 4).map((item, index) => {
                        return (
                            <NewsCard3
                                key={index}
                                _id={item._id}
                                slug={item?.slug}
                                title={item?.title}
                                img={item?.image}
                                description='Our college basketball experts pick the teams that helped themselves the most during the transfer shopping season.'
                                comment={item?.comments ? item.comments : "0"}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default TopPicks;