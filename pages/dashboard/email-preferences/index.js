import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "../../../src/components/DashboardLayout";
import style from "./EmailPreferences.module.css";

const EmailPreferences = () => {
  const [check, setCheck] = useState(true);
  const router = useRouter();
  const { user } = useSelector(state=>state);
  const { __u__ } = user;

  console.log(user);   

  return (
    <DashboardLayout stutas="email-preferences">
      <div className="container ps-1 pe-2 mt-2 mb-5">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <div className="profile-text">
            <h3 className="mt-2">Change Email Preferences</h3>
            <h5 className="mt-3">Email address: { __u__.info.email }</h5>
            <p className="mt-3 mb-1">
              We want to provide you with the most useful and timely advice. Let
              us know what you&apos;d like to hear about below.
            </p>
          </div>
        </div>
        <form className={`w-100 ${style._smd_login_card} d-block text-start`}>
          <div className="row">
            <div className="col-md-12">
              <h5>Weekly Newsletter</h5>
            </div>

            <div className="col-md-12">
              <div className="row mt-1">
                <div className="col-md-2">
                  <div className={style.input_check}>
                    <div
                      onClick={() => setCheck(!check)}
                      className={check ? style.active: ""}
                    >
                      NFL
                      <span className={style.checkmark}></span>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className={style.input_check}>
                    <div>
                      NFL
                      <span className={style.checkmark}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <h5>Daily Newsletter</h5>
            </div>

            <div className="col-md-12">
              <div className="row mt-1">
                <div className="col-md-2">
                  <div className={style.input_check}>
                    <div
                      onClick={() => setCheck(!check)}
                      className={check && style.active}
                    >
                      NFL Daily
                      <span className={style.checkmark}></span>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className={style.input_check}>
                    <div>
                      MLB Daily
                      <span className={style.checkmark}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <h5>Unsubscribe from all:</h5>
            </div>

            <div className="col-md-12">
              <div className="row mt-1">
                <div className="col-md-12">
                  <div className={style.input_check}>
                    <div
                      onClick={() => setCheck(!check)}
                      className={check && style.active}
                    >
                      <p> Remove me from all email lists</p>
                      <span className={style.checkmark}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <button
                type="submit"
                className="bg-black text-center justify-content-center"
              >
                Save Changes
              </button>
            </div>
            <div className="col-md-6 ">
              <button
                type="button"
                onClick={() => router.back()}
                className="text-center justify-content-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EmailPreferences;
