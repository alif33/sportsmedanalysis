import React, { useState } from "react";
import { useRouter } from "next/router";
import AuthLayout from "../../../src/components/AuthLayout";
import style from "./NewPassword.module.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateData } from "../../../__lib__/helpers/HttpService";

const NewPassword = () => {
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  console.log(router.query);
  const { token } = router.query;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    if (password === confirmPassword) {
      updateData("/user/password", data, token)
        .then((res) => {
          setDisable(false);
          console.log(res);
          if (res.success) {
            toast.success("Password changed successfully");
            router.push("/auth/sign-in");
          }
        })
        .catch((err) => {
          setDisable(false);
        });
    } else {
      toast.error("Password is not  match");
    }
  };

  return (
    <AuthLayout>
      <div className={`ps-1 pe-2 mt-2 mb-2 m-auto ${style.new_password_card}`}>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <div className="profile-text">
            <h3>Set New Password</h3>
            <p className="mt-1 mb-1">
              Please enter your new password twice so we can be sure you typed
              it in correctly.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`w-100  ${style._smd_login_card} ${style.new_password_form}`}
        >
          <div className="row">
            <div className="col-md-6">
              <div className={style._smd_form_group}>
                <label htmlFor="Password">Password</label>
                <input
                  type="Password"
                  placeholder="Enter Password"
                  {...register("password", {
                    required: "Email is required.",
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
                    required: "Email is required.",
                  })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button
                type="submit"
                className="bg-black text-center justify-content-center"
              >
                Save Password
              </button>
            </div>
            <div className="col-md-6 ">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="text-center justify-content-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default NewPassword;
