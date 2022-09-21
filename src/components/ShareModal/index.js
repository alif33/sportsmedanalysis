import { useRouter } from "next/router";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import Popup from "reactjs-popup";
import ShareIcon from "../ShareIcon";
import style from "./ShareModal.module.css";
import { FacebookShareButton } from "react-share";

const ShareModal = () => {
  const router = useRouter();
  /* Just personal preference. I prefer to not show the whole text area selected. */
  const textAreaRef = useRef(null);

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    toast.success("Link Copied! ");
  };

  return (
    <Popup
      trigger={
        <button className={style.modalOpenBtn}>
          {" "}
          <ShareIcon />
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

          <div>
            <h3 className={style.title}>Share</h3>
            <div className={style.copyInputBtn}>
              <input
                disabled
                type="text"
                value={location.href}
                ref={textAreaRef}
              />
              <button onClick={copyToClipboard}> copy </button>
            </div>
            <ul className={style.socialBtnList}>
              <li>
                <button>{"<>"}</button>
              </li>
              <li>
                <FacebookShareButton url={location.href}>
                  <button>FB</button>
                </FacebookShareButton>
              </li>
              <li>
                <button>IG</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ShareModal;
