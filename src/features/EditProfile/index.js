import React from "react";
import PropTypes from "prop-types";
import AppButton from "general/components/AppButton";
import BaseLayout from "general/components/BaseLayout";

import "./style.scss";

EditProfile.propTypes = {
    imgLink: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    companyName: PropTypes.string,
    phoneContact: PropTypes.string,
    emailAddr: PropTypes.string,
    companySite: PropTypes.string,
    jobName: PropTypes.string,
    addressInfo: PropTypes.string,
};

EditProfile.defaultProps = {
    imgLink : "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/319737059_399685342315519_4930501863227688604_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XJfFNsnU9vQAX9wJIEU&_nc_ht=scontent.fhan17-1.fna&oh=00_AfC7uFKDi240zrPOOpnAiCVvdqmCT5TBwjOP3iBt3wy8rA&oe=63A0F8BA",
    firstName : "Minh",
    lastName : "Dung",
    companyName : "HN University of Science and Technology",
    phoneContact : "+8496789999",
    emailAddr : "dung.tm194258@sis.hust.edu.vn",
    companySite : "https://qldt.hust.edu.vn/#",
    jobName : "Web developer",
    addressInfo : "Ha Tinh",
};
function EditProfile(props) {
    const { 
        imgLink,
        firstName,
        lastName,
        companyName,
        phoneContact,
        emailAddr,
        companySite,
        jobName,
        addressInfo,
     } = props;
    return (
        <BaseLayout>
            <div className="row ps-2 pe-2">
                {/* 
                    View Profile
                */}
                <div className="col-xl-4 col-lg-4 col-md-0 col-sm-0">
                    <div className="row ms-0 me-0 pt-8 ps-4 bg-light-important">
                        <div className="view-header d-flex p-0 row">
                            <div className="ccol-xl-4 col-lg-4 col-md-3 col-sm-3 pe-2">
                                <img src={imgLink} alt="" className="w-100"/>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-9 col-sm-9 d-flex flex-column">
                                <a href="/test" className="fs-4 fw-bold text-dark">{firstName + " " + lastName}</a>
                                <div className="">{jobName}</div>
                                <div className="d-flex flex-row">
                                    <a href="/test" className="view-header-link">
                                        <i class="fas fa-user-plus"></i>
                                    </a>
                                    <a href="/test" className="view-header-link">
                                        <i class="fal fa-envelope"></i>
                                    </a>
                                    <a href="/test" className="view-header-link">
                                        <i class="far fa-hexagon"></i>
                                    </a>                             
                                </div>
                            </div>
                        </div>
                        <div className="row pt-8">
                            <div className="col-12 p-0 view-contact-link">
                                <i class="view-contact-icon fas fa-phone"></i>
                                {phoneContact}
                            </div>
                            <div className="col-12 p-0">
                                <a href="/test" className="view-contact-link">
                                    <i class="view-contact-icon fas fa-envelope"></i>
                                    {emailAddr}
                                </a>
                            </div>
                            <div className="col-12 p-0">
                                <a href="/test" className="view-contact-link">
                                    <i class="view-contact-icon fas fa-map-marker-alt"></i>
                                    {addressInfo}
                                </a>

                            </div>
                        </div>
                    </div>
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
                            <div className="row">
                                <div className="col-xl-0 col-lg-4 col-md-4 col-sm-0"></div>
                                <div className="col-xl-12 col-lg-8 col-md-8 col-sm-12 col-xs-12 fs-4 fw-semibold text-dark mb-6 mt-7">Thông tin khách hàng</div>
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
                                                    <i class="fas fa-pen"></i>
                                                </div>
                                            </label>
                                            <input className="avatar-file-input" id="avatar-input" type="file" />
                                            
                                            <div className="avatar-delete">
                                                <button className="avatar-delete-btn">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3 mb-6 text-muted">Các loại tệp được cho phép: png, jpg, jpeg.</div>
                                       
                                    </div>
                                </div>


                                {/* 
                                    Customer information
                                */}
                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Họ</div>
                                <div className="d-flex justify-content-start col-xl-8 col-lg-8 col-md-9 col-sm-9 mb-6">
                                    <input className="edit-input col-xl-10 col-lg-10 col-md-12 col-sm-12" id="firstname-input" type="text" />
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Tên</div>
                                <div className="d-flex justify-content-start col-xl-8 col-lg-8 col-md-9 col-sm-9 mb-6">
                                    <input className="edit-input col-xl-10 col-lg-10 col-md-12 col-sm-12" id="lastname-input" type="text" />
                                </div>
                                
                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Tên công ty</div>
                                <div className="d-flex justify-content-start col-xl-8 col-lg-8 col-md-9 col-sm-9 mb-6">
                                    <div className="row ps-3 pe-3">
                                        <input className="edit-input col-xl-10 col-lg-10 col-md-12 col-sm-12" id="companyname-input" type="text" />
                                        <div className="col-8 p-0 text-muted">Nếu bạn muốn hóa đơn của bạn được gửi đến một công ty. Để trống để sử dụng tên đầy đủ của bạn.</div>
                                    </div>
                                </div>
                                
                                {/* 
                                    Contact information
                                 */}
                                <div className="col-4"></div>
                                <div className="col-8 fs-4 fw-semibold text-dark mb-6 mt-8">Thông tin liên hệ</div>

                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Điện thoại</div>
                                <div className="d-flex justify-content-start col-xl-8 col-lg-8 col-md-9 col-sm-9 mb-6 position-relative">
                                    <input className="edit-input col-xl-10 col-lg-10 col-md-12 col-sm-12 ps-5" id="phone-input" type="text" />
                                    <i class="far fa-phone-alt edit-input-icon"></i>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Email</div>
                                <div className="d-flex justify-content-start col-xl-8 col-lg-8 col-md-9 col-sm-9 mb-6 position-relative">
                                    <div className="row ps-3 pe-3">
                                        <input className="edit-input col-xl-10 col-lg-10 col-md-12 col-sm-12 ps-5" id="email-input" type="email" />
                                        <i class="far fa-at p-0 m-0 edit-input-icon"></i>
                                        <div className="col-8 p-0 text-muted">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 fs-6 label-input">Website công ty</div>
                                <div className="d-flex justify-content-start col-xl-8 col-lg-8 col-md-9 col-sm-9 mb-6 position-relative">
                                    <input className="edit-input col-xl-10 col-lg-10 col-md-12 col-sm-12" id="company-website-input" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
        </BaseLayout>
    );
}

export default EditProfile;
