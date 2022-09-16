import React from "react";
import NewsCard4 from "../../components/sectionCard/NewsCard4";
import style from "./Featured.module.css";

const Featured = ({ posts }) => {
  return (
    <div>
      <h1
        className={`${style.nfl_card_title2} ${style.smd_border_bottom} mb-4`}
      >
        Featured
      </h1>
      {posts.slice(1, 3)?.map((item, i) => (
        <NewsCard4
          key={i}
          name="John Holinger"
          title={item.title}
          img={item.image}
          comment={item?.comments && item.comments}
          link="#!"
        />
      ))}
    </div>
  );
};

export default Featured;
