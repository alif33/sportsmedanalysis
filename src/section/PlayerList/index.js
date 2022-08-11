import PlayerCard from './PlayerCard';
import playerCss from './Player.module.css';
import Link from 'next/link';

const PlayerList = () => {
    return (

        <>
            <h6>Players</h6>
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <Link href="/">
                <a>
                    <p className={`text-end my-1 ${playerCss.seeAllPlayer}`}>See All Players</p>
                </a>
            </Link>
        </>

    );
};

export default PlayerList;