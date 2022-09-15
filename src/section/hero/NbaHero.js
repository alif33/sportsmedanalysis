import Image from "next/image";
import Link from "next/link";
import { imageResize, Sortern } from "../../../__lib__/helpers/Validator";
import style from "./NbaHero.module.css";

const NbaHero = ({ posts }) => {
  console.log(posts);
  // const _image = posts[1].image.split("upload");
  const _image2 = posts[2].image.split("upload");
  const _image3 = posts[3].image.split("upload");

  return (
    <div className={style._smd_nbahero}>
      <div className={style._smd_nbahero_card_main}>
        <Image
          //   src="/images/nba/header-img1.png"
          src={imageResize(posts[5].image, "c_thumb,g_face,h_844,w_1000")}
          alt=""
          height="418"
          width="500"
        />
        <Link href={`/${posts[1].slug}/${posts[1]._id}`}>
          <a>
            <h2>{Sortern(posts[1].title, 6)}</h2>
          </a>
        </Link>
      </div>
      <div className={style._smd_nbanav_news}>
        <div className={style._smd_nbahero_card}>
          <Image
            // src="/images/nba/header-card-img.png"
            src={imageResize(posts[6].image, "c_thumb,g_face,h_416,w_1000")}
            alt=""
            height="209"
            width="500"
          />
          <Link href={`/${posts[6].slug}/${posts[6]._id}`}>
            <a>
              <h2>{Sortern(posts[6].title, 6)}</h2>
            </a>
          </Link>
        </div>
        <div className={style._smd_nbahero_card}>
          <Image
            // src="/images/nba/header-card-img1.png"
            src={imageResize(posts[2].image, "c_thumb,g_face,h_416,w_1000")}
            alt=""
            height="209"
            width="500"
          />
          <Link href={`/${posts[2].slug}/${posts[2]._id}`}>
            <a>
              <h2>{Sortern(posts[2].title, 6)}</h2>
            </a>
          </Link>
        </div>
      </div>
      <div className={style._smd_nbanews_list}>
        <ul>
          {posts.slice(0, 6)?.map((item, i) => (
            <li key={i}>
              <Link href={`/${item.slug}/${item._id}`}>
                <a>
                  <h3>{item.title.slice(0, 30)}</h3>
                </a>
              </Link>
              <p>{item.league}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NbaHero;
