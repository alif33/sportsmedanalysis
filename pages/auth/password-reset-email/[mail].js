import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthLayout from "../../../src/components/AuthLayout";
import { cryptr } from '../../../__lib__/helpers/Hashing';

const PasswordResetEmail = () => {

    const router = useRouter();

    useEffect(()=>{
        if(router.query.mail){
            console.log(router.query.mail);
        }else{
            router.push('/');
            
            // setEmail(cryptr.decrypt(router.query.mail));
        }
        // console.log(router.query?.mail);
    }, [])

    if(router.query.mail){
        return (
            <AuthLayout>
                <div className="container ps-1 pe-2 mt-2 mb-5 vh-100">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <div className="profile-text mt-3">
                            <h3>Password reset email sent</h3>
                            <p className="mt-2">We have just sent a password reset link to <b>{ cryptr.decrypt(router.query.mail) }</b>. Please double-check that this is the email associated with your account. If you do not receive an email within the next few minutes, this may not be the email address for your account.</p>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        );
    }else{
        <></>
    }

};

export default PasswordResetEmail;

