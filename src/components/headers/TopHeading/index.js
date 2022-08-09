import Link from 'next/link';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import { MdKeyboardArrowDown, MdOutlineLogout } from 'react-icons/md';
import { HiOutlineUser } from 'react-icons/hi';

const TopHeading = () => {
    return (
        <div className="_smd_top_heading bg-black py-1 align-items-center align-items-lg-start container-fluid pe-3">
            <div className="_smd_top_heading_section _smd_top_social _smd_border-right ">
                <ul className='text-center'>
                    <li><Link href="#?">
                        <Image height="18.75" width="9.73" src="/images/icon/facebook.png" alt="" />
                    </Link></li>

                    <li><Link href="/"><Image height="22.92" width="22.92" src="/images/icon/instragram.png" alt="" /></Link></li>

                    <li><Link href="/"><Image height="16.68" width="18.81" src="/images/icon/twtter.png" alt="" /></Link></li>
                </ul>
            </div>
            {/* <div className="_smd_top_heading_section _smd_top_middle">
                <ul className='text-center text-lg-start my-1 my-md-0'>
                    <li><Link href="/">
                        <a>chonasportsmed@gmail.com</a>
                    </Link></li>
                </ul>
            </div> */}
            <div className="_smd_top_heading_section  _smd_top_reg text-end">
                {/* <ul>
                    <li className="_smd_border-right pe-2"><Link href="/auth/sign-in">
                        <a>Login</a>
                    </Link></li>

                    <li className="_smd_border-right pe-2"><Link href="/auth/sign-up">
                        Signup
                    </Link></li>

                    <li className='d-flex align-items-center dropdown'>
                        <div className="dropdown-btn"><Image height="6" width="12" src="/images/icon/arrow-down.png" alt="" />En</div>
                        <ul className="dropdown-items">
                            <li>bn</li>
                            <li>en</li>
                     </ul></li>
                </ul> */}

                <Popup
                    trigger={<div className="user-dropdown-btn"> Sub menu <MdKeyboardArrowDown /> </div>}
                    position="bottom left"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: '0px', border: 'none' }}
                    arrow={false}
                >
                    <ul className="user-dropdown">
                        <li> <Link href="/"><a><HiOutlineUser /> My Account</a></Link> </li>
                        <li> <Link href="/"><a> <MdOutlineLogout /> Logout</a></Link> </li>
                    </ul>
                </Popup>
            </div>
        </div>
    );
};

export default TopHeading;