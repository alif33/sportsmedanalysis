import React from "react";
import BookmarkCard from "../sectionCard/BookmarkCard";
import style from "./BookmarkSection.module.css";

const BookmarkSection = () => {
  return (
    <div>
      <h3 className={style.title}>My Bookmarks </h3>
      <p className={style.descritiop}>Recently Saved</p>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
    </div>
  );
};

export default BookmarkSection;
