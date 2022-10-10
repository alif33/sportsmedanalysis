import Image from "next/image";
import Link from "next/link";
import { imageResize, Sortern } from "../../../../__lib__/helpers/Validator";
import style from "./NewsCard.module.css";

const NewsCard = ({ _id, slug, title, img, description }) => {
  console.log(img);
  return (
    <Link href={`/${slug}/${_id}`}>
      <a className={style.news_card}>
        <Image
          src={
            img
              ? imageResize(img, "c_thumb,g_face,h_930,w_1480")
              : "/images/card-img/card-img2.png"
          }
          alt={title}
          height="900"
          width="880"
        />
        <h3>{Sortern(title, 15)}</h3>
        <p>{Sortern(description, 30)}</p>
      </a>
    </Link>
  );
};

export default NewsCard;
