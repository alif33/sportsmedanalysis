import { imageResize } from "../../../__lib__/helpers/Validator.js";
import Article2 from "../../components/sectionCard/Article2.js";
import style from "./Article.module.css";

const ArticleSection = ({ posts }) => {
  return (
    <div className={style.nfl_sec_four}>
      <div className="nfl_con">
        <div className="row g-2 m-0">
          {posts &&
            posts.slice(0, 4).map((item, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-6">
                  <Article2
                    _id={item._id}
                    slug={item.slug}
                    name="Article"
                    title="Dynasty Values To Target"
                    img={imageResize(item.image, "c_thumb,g_face,h_444,w_646")}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
