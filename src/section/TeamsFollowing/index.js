import Image from "next/image";
import React from "react";
import SearchBar from "../../components/SearchBar";
import TeamsFollowingCard from "../../components/sectionCard/TeamsFollowingCard";
import style from "./TeamsFollowing.module.css";

const TeamsFollowing = ({ title, teams }) => {
  return (
    <>
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
      <div className="mx-1">
        {teams &&
          teams.map((team, index) => {
            return (
              <TeamsFollowingCard
                key={index}
                _id={team._id}
                name={team.name}
                league={team.league}
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

export default TeamsFollowing;
