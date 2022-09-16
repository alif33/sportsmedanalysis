import React from "react";
import style from "./PlayerSection.module.css";
import Link from "next/link";
import Image from "next/image";
import { imageResize, Sortern } from "../../../__lib__/helpers/Validator";

const Card = ({ players }) => {
  console.log(players);
  return (
    <>
      {players &&
        players.map((item, index) => {
          return (
            <div
              className={`${style.nfl_S2_3rd_card} mt-2 d-block `}
              key={index}
            >
              <Link
                href={`/player/${item.firstName + "-" + item.lastName}/${
                  item._id
                }`}
              >
                <a className="d-grid align-items-center">
                  <Image
                    height="300"
                    width="300"
                    src={imageResize(item.image, "c_thumb,g_face,h_300,w_300")}
                    alt=""
                  />
                  <div>
                    <h1
                      className={style.nfl_card_title1}
                    >{`${item.firstName}  ${item.lastName}`}</h1>
                    <p className="mb-0">{Sortern(item.description, 8)}</p>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Card;
