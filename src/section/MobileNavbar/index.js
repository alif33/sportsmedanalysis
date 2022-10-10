import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { logOut } from "../../../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../../components/svg/SearchIcon";
import style from "./MobileNavbar.module.css";
import UserIcon from "../../components/svg/UserIcon";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const navMenus = ["NFL", "NBA", "MLB", "WATCH", "PODCAST"];

const MobileNavbar = () => {
  const [mobileMenu, setMobileMenu] = useState();
  const router = useRouter();
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    router.push("/auth/sign-in");
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-black  ${style._smd_navbar_border}`}
      >
        <div className="container-fluid ">
          <Link href="/">
            <a
              className={`navbar-brand m-0 me-0 d-flex justify-content-center align-items-center ${style.navBrand}`}
            >
              <Image
                height="70"
                width="70"
                src="/images/icon/logo.png"
                alt=""
              />
            </a>
          </Link>

          <div
            className={`d-flex  justify-content-between align-items-center ${style.navMenu}`}
          >
            <div
              className={`${style.mobileMenuSideBar} ${
                mobileMenu ? style.active : ""
              }`}
            >
              <div className="d-flex justify-content-between align-items-center w-50 mx-auto">
                <Link href="/">
                  <a
                    className={`navbar-brand m-0 me-0 d-flex justify-content-center align-items-center ${style.navBrand}`}
                  >
                    <Image
                      height="150"
                      width="150"
                      src="/images/icon/logo.png"
                      alt=""
                    />
                  </a>
                </Link>
                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className={style.MobileMenucloseBtn}
                >
                  <GrClose />
                </button>
              </div>
              <ul className={style.mobileMenu}>
                {navMenus.map((menu, index) => {
                  return (
                    <li
                      key={index}
                      className={`nav-item ${style._smd_nav_item} ${
                        router.pathname.split("/")[1] ===
                        menu.toLocaleLowerCase()
                          ? style.active
                          : ""
                      }`}
                    >
                      <Link href={`/${menu.toLocaleLowerCase()}`}>
                        <a className="nav-link">{menu}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <ul className={`d-md-flex navbar-nav mr-auto d-none  `}>
              {navMenus.map((menu, index) => {
                return (
                  <li
                    key={index}
                    className={`nav-item ${style._smd_nav_item} ${
                      router.pathname.split("/")[1] === menu.toLocaleLowerCase()
                        ? style.active
                        : ""
                    }`}
                  >
                    <Link href={`/${menu.toLocaleLowerCase()}`}>
                      <a className="nav-link">{menu}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div
              className={`d-flex  justify-content-between align-items-center`}
            >
              <form className={style.formInline}>
                <button type="submit">
                  <SearchIcon />
                </button>
              </form>

              {user?.isUser ? (
                <a onClick={handleLogOut} className={style.signBtn}>
                  <UserIcon />
                  <span className="ps-lg-2 fs-lg-3">LOG OUT</span>
                </a>
              ) : (
                <Link href="/auth/sign-in">
                  <a className={style.signBtn}>
                    <UserIcon />
                    <span className="ps-lg-2 fs-lg-3">SIGN IN</span>
                  </a>
                </Link>
              )}
              <ul className={style.leangBtn}>
                <li
                  className={`d-flex align-items-center dropdown ${style.dropdown}`}
                >
                  <div className="dropdown-btn d-flex align-items-center">
                    <Image
                      height="6"
                      width="12"
                      src="/images/icon/arrow-down.png"
                      alt=""
                    />
                    <p className="mb-0">En</p>
                  </div>
                  <ul className={`dropdown-items ${style.dropdown_items}`}>
                    <li>bn</li>
                    <li>en</li>
                  </ul>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={style.menuBtn}
            >
              <AiOutlineMenuUnfold />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
