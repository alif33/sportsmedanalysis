import Image from "next/image";
import React from "react";
import SearchBar from "../../components/SearchBar";
import PlayersFollowingCard from "../../components/sectionCard/PlayersFollowingCard";
import style from "./TeamsFollowing.module.css";

const PlayersFollowing = ({ title, players, search }) => {
  
  return (
    <>
      {search && (
        <div className="d-flex justify-content-between mt-3">
          <h2 className={style.teamsFollowingTitle}>{title}</h2>
          <div className={style.TeamsFollowingSort}>
            <SearchBar />
            <h6>Sort By Latest</h6>
            <Image
              width="20"
              height="17"
              src="/images/icon/arrows-down-up.png"
              alt=""
            />
          </div>
        </div>
      )}
      {players &&
        players.slice(0, 3).map((item, index) => {
          return (
            <PlayersFollowingCard
              key={index}
              _id={item._id}
              firstName={item.firstName}
              lastName={item.lastName}
              league={item.league}
              img={item.image}
            />
          );
        })}
      {/* <PlayersFollowingCard /> */}

      <div className="d-flex justify-content-between align-items-center">
        <button className={style.nextPreBtn}>Previous Page</button>
        <button className={style.nextPreBtn}>Next Page</button>
      </div>
    </>
  );
};

export default PlayersFollowing;
