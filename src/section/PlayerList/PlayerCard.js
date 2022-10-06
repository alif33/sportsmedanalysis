import React from "react";
import playerCss from "./Player.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../__lib__/helpers/HttpService";
import toast from "react-hot-toast";
import { logedIn } from "../../../store/user/actions";
import { imageResize } from "../../../__lib__/helpers/Validator";
import Link from "next/link";

const PlayerCard = ({ item }) => {
  const { firstName, lastName, _id } = item;
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
    <div className="mt-2 d-block">
      <div className={` d-flex align-items-center ${playerCss.card}`}>
        <Link href="/">
          <a>
            <Image
              height="61"
              width="61"
              src={imageResize(item.image, "c_thumb,g_face,h_400,w_400")}
              alt=""
            />
          </a>
        </Link>
        <div>
          <h4 className={playerCss.cardTitle}>
            <Link href="/">
              <a>{firstName + " " + lastName}</a>
            </Link>

            {isUser && info?._players?.includes(_id) ? (
              <sapn className={playerCss.followBtn} onClick={UnfollowHandler}>
                Unfollow
              </sapn>
            ) : (
              <sapn className={playerCss.followBtn} onClick={followHandler}>
                Follow
              </sapn>
            )}
          </h4>
          <p className="mb-0">
            Possible suspension has ‘no timetable’ for decision
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
