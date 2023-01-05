import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Utils from "general/utils/Utils";
import UserHelper from "general/helpers/UserHelper";
import { useFormik } from "formik";
import BaseTextField from "general/components/Form/BaseTextField";
import BaseDropdown from "general/components/Form/BaseDropdown";
import AppData from "general/constants/AppData";
import * as Yup from "yup";
import authApi from "api/authApi";
import ToastHelper from "general/helpers/ToastHelper";
import { thunkGetAccountInfor } from "app/authSlice";
import Loading from "general/components/Loading";

AccountProfile.propTypes = {};

function AccountProfile(props) {
    // MARK --- Params ---
    const { currentAccount } = useSelector((state) => state?.auth);
    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            fullname: "",
            job: "",
            dob: "",
            phone: "",
            gender: "",
            address: "",
        },
        onSubmit: async (values) => {
            try {
                setLoading(true);
                const res = await authApi.updateProfile(values);
                const { result } = res;
                if (result === "success") {
                    dispatch(thunkGetAccountInfor());
                    setLoading(false);
                    ToastHelper.showSuccess("Cập nhật thông tin cá nhân thành công");
                    setIsEditMode(false);
                } else {
                    setLoading(false);
                    ToastHelper.showError("Cập nhật thông tin thất bại");
                }
            } catch (error) {
                console.log(error.message);
                ToastHelper.showError("Cập nhật thông tin thất bại");
            }
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Bạn chưa nhập họ tên"),
        }),
    });

    // MARK --- Hooks: ---
    useEffect(() => {
        if (currentAccount) {
            formik.getFieldHelpers("fullname").setValue(currentAccount?.fullname);
            formik.getFieldHelpers("job").setValue(currentAccount?.job);
            formik.getFieldHelpers("dob").setValue(currentAccount?.dob);
            formik.getFieldHelpers("phone").setValue(currentAccount?.phone);
            formik.getFieldHelpers("gender").setValue(currentAccount?.gender);
            formik.getFieldHelpers("address").setValue(currentAccount?.address);
        }
    }, [currentAccount]);
    return (
        <div className='card mb-5 mb-xl-10 position-relative'>
            {loading && (
                <div className='d-flex align-items-center justify-content-center position-absolute w-100'>
                    <Loading showBackground={false} message='Vui lòng chờ' />
                </div>
            )}
            {/* header */}
            <div class='card-header cursor-pointer d-flex flex-wrap justify-content-between align-items-center'>
                <div class='card-title m-0'>
                    <h3 class='fw-bold m-0'>Thông tin cá nhân</h3>
                </div>
                {isEditMode ? (
                    <div>
                        <div class='btn btn-sm btn-danger align-self-center mr-4' onClick={() => setIsEditMode(false)}>
                            Hủy
                        </div>
                        <div class='btn btn-sm btn-success align-self-center' onClick={formik.handleSubmit}>
                            Lưu lại
                        </div>
                    </div>
                ) : (
                    <div class='btn btn-sm btn-primary align-self-center' onClick={() => setIsEditMode(true)}>
                        Chỉnh sửa
                    </div>
                )}
            </div>

            {/* body */}
            <div className='card-body p-9'>
                <div class='row mb-7'>
                    <label class='col-lg-4 fw-semibold text-muted'>Email</label>
                    <div class='col-lg-8'>
                        <span class='fw-bold fs-6 text-gray-800'>{currentAccount?.email}</span>
                    </div>
                </div>
                <div class='row mb-7'>
                    <label class='col-lg-4 fw-semibold text-muted'>Họ tên</label>
                    <div class='col-lg-8'>
                        {!isEditMode ? (
                            <span class='fw-bold fs-6 text-gray-800'>{currentAccount?.fullname}</span>
                        ) : (
                            <div className='max-w-200px'>
                                <BaseTextField
                                    className=''
                                    name='fullname'
                                    fieldHelper={formik.getFieldHelpers("fullname")}
                                    fieldMeta={formik.getFieldMeta("fullname")}
                                    fieldProps={formik.getFieldProps("fullname")}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div class='row mb-7'>
                    <label class='col-lg-4 fw-semibold text-muted'>Vai trò</label>
                    <div class='col-lg-8'>
                        {!isEditMode ? (
                            <span class='fw-bold fs-6 text-gray-800'>{currentAccount?.job}</span>
                        ) : (
                            <div className='max-w-200px'>
                                <BaseTextField
                                    className=''
                                    name='job'
                                    fieldHelper={formik.getFieldHelpers("job")}
                                    fieldMeta={formik.getFieldMeta("job")}
                                    fieldProps={formik.getFieldProps("job")}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div class='row mb-7'>
                    <label class='col-lg-4 fw-semibold text-muted'>Ngày sinh</label>
                    <div class='col-lg-8'>
                        {!isEditMode ? (
                            <span class='fw-bold fs-6 text-gray-800'>
                                {Utils.formatDateTime(currentAccount?.dob, "DD-MM-YYYY")}
                            </span>
                        ) : (
                            <div className='max-w-200px'>
                                <BaseTextField
                                    className=''
                                    type='date'
                                    name='dob'
                                    fieldHelper={formik.getFieldHelpers("dob")}
                                    fieldMeta={formik.getFieldMeta("dob")}
                                    fieldProps={formik.getFieldProps("dob")}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div class='row mb-7'>
                    <label class='col-lg-4 fw-semibold text-muted'>Số điện thoại</label>
                    <div class='col-lg-8'>
                        {!isEditMode ? (
                            <span class='fw-bold fs-6 text-gray-800'>{currentAccount?.phone}</span>
                        ) : (
                            <div className='max-w-200px'>
                                <BaseTextField
                                    className=''
                                    name='phone'
                                    fieldHelper={formik.getFieldHelpers("phone")}
                                    fieldMeta={formik.getFieldMeta("phone")}
                                    fieldProps={formik.getFieldProps("phone")}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div class='row mb-7'>
                    <label class='col-lg-4 fw-semibold text-muted'>Giới tính</label>
                    <div class='col-lg-8'>
                        {!isEditMode ? (
                            <span class='fw-bold fs-6 text-gray-800'>
                                {UserHelper.renderGender(currentAccount?.gender)}
                            </span>
                        ) : (
                            <div className='max-w-150px'>
                                <BaseDropdown
                                    options={AppData.genderOptions}
                                    dropdownInitialValue={UserHelper.renderGender(currentAccount?.gender)}
                                    className=''
                                    name='gender'
                                    fieldHelper={formik.getFieldHelpers("gender")}
                                    fieldMeta={formik.getFieldMeta("gender")}
                                    fieldProps={formik.getFieldProps("gender")}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div class='row mb-7'>
                    <label class='col-lg-4 fw-semibold text-muted'>Địa chỉ</label>
                    <div class='col-lg-8'>
                        {!isEditMode ? (
                            <span class='fw-bold fs-6 text-gray-800'>{currentAccount?.address}</span>
                        ) : (
                            <div className='max-w-200px'>
                                <BaseTextField
                                    className=''
                                    name='address'
                                    fieldHelper={formik.getFieldHelpers("address")}
                                    fieldMeta={formik.getFieldMeta("address")}
                                    fieldProps={formik.getFieldProps("address")}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountProfile;
