import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppButton from "general/components/AppButton";
import BaseLayout from "general/components/BaseLayout";

import BaseTextField from "general/components/Form/BaseTextField";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { thunkEditProfile } from "app/authSlice";
import "./style.scss";
import { Link } from "react-router-dom";

ChangePassword.propTypes = {
};

ChangePassword.defaultProps = {
};
function ChangePassword(props) {
    const imgLink = 'https://khoinguonsangtao.vn/wp-content/uploads/2022/05/anh-avatar-dep-ngau-hinh-dai-dien-510x560.jpg'

     const dispatch = useDispatch()
     const formik = useFormik({
        initialValues: {
            fullname: '',
            job: '',
        },
        onSubmit: async (values) => {
            const params = { ...values };
            dispatch(thunkEditProfile(params));
        },
        // validationSchema: Yup.object({
        //     email: Yup.string().trim().required('Bạn chưa nhập email').email('Email không hợp lệ'),
        //     password: Yup.string().trim().required('Bạn chưa nhập mật khẩu'),
        // }),
    });

    const loggedInUser = useSelector((state) => state.auth.currentAccount);
    useEffect(() => {
        formik.setFieldValue("fullname", loggedInUser.fullname)
        formik.setFieldValue("job", loggedInUser.job)
        formik.setFieldValue("email", loggedInUser.email)
        formik.setFieldValue("phone", loggedInUser.phone)
        formik.setFieldValue("address", loggedInUser.address)

      }, [loggedInUser]);



    return (
        <BaseLayout>
            <div className="row ps-2 pe-2">
                {/* 
                    View Profile
                */}
                <div className="col-xl-4 col-lg-4 col-md-0 col-sm-0">
                    <div className="row ms-0 me-0 pt-8 ps-4 bg-light-important">

                        {/* 
                            Avatar Profile
                        */}
                        <div className="view-header d-flex p-0 row">
                            <div className="ccol-xl-4 col-lg-4 col-md-3 col-sm-3 pe-2">
                                <img src={imgLink} alt="" className="w-100"/>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-9 col-sm-9 d-flex flex-column">
                                <a href="/" className="fs-4 fw-bold text-dark">{loggedInUser?.fullname}</a>
                                <div className="">{loggedInUser?.job}</div>
                                <div className="d-flex flex-row">
                                    <a href="/" className="view-header-link">
                                        <i className="fas fa-user-plus"></i>
                                    </a>
                                    <a href="/" className="view-header-link">
                                        <i className="fal fa-envelope"></i>
                                    </a>
                                    <a href="/" className="view-header-link">
                                        <i className="far fa-hexagon"></i>
                                    </a>                             
                                </div>
                            </div>
                        </div>

                        {/* 
                            Phone number, Email, Address
                        */}
                        <div className="row pt-8">
                            <div className="col-12 p-0 view-contact-link">
                                <i className="view-contact-icon fas fa-phone"></i>
                                {loggedInUser?.phone}
                            </div>
                            <div className="col-12 p-0">
                                <a href="/" className="view-contact-link">
                                    <i className="view-contact-icon fas fa-envelope"></i>
                                    {loggedInUser.email}
                                </a>
                            </div>
                            <div className="col-12 p-0">
                                <a href="/" className="view-contact-link">
                                    <i className="view-contact-icon fas fa-map-marker-alt"></i>
                                    {loggedInUser?.address}
                                </a>
                            </div>
                        </div>

                    </div>
                
                    {/* 
                        Button links to Personal Information, Change Password
                    */}
                    <div className="row ms-0 me-0 pt-8 ps-4 pe-4 bg-light-important">
                        <div className="col-12 p-0">
                            <Link to="/updateProfile/personalInfo" className="d-inline-flex view-link" >
                                <i className="fas fa-user-alt view-link-icon"></i>
                                <p className="view-link-text">Thông tin khách hàng</p>
                            </Link>
                        </div>

                        <div className="col-12 p-0">
                            <Link to="/updateProfile/personalInfo" className="d-inline-flex view-link view-link-current" >
                                <i className="fas fa-key view-link-icon"></i>
                                <p className="view-link-text">Đổi mật khẩu</p>
                            </Link>
                        </div>
                    </div>
    
                    <div className="bg-light-important p-4"></div>
                </div>

                
                {/* 
                    Edit Profile
                */}
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <div className="row ms-0 me-0 pt-8 ps-4 pe-4 bg-light-important">
                        <div className="col-12 border-bottom">

                            {/* 
                                Header: Text and Button
                            */}
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="fs-4 fw-bold text-dark m-0">Đổi mật khẩu</div>
                                    <p>Thay đổi mật khẩu tài khoản của bạn</p>      
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="row justify-content-end mb-5">
                                        <AppButton 
                                        className="btn-orange p-0 col-5"
                                        text="Lưu lại"
                                        onClick={()=>{
                                            formik.handleSubmit()}}
                                        />
                                        <div className="col-2"></div>
                                        <AppButton 
                                        className="ButtonCancel col-xl-4 col-lg-4 col-md-4 col-sm-5 col-xs-5"
                                        text="Hủy bỏ"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <input type="checkbox" name="" id="input-hidden-warning" className="input-hidden-warning" hidden></input>
                            <div className="row col-12 mt-8 ps-4 pe-4 pt-5 pb-5 m-0 warrning-change">
                                <i className="far fa-info-circle col-1"></i>
                                <p className="col-8 m-0 fs-6 fw-semibold">Định cấu hình mật khẩu người dùng hết hạn định kỳ. Người dùng sẽ cần cảnh báo rằng mật khẩu của họ sắp hết hạn, hoặc họ có thể vô tình bị khóa khỏi hệ thống!</p>
                                <label for="input-hidden-warning" className="col-3">
                                    <i className="far fa-times warrning-change-close"></i>
                                </label>
                            </div>


                            <div className="row mt-8">
                                {/* 
                                    Customer information
                                */}

                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Mật khẩu hiệu tại</div>
                                <div className="d-flex justify-content-start col-xl-7 col-lg-7 col-md-8 col-sm-8 position-relative">
                                    <div className="row">
                                        <BaseTextField
                                        additionalClassName="col-12 pb-0"
                                        name='password'
                                        placeholder='Mật khẩu hiệu tại...'
                                        label=''
                                        fieldHelper={formik.getFieldHelpers('password')}
                                        fieldProps={formik.getFieldProps('password')}
                                        fieldMeta={formik.getFieldMeta('password')}
                                        />
                                        <a href="/request-to-reset-pass" className="col-12 ps-3" style={{top: "-20px", fontWeight: "600"}}>Quên mật khẩu?</a>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Mật khẩu mới</div>
                                <BaseTextField
                                additionalClassName="col-xl-7 col-lg-7 col-md-8 col-sm-8"
                                name='newPassword'
                                label=''
                                placeholder='Mật khẩu mới...'
                                fieldHelper={formik.getFieldHelpers('password')}
                                fieldProps={formik.getFieldProps('password')}
                                fieldMeta={formik.getFieldMeta('password')}
                                />
                                
                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Nhập lại mật khẩu mới</div>
                                <BaseTextField
                                additionalClassName="col-xl-7 col-lg-7 col-md-8 col-sm-8"
                                name='password'
                                label=''
                                placeholder='Nhập lại mật khẩu mới...'
                                fieldHelper={formik.getFieldHelpers('password')}
                                fieldProps={formik.getFieldProps('password')}
                                fieldMeta={formik.getFieldMeta('password')}
                                />
                                
                            </div>
                        </div>
                    </div>

                    <div className="bg-light-important p-4"></div>
                </div>
                
            </div> 
        </BaseLayout>
    );
}

export default ChangePassword;
