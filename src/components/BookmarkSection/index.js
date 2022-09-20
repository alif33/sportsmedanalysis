import React from "react";
import BookmarkCard from "../sectionCard/BookmarkCard";
import style from "./BookmarkSection.module.css";

const BookmarkSection = ({ _bookmarks }) => {
  return (
    <div className="pb-3">
      <h3 className={style.title}>My Bookmarks </h3>
      {/* <p className={style.descritiop}>Recently Saved</p> */}
      {
        _bookmarks && _bookmarks.map((item, index)=>{
          return(
            <BookmarkCard
              key={ index }
              item={ item }
            />
          )
        })
      }
      {/* <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/> */}
    </div>
  );
};

export default BookmarkSection;
