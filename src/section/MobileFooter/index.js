import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BorderLine from '../../components/BorderLine';
import RightArrow from '../../components/svg/RightArrow';
import style from './MobileFooter.module.css';

const MobileFooter = () => {
    return (
        <div className={`bg-black py-2 ${style._smd_mobile_footer} `}>
            <div className={style._footer_logo}>
                <Link href="#">
                    <a>
                        <Image height="75" width="73" src="/images/icon/logo.png" alt="" />
                    </a>
                </Link>
            </div>
            <div className="container">
                <div className="row py-md-4 pb-1 pt-0 w-100 mx-auto">
                    <div className="col-md-4  col-10 ms-auto">
                        <h3 className={style.tilte}>
                            Sports med analytics
                        </h3>
                        <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque, mauris eu quis ultricies viverra dui venenatis.</p>
                        <ul className={`${style._smd_footer_follow_menu}`}>

                            <li className="me-2 d-md-block d-none">
                                <Link href="/">
                                    <a><Image height="22" width="22" src="/images/icon/fb.png" alt="" /></a>
                                </Link>
                            </li>
                            <li className="me-2 d-md-none d-block">
                                <Link href="/">
                                    <a><Image height="16" width="16" src="/images/icon/fb.png" alt="" /></a>
                                </Link>
                            </li>

                            <li className="me-2 d-md-block d-none">
                                <Link href="/">
                                    <a><Image height="22" width="22" src="/images/icon/yo.png" alt="" /></a>
                                </Link>
                            </li>
                            <li className="me-2 d-md-none d-block">
                                <Link href="/">
                                    <a><Image height="16" width="16" src="/images/icon/yo.png" alt="" /></a>
                                </Link>
                            </li>

                            <li className="me-2 d-md-block d-none">
                                <Link href="/">
                                    <a><Image height="22" width="22" src="/images/icon/tw.png" alt="" /></a>
                                </Link>
                            </li>
                            <li className="me-2 d-md-none d-block">
                                <Link href="/">
                                    <a><Image height="16" width="16" src="/images/icon/tw.png" alt="" /></a>
                                </Link>
                            </li>

                            <li className="me-2 d-md-block d-none">
                                <Link href="/">
                                    <a><Image height="22" width="22" src="/images/icon/in.png" alt="" /></a>
                                </Link>
                            </li>
                            <li className="me-2 d-md-none d-block">
                                <Link href="/">
                                    <a><Image height="16" width="16" src="/images/icon/in.png" alt="" /></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <div className="row ms-md-5 w-100 m-auto">
                            <div className="col-4 p-md-0">
                                <ul className={`${style._smd_footer_menu}`}>
                                    <li>
                                        <Link href="/">
                                            <a>Latest videos</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/hfl">
                                            <a>NFL</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/nbl">
                                            <a>NBL</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/mlb">
                                            <a>MLB</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4 p-md-0">
                                <ul className={`${style._smd_footer_menu}`}>
                                    <li>
                                        <Link href="/">
                                            <a>Privacy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Terms</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sports Betting</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4 p-md-0">
                                <ul className={`${style._smd_footer_menu}`}>
                                    <li>
                                        <Link href="/">
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>
                                                Contact</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Help</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row mb-2 w-100 m-auto">
                            <div className="col-md-12 col-6">
                                <div className={style.newsLatter}>
                                    <h3>Sign Up for Our Newsletters</h3>
                                    <label htmlFor="">Your Email</label>
                                    <div className={style.newsLatterInput}>
                                        <input type="text" placeholder="Enter email here" />
                                        <button><RightArrow/></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 d-md-none d-block ">
                                <div className="text-end d-flex justify-content-end h-100 align-items-end">
                                    <select className={style.selectLang}>
                                        <option value="En">En</option>
                                        <option value="En">En</option>
                                        <option value="En">En</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className={`w-100 m-auto d-flex justify-content-center justify-content-md-between align-items-center ${style.borderTop}`}>
                    <div className={`${style.copy_right} text-center`}>
                        <Link href="/">
                            <a> &copy; Copyright 2022 Sportsmedanalytics.com
                            </a></Link>
                    </div>
                    <div className="text-end d-md-block d-none">
                        <select className={`${style.selectLang} mt-0`}>
                            <option value="En">En</option>
                            <option value="En">En</option>
                            <option value="En">En</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileFooter;