import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../../src/components/DashboardLayout";
import { updateData } from "../../../__lib__/helpers/HttpService";
import style from "./NewPassword.module.css";

const NewPassword = () => {
    const [ disable, setDisable ] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useSelector(state=>state);
    const { __u__ } = user;

    const onSubmit = data => {

        setDisable(true);
        updateData("/user/password", data, __u__.token)
            .then(res => {
                setDisable(false);
                console.log(res);
                if (res.success) {
                    toast.success("Password changed successfully");
                    const { token, info } = res;
                    dispatch(
                      logedIn({
                        token,
                        info,
                      })
                    );
                }
            })
            .catch(err=>{
                setDisable(false);
            })

    };

  return (
    <DashboardLayout stutas="new-password" >
      <div className="ps-1 pe-2 mt-2 mb-2 h-100">
        <div className="w-100 d-flex justify-content-between align-items-center mt-2">
          <div className="profile-text">
            <h3>Set New Password</h3>
            <p className="mt-1 mb-1">
              Please enter your new password twice so we can be sure you typed
              it in correctly.
            </p>
          </div>
        </div>
        <form
          className={`w-100 ${style._smd_login_card} ${style.new_password_form}`}
          onSubmit={ handleSubmit(onSubmit) }
        >
          <div className="row">
            <div className="col-md-6">
              <div className={style._smd_form_group}>
                <label htmlFor="Password">Password</label>
                <input
                  type="Password"
                  placeholder="Enter Password"
                  {...register("password", {
                    required: "Password is required.",
                  })}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className={style._smd_form_group}>
                <label htmlFor="Confirm-Password">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required.",
                  })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button 
                className="bg-black text-center justify-content-center"
                type="submit"
                disabled={ disable }
                >
                Save Password
              </button>
            </div>
            <div className="col-md-6 ">
              <button 
                className="text-center justify-content-center"
                type="button"
                onClick={ ()=>router.back() }
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

export default NewPassword;
