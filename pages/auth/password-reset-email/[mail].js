import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthLayout from "../../../src/components/AuthLayout";
import { _decrypt } from '../../../__lib__/helpers/Validator';

const PasswordResetEmail = () => {
    const [email, setEmail] = useState();
    const router = useRouter();

    useEffect(() => {
        setEmail(_decrypt(router.query.mail));
        
        if (router.query.mail) {
            console.log(router.query.mail);
        } else {
            router.push('/404');
        }
    }, [])

    if (router.query.mail) {
        return (
            <AuthLayout>
                <div className="container ps-1 pe-2 mt-2 mb-5 vh-100">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <div className="profile-text mt-3">
                            <h3>Password reset email sent</h3>
                            <p className="mt-2">We have just sent a password reset link to <b>{email}</b>. Please double-check that this is the email associated with your account. If you do not receive an email within the next few minutes, this may not be the email address for your account.</p>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        );
    } else {
        <></>
    }

};

export default PasswordResetEmail;

