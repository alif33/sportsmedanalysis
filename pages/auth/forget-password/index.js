import { useState } from 'react';
import Link from 'next/link';
import style from './Forget.module.css';
import { useRouter } from 'next/router';
import AuthLayout from "../../../src/components/AuthLayout";
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';
import { showErr } from '../../../__lib__/helpers/ErrHandler';
import { postData } from '../../../__lib__/helpers/HttpService';
import toast from 'react-hot-toast';
import { cryptr } from '../../../__lib__/helpers/Hashing';

const ForgetPassword = () => {


    const [disable, setDisable] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onError = err => showErr(err);
    const cookies = new Cookies();
    const router = useRouter();

    const onSubmit = data => {
        setDisable(true)
        // console.log(cryptr.encrypt(data.email));
        

        postData('/user/forget-password', data, setDisable)
            .then(res => {
                console.log(res);
                if (res?.success) {
                    router.push({
                        pathname: `/auth/password-reset-email/${ cryptr.encrypt(data.email) }`
                    })
                }

                if (!res?.success) {
                    toast.error(`${ res.message }`)
                }

            })
    }


    
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
                <form 
                    className="w-100"
                    onSubmit={handleSubmit(onSubmit, onError)}
                >

                    <div className={style._smd_form_group}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register("email",
                                {
                                    required: 'Email is required.'
                                }
                            )}
                        />
                    </div>

                    <button className="bg-black text-center justify-content-center  mt-3 mb-4"> Submit</button>
                </form>
                <a className="mt-1 mb-2">Remember your password?
                    <Link href="/auth/sign-in">
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