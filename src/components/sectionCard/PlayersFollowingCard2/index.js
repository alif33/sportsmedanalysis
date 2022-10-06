import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logedIn } from "../../../../store/user/actions";
import { updateData } from "../../../../__lib__/helpers/HttpService";
import { imageResize } from "../../../../__lib__/helpers/Validator";
// import style from "./TeamsFollowingCard.module.css";
import style from "./TeamsFollowingCard.module.css";

const PlayersFollowingCard2 = ({ _id, firstName, lastName, img }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { isUser, __u__ } = user;
  const { info } = __u__;

  const followHandler = () => {
    updateData(
      `/user/player/follow?__p=${_id}`,
      { firstName, lastName },
      __u__.token
    ).then((res) => {
      if (res.success) {
        toast.success("Followed");
        const { token, info } = res;
        dispatch(
          logedIn({
            token,
            info,
          })
        );
      }
    });
  };

  const UnfollowHandler = () => {
    updateData(`/user/player/unfollow?__p=${_id}`, {}, __u__.token).then(
      (res) => {
        if (res.success) {
          toast.success("Unfollowed");
          const { token, info } = res;
          dispatch(
            logedIn({
              token,
              info,
            })
          );
        }
      }
    );
  };

  return (
    <div className={style.teamsFollowingCard}>
      <Link href={`/player/${firstName}-${lastName}/${_id}`}>
        <a className={style.imageAndName}>
          <div className={style.cardImage}>
            <Image
              height="87"
              width="100"
              src={imageResize(img, "c_thumb,g_face,h_400,w_400")}
              alt={`${firstName}-${lastName}`}
            />
          </div>
          <div className="ms-md-2 ms-1 ">
            <Image
              height="26"
              width="26"
              src="/images/icon/football.png"
              alt=""
            />
          </div>
          <div className="ms-1 ">
            <h4>
              {firstName} {lastName}
            </h4>
            <p>1.2 Million Followers</p>
          </div>
        </a>
      </Link>
      <div className={style.buttonSide}>
        {isUser && info?._players?.includes(_id) ? (
          <button onClick={UnfollowHandler}>Unfollow</button>
        ) : (
          <button onClick={followHandler}>Follow</button>
        )}
      </div>
    </div>
  );
};

export default PlayersFollowingCard2;
