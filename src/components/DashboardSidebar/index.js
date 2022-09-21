import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Dashboard.module.css";
import { RiUserFollowFill } from "react-icons/ri";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

const DashboardSidebar = ({ stutas }) => {
  return (
    <div className={` bg-black ${style._smd_dashboard_sidebar} h-100`}>
      <h4 className="ms-2 py-2">Account Links</h4>
      <ul className={style.sidebar_link}>
        <li
          className={`${style.sidebar_navlink} ${
            stutas === "my-account" ? style.active : ""
          }`}
        >
          <Link href="/dashboard">
            <a>
              <AiOutlineUser />
              <h4>My Account</h4>
            </a>
          </Link>
        </li>
        <li
          className={`${style.sidebar_navlink} ${
            stutas === "following" ? style.active : ""
          }`}
        >
          <Link href="/dashboard/following">
            <a>
              <RiUserFollowFill />
              <h4>Following</h4>
            </a>
          </Link>
        </li>
        <li
          className={`${style.sidebar_navlink} ${
            stutas === "email-preferences" ? style.active : ""
          }`}
        >
          <Link href="/dashboard/email-preferences">
            <a>
              <AiOutlineMail />
              <h4>Email Preferences</h4>
            </a>
          </Link>
        </li>

        {/* <li className={`${style.sidebar_navlink} ${stutas === 'edit-profile' ? style.active : ""}`}>
                    <Link href="/dashboard/edit-profile"><a><Image height="20" width="20" src="/images/icon/message.png" alt="" /> <h4>Edit Profile</h4></a></Link>
                </li>
                <li className={`${style.sidebar_navlink} ${stutas === 'new-password' ? style.active : ""}`}>
                    <Link href="/dashboard/new-password"><a><Image height="20" width="20" src="/images/icon/message.png" alt="" /> <h4>New Password</h4></a></Link>
                </li>
                <li className={`${style.sidebar_navlink} ${stutas === 'password-reset-email' ? style.active : ""}`}>
                    <Link href="/dashboard/password-reset-email"><a><Image height="20" width="20" src="/images/icon/message.png" alt="" /> <h4>Password Reset Email</h4></a></Link>
                </li> */}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
