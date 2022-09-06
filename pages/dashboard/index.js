import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "../../src/components/DashboardLayout";
import { __Auth } from "../../__lib__/helpers/AuthProvider";
import style from "./ProfileDashboard.module.css";

const ProfileDashboard = () => {
  const { user } = useSelector(state=>state);
  const { __u__ } = user;
  const { info } = __u__;

  return (
    <DashboardLayout stutas="my-account">
      <div className="container ps-1 pe-2 mt-2 mb-5">
        <div className="w-100 d-flex justify-content-between align-items-center mt-3">
          <div className="profile-text">
            <h3>Profile</h3>
            <h5 className="mt-1">Login Info</h5>
          </div>
          <Link href="/dashboard/edit-profile">
            <a>
              <button className="main-btn">Edit Profile</button>
            </a>
          </Link>
        </div>
        <div className="row mt-1">
          <div className="col-md-6">
            <div className={style._smd_form_group}>
              <label htmlFor="email">Username</label>
              <input
                type="email"
                placeholder="John Doe"
                defaultValue={ info?.userName }
                disabled={ true }
              />
            </div>
            <Link href="/dashboard/new-password">
              <a>
                <button className="bg-black text-center justify-content-center  mt-2 mb-4 main-btn w-100">
                  {" "}
                  Change Password
                </button>
              </a>
            </Link>
          </div>
          <div className="col-md-6">
            <div className={style._smd_form_group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                defaultValue={ info?.email }
                disabled={ true }
              />
            </div>
            <button className="bg-blue text-center justify-content-center  mt-2 mb-4 main-btn w-100">
              {" "}
              Connect with Facebook
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5>Email Subscriptions</h5>
            <p>
              Sports Medanalytics can send you helpful Soprts advice from time
              to time.
            </p>
          </div>
          <div className="col-md-6">
            <div className={`${style._smd_login_card} w-100 mt-1`}>
              <Link href="/dashboard/email-preferences">
                <a>
                  <button>
                    <div className="text-center">
                      Change my email preferences
                    </div>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileDashboard;

export const getServerSideProps = __Auth((context) => {
  return {
    props: {},
  };
});
