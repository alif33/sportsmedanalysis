import Image from "next/image";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
import { Sortern } from "../../../../__lib__/helpers/Validator";
import AlartIcon from "../../svg/AlartIcon";
import DeleteIcon from "../../svg/DeleteIcon";
import SaveIcon from "../../svg/SaveIcon";
import style from "./BookmarkCard.module.css";

const BookmarkCard = ({ item }) => {
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
