import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import footerStyle from './MobileFooter.module.css';

const MobileFooter = () => {
    return (
        <div className={`bg-black py-2 ${footerStyle._smd_mobile_footer} `}>
            <div className="container-fluid">

                <div className="row">
                    <div className="row">
                        <div className="col-2">
                            <div className="_footer_logo">
                                <Link href="#">
                                    <a>
                                        <Image height="42" width="42" src="/images/icon/logo.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-10 ">
                            <h3 className={footerStyle.tilte}>
                                Sports med analytics
                            </h3>
                            <p className={footerStyle.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque, mauris eu quis ultricies viverra dui venenatis.</p>
                            <ul className={`${footerStyle._smd_footer_follow_menu}`}>

                                <li>
                                    <Link href="/">
                                        <a><Image height="16" width="16" src="/images/icon/fb.png" alt="" /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a><Image height="16" width="16" src="/images/icon/yo.png" alt="" /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a><Image height="16" width="16" src="/images/icon/tw.png" alt="" /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a><Image height="16" width="16" src="/images/icon/in.png" alt="" /></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row my-2">
                    <div className="col-4">
                        <ul className={`${footerStyle._smd_footer_menu}`}>
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
                            <li>
                                <Link href="/watch">
                                    <a>WATCH</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul className={`${footerStyle._smd_footer_menu}`}>
                            <li>
                                <Link href="/">
                                    <a>ADVERTISE WITH US</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>AFFILITE APPLICATION</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>EXPERTPLATFORM</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>GIFT CARD</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul className={`${footerStyle._smd_footer_menu}`}>
                            <li>
                                <Link href="/">
                                    <a>MOBILE APPS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>
                                        NEWS DESK</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>SHOP</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a> SPORTS BETTING</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-6">
                        <div className={footerStyle.newsLatter}>
                            <h3>Sign Up for Our Newsletters</h3>
                            <div className={footerStyle.newsLatterInput}>
                                <input type="text" placeholder="Enter email here" />
                                <button><Image height="15" width="15" src="/images/icon/arrow-right.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="text-end">
                            <select className={footerStyle.selectLang}>
                                <option value="En">En</option>
                                <option value="En">En</option>
                                <option value="En">En</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className={`${footerStyle.copy_right} text-center`}>
                        <Link href="/">
                            <a> &copy; Copyright 2022 Sportsmedanalytics.com
                            </a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileFooter;