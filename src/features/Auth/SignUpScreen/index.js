import React from "react";
import PropTypes from "prop-types";
import HeaderLandingPage from "general/components/HeaderLandingPage";
import "./style.scss";
import AuthContent from "../components/AuthContent";
import AppResource from "general/constants/AppResource";
import { useFormik } from "formik";
import BaseTextField from "general/components/Form/BaseTextField";
import AppButton from "general/components/AppButton";
import * as Yup from 'yup';
import ToastHelper from "general/helpers/ToastHelper";
import Utils from "general/utils/Utils";
SignUpScreen.propTypes = {};

function SignUpScreen(props) {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async (values) => {
            const params = {
                ...values
            };
            delete params?.confirmPassword;
            params.password = Utils.sha256(params.password);
            try {
                console.log(params);
                ToastHelper.showSuccess('Đăng ký thành công')
            } catch (error) {
                ToastHelper.showError('Đăng ký không thành công');
                console.log(error);
            }
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Bạn chưa nhập email').email('Email không hợp lệ'),
            password: Yup.string().required('Bạn chưa nhập mật khẩu').min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự').matches(/^\S*$/, 'Mật khẩu không được chứa khoảng trắng'),
            fullname: Yup.string().required('Bạn chưa nhập họ tên'),
            confirmPassword: Yup.string()
            .required('Bạn chưa xác nhận mật khẩu')
            .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
        }),
    })
    return (
        <div className="SignUpScreen min-vh-100">
            <HeaderLandingPage />
            <AuthContent 
                leftTitle="Tham gia vào cộng đồng CodeHelper"
                leftDescription="Học hỏi và thu nạp nhiều kiến thức hơn với cộng đồng của những lập trình viên vừa có tâm vừa có tầm"
                authImage={AppResource.images.imgSignUp}
                leftElement={(
                   <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div>
                                <BaseTextField 
                                    name='fullname'
                                    placeholder='Nhập Họ tên...'
                                    label='Họ tên'
                                    fieldHelper={formik.getFieldHelpers('fullname')}
                                    fieldProps={formik.getFieldProps('fullname')}
                                    fieldMeta={formik.getFieldMeta('fullname')}
                                />
                            </div>
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
                            <div>
                                <BaseTextField 
                                    name='password'
                                    placeholder='Nhập mật khẩu...'
                                    label='Mật khẩu'
                                    fieldHelper={formik.getFieldHelpers('password')}
                                    fieldProps={formik.getFieldProps('password')}
                                    fieldMeta={formik.getFieldMeta('password')}
                                />
                            </div>
                            <div>
                                <BaseTextField 
                                    name='confirmPassword'
                                    placeholder='Nhập lại mật khẩu...'
                                    label='Nhập lại mật khẩu'
                                    fieldHelper={formik.getFieldHelpers('confirmPassword')}
                                    fieldProps={formik.getFieldProps('confirmPassword')}
                                    fieldMeta={formik.getFieldMeta('confirmPassword')}
                                />
                            </div>
                            <AppButton 
                                className="btn-orange mt-10 w-100"
                                text="Đăng ký"
                            />
                        </div>
                   </form>
                )}
            />
        </div>
    );
}

export default SignUpScreen;