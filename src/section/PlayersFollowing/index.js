import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "../../../__lib__/helpers/HttpService";
import SearchBar from "../../components/SearchBar";
import PlayersFollowingCard from "../../components/sectionCard/PlayersFollowingCard";
import style from "./TeamsFollowing.module.css";

const PlayersFollowing = ({ title, search, players }) => {
  // const [players, setPlayers] = useState();
  const { user } = useSelector((state) => state);
  const { __u__ } = user;

  useEffect(() => {
    // getData("/players")
    //   .then(res=>{
    //     if(res)
    //     {
    //       setPlayers(res);
    //     }
    //   })
  }, []);

  return (
    <>
      {search && (
        <div className="d-flex justify-content-between mt-3 mx-1">
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

      <div className="mx-1">
        {players &&
          players.slice(0, 4).map((item, index) => {
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
      </div>

      <div className="d-flex justify-content-between align-items-center mx-1">
        <button className={style.nextPreBtn}>Previous Page</button>
        <button className={style.nextPreBtn}>Next Page</button>
      </div>
    </>
  );
};

export default PlayersFollowing;
