import React from "react";
import PlayersFollowing from "../../section/PlayersFollowing";

const FollowingPlayers = ({ players }) => {
  return (
    <>
      <div className="container-fluid2">
        <h3 className="mt-3">Player Lists</h3>
      </div>
      <div className="container mb-4">
        <PlayersFollowing title="Following" players={players} />
      </div>
    </>
  );
};

export default FollowingPlayers;
