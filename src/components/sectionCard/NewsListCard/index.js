import Image from 'next/image';
import NewsListCardCss from './NewsListCardCss.module.css';

const NewsListCard = () => {
    return (
        <div className={NewsListCardCss.card} >
            <h6>News</h6>
            <ul className="mt-1">
                <li><i><Image height="15" width="16" src="/images/icon/speaker.png" alt="" /></i> <p>The only mistake Javier made all game ended up being the difference</p> </li>
                <li><i><Image height="15" width="16" src="/images/icon/speaker.png" alt="" /></i> <p>The only mistake Javier made all game ended up being the difference</p> </li>
            </ul>
        </div>
    );
};

export default NewsListCard;