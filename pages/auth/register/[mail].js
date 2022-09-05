import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthLayout from "../../../src/components/AuthLayout";
import { useForm } from 'react-hook-form';
import { showErr } from "../../../__lib__/helpers/ErrHandler";
import { postData } from "../../../__lib__/helpers/HttpService";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import style from './Register.module.css';

const Register = () => {
    const [disable, setDisable] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onError = (err) => showErr(err);
    const router = useRouter();

    // useEffect(() => {
    //     console.log(router.query);
    // }, [])



    const onSubmit = (data) => {
        const { mail } = router.query
        setDisable(true);

        console.log({ ...data, email: mail });
        postData("/user/register", { ...data, email: mail }, setDisable).then((res) => {

            if (res?.exists) {
                toast.success(`${res.message}`);
            }

            if (res?.success) {
                reset();
                router.push({
                    pathname: "/auth/sign-in",
                });
            }
        });
    };

    return (
        <AuthLayout>
            <div className={style._smd_login_card}>
                <h3>Create your account</h3>
                <div className="w-100 text-start mb-2 ">
                    <button onClick={() => router.back()} className={`d-flex align-items-center justify-content-start ${style.backBtn}`} ><Image height='24' width="24" src="/images/icon/chevron-left.png" alt="" />Back</button>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="w-100"
                >
                    <div className="w-100">
                        <div className="row w-100 mx-auto">
                            <div className="col-md-6">
                                <div className={style._smd_form_group}>
                                    <label htmlFor="email">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        {...register("firstName",
                                            {
                                                required: 'First name is required.'
                                            }
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={style._smd_form_group}>
                                    <label htmlFor="email">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        {...register("lastName",
                                            {
                                                required: 'Last name is required.'
                                            }
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row w-100 mx-auto">
                        <div className={style._smd_form_group}>
                            <label htmlFor="email">Password</label>
                            <input
                                type="password"
                                placeholder="password"
                                {...register("password",
                                    {
                                        required: 'First name is required.'
                                    }
                                )}
                            />
                        </div>

                    </div>

                    <div className="row w-100 mx-auto">
                        <div className={style._smd_form_group}>
                            <label htmlFor="email">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                {...register("confirmPassword",
                                    {
                                        required: 'Confirm Password is required.'
                                    }
                                )}
                            />
                        </div>
                    </div>

                    <div className="row w-100 mx-auto">
                        <button style={{ color: "#fff" }} className="bg-black text-center justify-content-center  mt-3 mb-4"> Create Account</button>
                    </div>
                </form>
                <a className="mt-1 mb-2">
                    <Link href="/auth/sign-in">
                        Already have an account? Login
                    </Link>
                </a>

            </div>
        </AuthLayout>
    );



    // return (
    //   <>
    //     <Layout>
    //       <div id="login">
    //         <form 
    //           onSubmit={handleSubmit(onSubmit, onError)}
    //         >
    //           <h1 className="text-center text-white fs-1 mt-2">Signup</h1>
    //           <div>
    //             <label htmlFor="name">Name</label>
    //             <input
    //               {...register("name", {
    //                 required: "Name is required.",
    //               })}
    //               type="text"
    //               id="name"
    //               placeholder="Enter your name"
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="email">Email</label>
    //             <input
    //               {...register("email", {
    //                 required: "Email is required.",
    //               })}
    //               type="email"
    //               name="email"
    //               id="email"
    //               placeholder="Enter your Email"
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="password">Password</label>
    //             <input
    //               {...register("password", {
    //                 required: "Password is required.",
    //               })}
    //               type="password"
    //               name="password"
    //               id="password"
    //               placeholder="Enter Your password"
    //             />
    //           </div>
    //           <button disabled={disable} className="my-2">
    //             signup
    //           </button>
    //         </form>
    //       </div>
    //     </Layout>
    //   </>
    // );
};

export default Register;
