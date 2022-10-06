import React from "react";
import PlayersFollowingCard2 from "../../components/sectionCard/PlayersFollowingCard2";
import style from "./TeamsFollowing.module.css";

const PlayersFollowing2 = ({ players }) => {
  return (
    <>
      {players &&
        players.slice(0, 3).map((item, index) => {
          return (
            <PlayersFollowingCard2
              key={index}
              _id={item._id}
              firstName={item.firstName}
              lastName={item.lastName}
              league={item.league}
              img={item.image}
            />
          );
        })}
    </>
  );
};

export default PlayersFollowing2;
