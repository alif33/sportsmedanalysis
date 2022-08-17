import React from 'react';
import AuthLayout from "../../../src/components/AuthLayout";
import style from './NewPassword.module.css';

const NewPassword = () => {
    return (
        <AuthLayout>
            <div className="ps-1 pe-2 mt-2 mb-2 h-100">
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <div className="profile-text">
                        <h3>Set New Password</h3>
                        <p className="mt-1 mb-1">Please enter your new password twice so we can be sure you typed it in correctly.

                        </p>
                    </div>
                </div>
                <form className={`w-100 ${style._smd_login_card} ${style.new_password_form}`}>
                    <div className="row">
                        <div className="col-md-6">

                            <div className={style._smd_form_group}>
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="Password"
                                    placeholder="Enter Password"
                                // {...register("Username", {
                                //   required: "Email is required.",
                                // })}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className={style._smd_form_group}>
                                <label htmlFor="Confirm-Password">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                // {...register("Username", {
                                //   required: "Email is required.",
                                // })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <button className="bg-black text-center justify-content-center">Save Password</button>
                        </div>
                        <div className="col-md-6 ">
                            <button className="text-center justify-content-center" >Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
};

export default NewPassword;