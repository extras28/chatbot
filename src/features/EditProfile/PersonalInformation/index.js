import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppButton from "general/components/AppButton";
import BaseLayout from "general/components/BaseLayout";

import BaseTextField from "general/components/Form/BaseTextField";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { thunkEditProfile } from "app/authSlice";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import ToastHelper from "general/helpers/ToastHelper";

PersonalInformation.propTypes = {
};

PersonalInformation.defaultProps = {
};


function PersonalInformation(props) {
    const imgLink = 'https://khoinguonsangtao.vn/wp-content/uploads/2022/05/anh-avatar-dep-ngau-hinh-dai-dien-510x560.jpg'
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const formik = useFormik({
        initialValues: {
            fullname: '',
            job: '',
            email: '',
            phone: '',
            address: '',
        },
        onSubmit: async (values) => {
            const params = { ...values };
            try {
                const res = unwrapResult(await dispatch(thunkEditProfile(params)));
                if (res) {
                    ToastHelper.showSuccess(`Lưu thông tin thành công`);
                    window.location.reload(false);
                }
            } catch (error) {
                console.log(`Error: ${error.message}`);
                // ToastHelper.showError('Đăng nhập không thành công');
            }
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
                            <Link to="/updateProfile/personalInfo" className="d-inline-flex view-link view-link-current" >
                                <i className="fas fa-user-alt view-link-icon"></i>
                                <p className="view-link-text">Thông tin khách hàng</p>
                            </Link>
                        </div>

                        <div className="col-12 p-0">
                            <Link to="/updateProfile/changePassword" className="d-inline-flex view-link" >
                                <i className="fas fa-key view-link-icon"></i>
                                <p className="view-link-text">Đổi mật khẩu</p>
                            </Link>
                        </div>
                    </div>
    
                    <div className="bg-light-important p-4"></div>
                </div>


                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <div className="row ms-0 me-0 pt-8 ps-4 pe-4 bg-light-important">
                        <div className="col-12 border-bottom">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="fs-4 fw-bold text-dark m-0">Thông tin cá nhân</div>
                                    <p>Cập nhật thông tin cá nhân</p>      
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
                                        onClick={()=>{
                                            window.location.reload(false);
                                        }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="row">
                                <div className="col-4"></div>
                                <div className="col-8 fs-4 fw-semibold text-dark mb-6 mt-8">Thông tin khách hàng</div>
                                {/* <div className="col-xl-0 col-lg-4 col-md-4 col-sm-0"></div>
                                <div className="col-xl-12 col-lg-8 col-md-8 col-sm-12 col-xs-12 fs-4 fw-semibold text-dark mb-6 mt-7">Thông tin khách hàng</div> */}
                                {/* 
                                    Edit Avatar
                                */}
                                <div className="d-flex justify-content-end col-xl-4 col-lg-4 col-md-3 col-sm-3 mt-5 fs-6">Ảnh</div>
                                <div className="d-flex justify-content-start col-xl-8 col-lg-8 col-md-9 col-sm-9">
                                    <div className="position-relative row">
                                        <div className="col-4">
                                            <img src={imgLink} alt="" className="w-100"/>

                                            <label for="avatar-input">
                                                <div className="avatar-file-input--icon">
                                                    <i className="fas fa-pen"></i>
                                                </div>
                                            </label>
                                            <input className="avatar-file-input" id="avatar-input" type="file" />
                                            
                                            <div className="avatar-delete">
                                                <button className="avatar-delete-btn">
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3 mb-6 text-muted">Các loại tệp được cho phép: png, jpg, jpeg.</div>
                                       
                                    </div>
                                </div>


                                {/* 
                                    Customer information
                                */}
                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Họ và tên</div>
                                <BaseTextField
                                additionalClassName="col-xl-7 col-lg-7 col-md-8 col-sm-8"
                                name='fullname'
                                label=''
                                placeholder='Họ và tên...'
                                fieldHelper={formik.getFieldHelpers('fullname')}
                                fieldProps={formik.getFieldProps('fullname')}
                                fieldMeta={formik.getFieldMeta('fullname')}
                                />
                                

                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Công việc</div>
                                <BaseTextField
                                additionalClassName="col-xl-7 col-lg-7 col-md-8 col-sm-8 mb-6"
                                name='job'
                                placeholder='Công việc...'
                                label=''
                                fieldHelper={formik.getFieldHelpers('job')}
                                fieldProps={formik.getFieldProps('job')}
                                fieldMeta={formik.getFieldMeta('job')}
                                /> 

                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Địa chỉ</div>
                                <BaseTextField
                                additionalClassName="col-xl-7 col-lg-7 col-md-8 col-sm-8"
                                name='address'
                                placeholder='Địa chỉ...'
                                label=''
                                fieldHelper={formik.getFieldHelpers('address')}
                                fieldProps={formik.getFieldProps('address')}
                                fieldMeta={formik.getFieldMeta('address')}
                                />
                                
                                {/* 
                                    Contact information
                                */}

                                <div className="col-4"></div>
                                <div className="col-8 fs-4 fw-semibold text-dark mb-6 mt-8">Thông tin liên hệ</div>

                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Điện thoại</div>
                                <BaseTextField
                                additionalClassName="col-xl-7 col-lg-7 col-md-8 col-sm-8"
                                name='phoneNumber'
                                placeholder='Số điện thoại...'
                                label=''
                                fieldHelper={formik.getFieldHelpers('phone')}
                                fieldProps={formik.getFieldProps('phone')}
                                fieldMeta={formik.getFieldMeta('phone')}
                                />

                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Email</div>
                                <div className="d-flex justify-content-start col-xl-7 col-lg-7 col-md-8 col-sm-8 position-relative">
                                    <div className="row">
                                        <BaseTextField
                                        additionalClassName="col-12 pb-0"
                                        name='email'
                                        placeholder='Email...'
                                        disabled = 'true'
                                        label=''
                                        fieldHelper={formik.getFieldHelpers('email')}
                                        fieldProps={formik.getFieldProps('email')}
                                        fieldMeta={formik.getFieldMeta('email')}
                                        />
                                        <div className="col-12 ps-3 text-muted" style={{top: "-20px"}}>Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
        </BaseLayout>
    );
}

export default PersonalInformation;
