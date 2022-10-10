import { useRouter } from "next/router";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import Popup from "reactjs-popup";
import { ImShare2 } from "react-icons/im";
import style from "./ShareModal.module.css";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ShareModal = ({ color }) => {
  const router = useRouter();
  /* Just personal preference. I prefer to not show the whole text area selected. */
  const textAreaRef = useRef(null);

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    toast.success("Link Copied! ");
  };
  const contentStyle = { background: "#286ba6" };
  return (
    <Popup
      className="p-5 m-5"
      trigger={
        <button className={style.modalOpenBtn}>
          <ImShare2 style={{ color: color }} />
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className={`border-0${style.modalPopup}`}>
          <button className={style.close} onClick={close}>
            &times;
          </button>

          <div>
            <h3 className={`${style.title}`}>Share</h3>
            <div className={style.copyInputBtn}>
              <input type="text" value={location.href} ref={textAreaRef} />
              <button onClick={copyToClipboard}> copy </button>
            </div>
            <ul className={`${style.socialBtnList}`}>
              <li>
                <button>{"<>"}</button>
              </li>
              <li>
                <FacebookShareButton url={location.href}>
                  <button>
                    <FaFacebookF />
                  </button>
                </FacebookShareButton>
              </li>
              <li>
                <LinkedinShareButton>
                  <button>
                    <FaLinkedinIn />
                  </button>
                </LinkedinShareButton>
              </li>
              <li>
                <TwitterShareButton>
                  <button>
                    <FaTwitter />
                  </button>
                </TwitterShareButton>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ShareModal;
