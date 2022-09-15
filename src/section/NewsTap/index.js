import { useState } from "react";
import { imageResize, Sortern } from "../../../__lib__/helpers/Validator";
import NewsCard10 from "../../components/sectionCard/NewsCard10";
import NewsCard7 from "../../components/sectionCard/NewsCard7";
import PlayerTab from "../PlayerSection/PlayerTab";
import style from "./NewsTap.module.css";

const NewsTab = ({ posts, players }) => {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        {posts && (
          <div className="col-lg-5 col-md-6 ">
            <NewsCard10
              _id={posts[0]._id}
              slug={posts[0].slug}
              title={Sortern(posts[0].title, 8)}
              img={imageResize(posts[0].image, "c_thumb,g_face,h_720,w_1060")}
              description="Follow here for signings, trades, rumors and analysis from The Athletic's staff as the"
              name="John Holinger"
              comment={posts[0]?.comments && posts[0]?.comments}
            />
          </div>
        )}

        <div className="col-lg-4 col-md-6 mt-4 mt-md-0 ">
          {posts &&
            posts
              .slice(1, 6)
              .map((item, index) => (
                <NewsCard7
                  key={index}
                  _id={item._id}
                  slug={item.slug}
                  title={Sortern(item.title, 8)}
                  img={item.image}
                  description="The Athletic NFL Staff"
                />
              ))}
        </div>

        <div className="col-lg-3 col-md-6 mx-auto mt-2 mt-lg-0 ">
          <PlayerTab players={players} />
        </div>
      </div>
    </div>
  );
};

export default NewsTab;
