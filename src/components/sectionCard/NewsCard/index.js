import Image from 'next/image';
import Link from 'next/link';
import style from './NewsCard.module.css';

const NewsCard = ({ _id, slug, title, img, description }) => {
    console.log(img);
    return (
        <Link href={`news/${slug}/${_id}`}>
            <a className={style.news_card}>
                <Image src={img ? img : "/images/card-img/card-img2.png"} alt={title} height="340" width="380" />
                <h3>{title}</h3>
                <p>{description}</p>
            </a>
        </Link>
    );
};

export default NewsCard;