import Image from "next/image";
import Link from "next/link";
import style from "./NbaHero.module.css";

const NbaHero = ({ posts }) => {
  console.log(posts);
  return (
    <div className={style._smd_nbahero}>
      <div className={style._smd_nbahero_card_main}>
        <Image
          //   src="/images/nba/header-img1.png"
          src={posts[1].image}
          alt=""
          height="418"
          width="500"
        />
        <Link href={`/${posts[1].slug}/${posts[1]._id}`}>
          <a>
            <h2>{posts[1].title.slice(0, 40)}</h2>
          </a>
        </Link>
      </div>
      <div className={style._smd_nbanav_news}>
        <div className={style._smd_nbahero_card}>
          <Image
            // src="/images/nba/header-card-img.png"
            src={posts[2].image}
            alt=""
            height="209"
            width="500"
          />
          <Link href={`/${posts[2].slug}/${posts[2]._id}`}>
            <a>
              <h2>{posts[2].title.slice(0, 40)}</h2>
            </a>
          </Link>
        </div>
        <div className={style._smd_nbahero_card}>
          <Image
            // src="/images/nba/header-card-img1.png"
            src={posts[3].image}
            alt=""
            height="209"
            width="500"
          />
          <Link href={`/${posts[3].slug}/${posts[3]._id}`}>
            <a>
              <h2>{posts[3].title.slice(0, 40)}</h2>
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
