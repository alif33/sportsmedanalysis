import React from 'react';
import DashboardLayout from '../../../src/components/DashboardLayout';

const PasswordResetEmail = () => {
    return (
        <DashboardLayout>
            <div className="container ps-1 pe-2 mt-2 mb-5 vh-100">
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <div className="profile-text mt-3">
                        <h3>Password reset email sent</h3>
                        <p className="mt-2">We have just sent a password reset link to <b>johndoe@gmail.com</b>. Please double-check that this is the email associated with your account. If you do not receive an email within the next few minutes, this may not be the email address for your account.</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default PasswordResetEmail;