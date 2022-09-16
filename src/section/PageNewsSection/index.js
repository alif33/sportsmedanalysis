import React from "react";
import style from "./PageNews.module.css";
import Image from "next/image";
import Link from "next/link";

const PageNewsSection = ({ title }) => {
  return (
    <div className="nfl_con pb-4">
      <div className={style.nfl_sec_three}></div>
      <h4 className={style.nfl_card_title2}>{title}</h4>
      <div className="row mt-3">
        <div className={`${style.pageNewsSection} col-md-9`}>
          <Link href="/">
            <a className="row">
              <div className="col-md-7">
                <div className={style.cardImg}>
                  <a>
                    <Image
                      width="1116"
                      height="780"
                      src="/images/landing_Page/nfl_S3_img.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                {" "}
                <div>
                  <a>
                    <h4 className={style.nfl_title1}>
                      What happened to Andrew Luck? Our new series goes inside
                      his rise, shocking retirement
                    </h4>
                    <p className={style.nfl_para1}>
                      What happened to Andrew Luck? Our new series goes inside
                      his rise, shocking retirement
                    </p>
                    <p className={style.writer_name}>
                      Scott Wheeler{" "}
                      <span
                        style={{
                          content: "url(/images/landing_Page/comment.svg)",
                        }}
                        className={style.nfl_comment_num}
                      ></span>{" "}
                      <span className={style.writer_name}>377</span>
                    </p>
                  </a>
                </div>
              </div>
            </a>
          </Link>
        </div>

        <div className="position-relative col-md-3">
          <div className={style.nfl_sec2_vertical_line}></div>
          <div className="d-flex">
            <h3 className={style.nfl_sec3_title}>Headlines</h3>
          </div>

          <ul className={style.nfl_S3__ul}>
            <li>
              <Link href="#!">
                <a>Former Chiefs OL Mitchell Schwartz retires</a>
              </Link>
            </li>
            <li>
              <Link href="#!">
                <a>Former Chiefs OL Mitchell Schwartz retires</a>
              </Link>
            </li>
            <li>
              <Link href="#!">
                <a>Former Chiefs OL Mitchell Schwartz retires</a>
              </Link>
            </li>
            <li>
              <Link href="#!">
                <a>Former Chiefs OL Mitchell Schwartz retires</a>
              </Link>
            </li>
            <li>
              <Link href="#!">
                <a>Former Chiefs OL Mitchell Schwartz retires</a>
              </Link>
            </li>
            <li>
              <Link href="#!">
                <a>Former Chiefs OL Mitchell Schwartz retires</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageNewsSection;
