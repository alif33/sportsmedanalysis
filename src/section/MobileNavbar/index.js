import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import SearchIcon from '../../components/svg/SearchIcon';
import style from './MobileNavbar.module.css';

const navMenus = [
    "NFL",
    "NBA",
    "MLB",
    "WATCH",
    "PODCAST",
]

const MobileNavbar = () => {
    const router = useRouter();


    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-black pt-0 pb-0 ${style._smd_navbar_border}`}>
                <div className="container-fluid ">
                    <Link href="/">
                        <a className="navbar-brand m-0 me-0">
                            <Image height="66.06" width="64" src="/images/icon/logo.png" alt="" />
                        </a>
                    </Link>

                    <div className={`d-flex  justify-content-between ${style.navMenu}`}>
                        <ul className={`d-flex navbar-nav mr-auto `}>
                            {
                                navMenus.map((menu, index) => {
                                    return (
                                        <li key={index} className={`nav-item ${style._smd_nav_item} ${router.pathname.split('/')[1] === menu.toLocaleLowerCase() ? style.active : ''}`}>

                                            <Link href={`/${menu.toLocaleLowerCase()}`}>
                                                <a className="nav-link">{menu}
                                                </a>
                                            </Link>

                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <form className={style.formInline}>
                            <button type="submit"><SearchIcon /></button>
                        </form>

                        <Link href="">
                            <a className={style.signBtn}>
                                <i> <Image width="14" height="14" src="/images/icon/user-icon.png" alt="" /></i>
                                SIGN IN
                            </a>
                        </Link>                    </div>
                </div>
            </nav>
        </>
    );
};

export default MobileNavbar;