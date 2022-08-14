import Image from 'next/image';
import style from './NbaHero.module.css';

const NbaHero = () => {
    return (
        <div className={style._smd_nbahero}>
            <div className={style._smd_nbahero_card}>
                <Image src="/images/nba/header-img1.png" alt="" height='
418' width="500" />
                <h2>Five Underrated NBA free
                    agent signings</h2>
            </div>
            <div className={style._smd_nbanav_news} >
                <div className={style._smd_nbahero_card} >
                    <Image src="/images/nba/header-card-img.png" alt="" height='209' width="500" />
                    <h2>Five Underrated NBA free
                        agent signings</h2>
                </div>
                <div className={style._smd_nbahero_card}>
                    <Image src="/images/nba/header-card-img1.png" alt="" height='209' width="500" />
                    <h2>Five Underrated NBA free
                        agent signings</h2>
                </div>
            </div>
            <div className={style._smd_nbanews_list}>
                <ul>
                    <li>
                        <h3
                        >Former Chiefs OL Mitchell Schwartz retires</h3>
                        <p>Scott Wheeler</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NbaHero;