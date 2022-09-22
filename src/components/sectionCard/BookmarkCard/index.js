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
    <Link href={`/${slugify(item.title)}/${item._id}`}>
      <a className={style.bookmarkCard}>
        <div className={style.bookmarkCardImg}>
          <Image height="333" width="486" src={item.image} alt="" />
        </div>
        <div className={style.bookmarkCardContent}>
          <div className="d-flex align-items-center justify-content-between">
            <h4>
              {Sortern(item.title, 10)}
              <SaveIcon />
            </h4>
          <i className={style.deleteIcon} >  <DeleteIcon handler={()=>removeBookmark(item._id)} /></i>
          </div>
          <p>{Sortern(item.description, 15)}</p>
          {/* <span>
            <AlartIcon /> Saved 2 Days Ago
          </span> */}
        </div>
      </a>
    </Link>
  );
};

export default BookmarkCard;
