import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import BaseLayout from "general/components/BaseLayout";
import BaseTextField from "general/components/Form/BaseTextField";
import { useFormik } from "formik";
import HeaderLandingPage from "general/components/HeaderLandingPage";
import AuthContent from "../components/AuthContent";
import AppButton from "general/components/AppButton";
import Utils from "general/utils/Utils";
import * as Yup from 'yup';
import ToastHelper from "general/helpers/ToastHelper";
SignInScreen.propTypes = {

};

const sTag = '[SignInScreen]';

function SignInScreen(props) {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            const params = { ...values };
            let inputPassword = params.password;
            params.password = Utils.sha256(inputPassword);
            try {
                console.log(params);
                ToastHelper.showSuccess('Đăng nhập thành công')
                // const res = unwrapResult(await dispatch(thunkSignIn(params)));
                // if (res) {
                //     const displayName = UserHelper.getDisplayName(res.account);
                //     ToastHelper.showSuccess(`Xin chào, ${displayName}`);
                //     navigate(-1);
                // }
            } catch (error) {
                console.log(`${sTag} loggin error: ${error.message}`);
                // ToastHelper.showError('Đăng nhập không thành công');
            }
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Bạn chưa nhập email').email('Email không hợp lệ'),
            password: Yup.string().required('Bạn chưa nhập mật khẩu'),
        }),
    })

    return (
        <div className='SignInScreen min-vh-100 bg-light'>
            {/* Header */}
            <HeaderLandingPage />
            <AuthContent 
                leftTitle="CodeHelper"
                leftDescription="Hơn 15000 câu hỏi đang chờ đợi sự trợ giúp của bạn"
                leftElement={(
                    <form onSubmit={formik.handleSubmit}>
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
                    </form>
                )}
            />
        </div>
    );
}

export default SignInScreen;