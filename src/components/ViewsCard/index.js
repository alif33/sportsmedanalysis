import React from "react";
import EyeIcon from "../svg/EyeIcon";
import style from "./ViewsCard.module.css";

import ShareModal from "../../components/ShareModal";

const ViewsCard = ({ watch }) => {
  return (
    <div className="d-flex justify-content-between align-items-center ">
      <ul className={style.viewsCard}>
        <li>
          <EyeIcon />
          {watch.views} views | Sep 10, 2022 |{" "}
          <p className="ms-1 mb-0">
            <ShareModal color="#111" />
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ViewsCard;
