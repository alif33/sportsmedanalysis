import React from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../src/components/DashboardLayout';
import style from './EditProfile.module.css';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { __Auth } from '../../../__lib__/helpers/AuthProvider';

const EditProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const { user } = useSelector(state=>state);
    const { __u__ } = user;
    const { info } = __u__;


    const onSubmit = data => {

        // console.log(data);
        // setDisable(true);
        // postData(`/${""}/signin`, data)
        //     .then(res => {
        //         setDisable(false);
        //         if (res.success) {
        //             const { token, info, role, status } = res;
        //             if(status==="REJECTED"){
        //                 toast.error("Account is restricted")
        //             }else{
        //                 dispatch(logedIn({
        //                     token,
        //                     info,
        //                     role,
        //                     status
        //                 }))
        //                 if(role==="AUTHOR"){
        //                     navigate("/school");
        //                 }
        //             }

        //         }
        //     })
        //     .catch(err=>{
        //         setDisable(false);
        //     })
    };

    return (
        <DashboardLayout>
            <div className="container ps-1 pe-2 mt-2 mb-5">
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <div className="profile-text">
                        <h3>Profile</h3>
                        <h5 className="mt-1">Login Info</h5>
                    </div>
                </div>
                <form 
                    className={`w-100 ${style._smd_login_card} d-block`}
                    onSubmit={ handleSubmit(onSubmit) }
                >
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
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-md-6">

                            <div className={style._smd_form_group}>
                                <label htmlFor="full-name">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    defaultValue={ info?.fullName }
                                    {...register("fullName")}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className={style._smd_form_group}>
                                <label htmlFor="fanduel-username">Fanduel Username</label>
                                <input
                                    type="text"
                                    placeholder="Enter Username"
                                    defaultValue={ info?.fanduelUsername }
                                    {...register("fanduelUsername")}
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
                                    defaultValue={ info?.draftKingsUsername }
                                    {...register("draftKingsUsername")}
                                />
                                <p>Optional. Used for rewards for Sports games and contests.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <button  
                                className="bg-black text-center justify-content-center"
                                type="submit"
                            >Save Changes</button>
                        </div>
                        <div className="col-md-6 ">
                            <button   
                                className="text-center justify-content-center"
                                type="button"
                                onClick={ ()=>router.back() } 
                            >Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default EditProfile;

export const getServerSideProps = __Auth((context) => {
    return {
      props: {},
    };
  });