import Link from 'next/link';
import AuthLayout from "../../../src/components/AuthLayout";
import style from './Forget.module.css';

const ForgetPassword = () => {
    return (
        <AuthLayout>
            <div className={style._smd_login_card}>
                <h3>Reset Your Password</h3>

                {/* <div className="w-100 text-start mb-2 ">
                    <Link href="/">
                        <a className="d-flex align-items-center justify-content-start"><Image height='24' width="24" src="/images/icon/chevron-left.png" alt="" />Back</a>
                    </Link>
                </div> */}
            </div>

            <h6 className={`my-2 text-center ${style.forget_password_desc}`} >Enter your email adress below and we’ll send you a link with instructions</h6>

            <div className={style._smd_login_card}>
                <form className="w-100">

                    <div className={style._smd_form_group}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="emai"
                            placeholder="Email Address"
                        />
                    </div>

                    <button className="bg-black text-center justify-content-center  mt-3 mb-4"> Submit</button>
                </form>
                <a className="mt-1 mb-2">Remember your password?
                    <Link href="//auth/sign-in">
                        <a> Login</a>
                    </Link>
                </a>
                <h6 className={`my-1 text-center ${style.forget_password_desc}`} >
                    <Link href="/auth/sign-in"><a>Need Help | FAQ</a></Link>
                </h6>
            </div>
        </AuthLayout>
    );
};

export default ForgetPassword;