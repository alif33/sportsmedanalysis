import React from "react";
import Player from "../../../models/Player";
import db from "../../../utils/db";
import PlayersFollowing from "../../section/PlayersFollowing";

const FollowingPlayers = ({ players }) => {
  return (
    <>
      <div className="container-fluid2">
        <h3 className="mt-3">Player Lists</h3>
      </div>
      <div className="container mb-4">
        <PlayersFollowing title="Following" players={JSON.parse(players)} />
      </div>
    </>
  );
};

export default FollowingPlayers;

export async function getStaticProps(context) {
  await db.connect();
  const players = await Player.find({}).sort().lean().limit(50);

  await db.disconnect();

  return {
    props: {
      players: JSON.stringify(players),
    },
    revalidate: 60,
  };
}
