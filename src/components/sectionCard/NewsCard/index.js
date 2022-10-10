import Image from "next/image";
import Link from "next/link";
import { imageResize, Sortern } from "../../../../__lib__/helpers/Validator";
import style from "./NewsCard.module.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
const NewsCard = ({ _id, slug, title, img, description }) => {
  console.log("isMobileisMobile", isMobile);
  return (
    <Link href={`/${slug}/${_id}`}>
      <a className={style.news_card}>
        <div className={style._news_card_desk}>
          <Image
            src={
              img
                ? imageResize(img, "c_thumb,g_face,h_930,w_1480")
                : "/images/card-img/card-img2.png"
            }
            alt={title}
            height="465"
            width="880"
          />{" "}
        </div>

        <div className={style._news_card_mobile}>
          <Image
            src={
              img
                ? imageResize(img, "c_thumb,h_460,w_732")
                : "/images/card-img/card-img2.png"
            }
            alt={title}
            height="230"
            width="366"
          />
        </div>
        <h3>{Sortern(title, 15)}</h3>
        <p>{Sortern(description, 30)}</p>
      </a>
    </Link>
  );
};

export default NewsCard;
