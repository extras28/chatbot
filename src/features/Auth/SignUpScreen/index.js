import React from "react";
import PropTypes from "prop-types";
import HeaderLandingPage from "general/components/HeaderLandingPage";
import imgRegister from "../../../assets/images/ImageRegister.png";
import "./style.scss";
import AuthContent from "../components/AuthContent";
import AppResource from "general/constants/AppResource";
import { useFormik } from "formik";
import BaseTextField from "general/components/Form/BaseTextField";
import AppButton from "general/components/AppButton";
SignUpScreen.propTypes = {};

function SignUpScreen(props) {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    })
    return (
        <div className="SignUpScreen min-vh-100">
            <HeaderLandingPage />
            <AuthContent 
                leftTitle="Tham gia vào cộng đồng CodeHelper"
                leftDescription="Học hỏi và thu nạp nhiều kiến thức hơn với cộng đồng của những lập trình viên vừa có tâm vừa có tầm"
                authImage={AppResource.images.imgSignUp}
                leftElement={(
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
                                name='conrfirmPassword'
                                placeholder='Nhập lại mật khẩu...'
                                label='Nhập lại mật khẩu'
                                fieldHelper={formik.getFieldHelpers('conrfirmPassword')}
                                fieldProps={formik.getFieldProps('conrfirmPassword')}
                                fieldMeta={formik.getFieldMeta('conrfirmPassword')}
                            />
                        </div>
                        <AppButton 
                            className="btn-orange mt-10 w-100"
                            text="Đăng ký"
                        />
                    </div>
                )}
            />
        </div>
    );
}

export default SignUpScreen;
