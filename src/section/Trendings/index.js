import React from "react";
import { imageResize, Sortern } from "../../../__lib__/helpers/Validator";
import NewsCard11 from "../../components/sectionCard/NewsCard11";
import NewsCard7 from "../../components/sectionCard/NewsCard7";
import NewsCard9 from "../../components/sectionCard/NewsCard9";
import style from "./Trendings.module.css";

const Trendings = ({ trendings }) => {
  return (
    <div className="nfl_con">
      <h4 className={`${style.nfl_card_title2} mt-3`}>Trendings</h4>
      <div className={`${style.nfl_sec5_grid} mt-3`}>
        {trendings && (
          <NewsCard11
            _id={trendings[0]._id}
            slug={trendings[0].slug}
            title={trendings[0].title}
            img={trendings[0].image}
            description="  Follow here for signings, trades, rumors and analysis from The Athletic's staff as the"
          />
        )}

        <div>
          {trendings &&
            trendings.slice(1, 4).map((item, index) => {
              return (
                <NewsCard9
                  key={index}
                  _id={item._id}
                  slug={item.slug}
                  title={Sortern(item.title, 10)}
                  description="Scott Wheeler"
                  comment={item?.comments ? item.comments : "0"}
                />
              );
            })}
        </div>

        <div className="position-relative">
          {trendings &&
            trendings
              .slice(4, 7)
              .map((item, index) => (
                <NewsCard7
                  key={index}
                  _id={item._id}
                  slug={item.slug}
                  title={item.title}
                  img={item.image}
                  description="The Athletic NFL Staff"
                />
              ))}
        </div>
        
      </div>
    </div>
  );
};

export default Trendings;
