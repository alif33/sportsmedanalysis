import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logedIn } from "../../../../store/user/actions";
import { updateData } from "../../../../__lib__/helpers/HttpService";
import style from "./TeamsFollowingCard.module.css";

const TeamsFollowingCard = ({ _id, name, league }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { isUser, __u__ } = user;
  const { info } = __u__;

  const followHandler = () => {
    updateData(`/user/team/follow?__t=${_id}`, {}, __u__.token).then((res) => {
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
    updateData(`/user/team/unfollow?__t=${_id}`, {}, __u__.token).then(
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
      <Link href="/">
        <a className={style.imageAndName}>
          <div className={style.cardImage}>
            <h1>{league}</h1>
            {/* <Image height="87" width="144" src="/images/card-img/following.png" alt="" /> */}
          </div>
          <div className="ms-md-3 ms-1 ">
            <Image
              height="26"
              width="26"
              src="/images/icon/football.png"
              alt=""
            />
          </div>
          <div className="">
            <h4>{name}</h4>
            <p>1.2 Million Followers</p>
          </div>
        </a>
      </Link>
      <div className={style.buttonSide}>
        {isUser && info?._teams?.includes(_id) ? (
          <button onClick={UnfollowHandler}>Unfollow</button>
        ) : (
          <button onClick={followHandler}>Follow</button>
        )}
      </div>
    </div>
  );
};

export default TeamsFollowingCard;
