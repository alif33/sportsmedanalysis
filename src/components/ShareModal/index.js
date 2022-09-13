import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import Popup from "reactjs-popup";
import ShareIcon from "../ShareIcon";
import style from "./ShareModal.module.css";

const ShareModal = () => {
  return (
    <Popup
      trigger={
        <button className={style.modalOpenBtn}> <ShareIcon />{" "}
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className={style.modalPopup}>
          <button className={style.close} onClick={close}>
            &times;
          </button>
          <ul className={style.socialBtnList}>
            <li>
              <button className={style.facebook}>
                <RiFacebookFill />
                <p>Facebook</p>
              </button>
            </li>
            <li>
              <button>
                <RiFacebookFill />
                <p>Facebook</p>
              </button>
            </li>
            <li>
              <button>
                <RiFacebookFill />
                <p>Facebook</p>
              </button>{" "}
            </li>
            <li>
              <button>
                <RiFacebookFill />
                <p>Facebook</p>
              </button>{" "}
            </li>
            <li>
              <button>
                <RiFacebookFill />
                <p>Facebook</p>
              </button>{" "}
            </li>
          </ul>
        </div>
      )}
    </Popup>
  );
};

export default ShareModal;
