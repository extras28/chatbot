import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import BaseLayout from "general/components/BaseLayout";
import BaseTextField from "general/components/Form/BaseTextField";
import { useFormik } from "formik";
import HeaderLandingPage from "general/components/HeaderLandingPage";
import AuthContent from "../components/AuthContent";
import AppButton from "general/components/AppButton";
SignInScreen.propTypes = {

};

function SignInScreen(props) {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
    })

    return (
        <div className='SignInScreen min-vh-100 bg-light'>
            {/* Header */}
            <HeaderLandingPage />
            <AuthContent 
                leftTitle="CodeHelper"
                leftDescription="Hơn 15000 câu hỏi đang chờ đợi sự trợ giúp của bạn"
                leftElement={(
                    <div>
                        {/* email input */}
                        <div>
                            <BaseTextField
                                name='email'
                                placeholder='Nhập email...'
                                label='Email'
                                fieldHelper={formik.getFieldHelpers('email')}
                                fieldProps={formik.getFieldProps('email')}
                                fieldMeta={formik.getFieldMeta('email')}
                            />
                        </div>

                        {/* password input */}
                        <div>
                            <BaseTextField
                                name='password'
                                placeholder='Nhập mật khẩu...'
                                label='Mật khẩu'
                                type='password'
                                fieldHelper={formik.getFieldHelpers('password')}
                                fieldProps={formik.getFieldProps('password')}
                                fieldMeta={formik.getFieldMeta('password')}
                            />
                        </div>

                        {/* sign in button */}
                        <AppButton 
                            className="btn-orange w-100 mt-10"
                            text="Đăng nhập"
                        />
                    </div>
                )}
            />
        </div>
    );
}

export default SignInScreen;