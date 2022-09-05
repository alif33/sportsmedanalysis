import React from "react";
import MoreNewsCard from "../../components/sectionCard/MoreNewsCard";
import style from "./MoreNews.module.css";

const MoreNews = ({ posts }) => {
  return (
    <div className="nfl_con">
      <div className={style.nfl_S6}>
        <h1 className={style.nfl_card_title2}>More Stories</h1>
        <div className={`${style.nfl_S6_card_main} mt-2 mt-md-3`}>
          { posts.map((item, index) => (
            <MoreNewsCard 
                key={ index } 
                _id={ item._id }
                slug={ item.slug }
                title={ item.title }
                img={ item.image } 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreNews;
