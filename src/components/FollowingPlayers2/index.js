import React from "react";
import PlayersFollowing2 from "../../section/PlayersFollowing2";

const FollowingPlayers2 = ({ players }) => {
  return (
    <>
      <div className="container-fluid2">
        <h3 className="mt-3">Player Lists</h3>
      </div>
      <div className="container mb-4 mx-2">
        <PlayersFollowing2 title="Following" players={players} />
      </div>
    </>
  );
};

export default FollowingPlayers2;
