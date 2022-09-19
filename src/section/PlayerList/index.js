import PlayerCard from "./PlayerCard";
import playerCss from "./Player.module.css";
import Link from "next/link";

const PlayerList = ({ players }) => {
  return (
    <>
      <h6>Players</h6>
      {players.slice(0, 5)?.map((item, i) => (
        <PlayerCard item={item} key={i} />
      ))}
      <Link href="/">
        <a>
          <p className={`text-end my-1 ${playerCss.seeAllPlayer}`}>
            See All Players
          </p>
        </a>
      </Link>
    </>
  );
};

export default PlayerList;
