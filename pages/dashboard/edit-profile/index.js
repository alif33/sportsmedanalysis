import React from 'react';
import DashboardLayout from '../../../src/components/DashboardLayout';
import style from './EditProfile.module.css';

const EditProfile = () => {
    return (
        <DashboardLayout>
            <div className="container ps-1 pe-2 mt-2 mb-5">
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <div className="profile-text">
                        <h3>Profile</h3>
                        <h5 className="mt-1">Login Info</h5>
                    </div>
                </div>
                <form className={`w-100 ${style._smd_login_card} d-block`}>
                    <div className="row mt-1">
                        <div className="col-md-6">

                            <div className={style._smd_form_group}>
                                <label htmlFor="email">Username</label>
                                <input
                                    type="email"
                                    placeholder="John Doe"
                                // {...register("Username", {
                                //   required: "Email is required.",
                                // })}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className={style._smd_form_group}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    placeholder="johndoe@gmail.com"
                                // {...register("Username", {
                                //   required: "Email is required.",
                                // })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-md-6">

                            <div className={style._smd_form_group}>
                                <label htmlFor="full-name">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                // {...register("Username", {
                                //   required: "Email is required.",
                                // })}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className={style._smd_form_group}>
                                <label htmlFor="fanduel-username">Fanduel Username</label>
                                <input
                                    type="text"
                                    placeholder="Enter Username"
                                // {...register("Username", {
                                //   required: "Email is required.",
                                // })}
                                />
                                <p>Optional. Used for rewards for Sports games and contests.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-md-12">

                            <div className={style._smd_form_group}>
                                <label htmlFor="fanduel-username">DraftKings Username</label>
                                <input
                                    type="text"
                                    placeholder="Enter Username"
                                // {...register("Username", {
                                //   required: "Email is required.",
                                // })}
                                />
                                <p>Optional. Used for rewards for Sports games and contests.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <button  className="bg-black text-center justify-content-center">Save Changes</button>
                        </div>
                        <div className="col-md-6 ">
                            <button className="text-center justify-content-center" >Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default EditProfile;