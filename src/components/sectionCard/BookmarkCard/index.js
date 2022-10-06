import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import { logedIn } from "../../../../store/user/actions";
import { updateData } from "../../../../__lib__/helpers/HttpService";
import { Sortern } from "../../../../__lib__/helpers/Validator";
import DeleteIcon from "../../svg/DeleteIcon";
import SaveIcon from "../../svg/SaveIcon";
import style from "./BookmarkCard.module.css";

const BookmarkCard = ({ item }) => {
  const { user } = useSelector(state=>state);
  const dispatch = useDispatch();
  const { __u__ } = user;

  const removeBookmark = _id => {
    updateData(`/user/bookmark?__b=${_id}`, { status: "REMOVE" }, __u__.token).then(
      (res) => {
        if (res.success) {
          toast.success(`${res.message}`);
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
    <div className={style.bookmarkCard}>
      <Link href={`/${slugify(item.title)}/${item._id}`}>
        <a className={style.bookmarkCardImg}>
          <Image height="333" width="486" src={item.image} alt="" />
        </a>
      </Link>
      <div className={style.bookmarkCardContent}>
        <div className="d-flex align-items-center justify-content-between">
          <Link href={`/${slugify(item.title)}/${item._id}`}>
            <a className={style.title}>
              {Sortern(item.title, 10)}
              <SaveIcon />
            </a>
          </Link>
          <i className={style.deleteIcon}>
            {" "}
            <DeleteIcon />
          </i>
        </div>
        <p>{Sortern(item.description, 10)}</p>
        <span>
          <AlartIcon /> Saved 2 Days Ago
        </span>
      </div>
    </div>
  );
};

export default BookmarkCard;
