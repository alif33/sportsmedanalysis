import { useRouter } from 'next/router';
import React from 'react';
import DashboardLayout from '../../../src/components/DashboardLayout';
import style from './EmailPreferences.module.css';

const EmailPreferences = () => {
    const router = useRouter();
    return (
        <DashboardLayout stutas="email-preferences" >
            <div className="container ps-1 pe-2 mt-2 mb-5">
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <div className="profile-text">
                        <h3>Change Email Preferences</h3>
                        <h5 className="mt-1">Email address: johndoe@gmail.com</h5>
                        <p className="mt-1 mb-1">We want to provide you with the most useful and timely advice. Let us know what you&apos;d like to hear about below.</p>
                    </div>
                </div>
                <form className={`w-100 ${style._smd_login_card} d-block text-start`}>

                    <div className="row">
                        <div className="col-md-12"><h5>Weekly Newsletter</h5></div>

                        <div className="col-md-12">
                            <div className="row mt-1">
                                <div className="col-md-2">
                                    <div className={style.input_check}>
                                        <label>NFL
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className={style.input_check}>
                                        <label>MLB
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className={style.input_check}>
                                        <label>NBA
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className={style.input_check}>
                                        <label>NHL
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className={style.input_check}>
                                        <label>DFS
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className={style.input_check}>
                                        <label>PGA
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>


                                <div className="col-md-3 mt-1">
                                    <div className={style.input_check}>
                                        <label>Sports Betting
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2 mt-1">
                                    <div className={style.input_check}>
                                        <label>eSports
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12"><h5>Daily Newsletter</h5></div>

                        <div className="col-md-12">
                            <div className="row mt-1">
                                <div className="col-md-2">
                                    <div className={style.input_check}>
                                        <label>NFL Daily
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className={style.input_check}>
                                        <label>MLB Daily
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12"><h5>Unsubscribe from all:</h5></div>

                        <div className="col-md-12">
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <div className={style.input_check}>
                                        <label>Remove me from all email lists*
                                            <input type="checkbox" />
                                            <span className={style.checkmark}></span>
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="row mt-4">
                        <div className="col-md-6">
                            <button type="submit" className="bg-black text-center justify-content-center">Save Changes</button>
                        </div>
                        <div className="col-md-6 ">
                            <button type="button"
                                onClick={() => router.back()}
                                className="text-center justify-content-center" >Cancel</button>
                        </div>
                    </div>
                </form>

            </div >
        </DashboardLayout >
    );
};

export default EmailPreferences;