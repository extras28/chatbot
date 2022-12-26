import React from "react";
import PropTypes from "prop-types";
import UserHelper from "general/helpers/UserHelper";
import AppResource from "general/constants/AppResource";
import './style.scss'

SummaryUser.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string,
    job: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
};
SummaryUser.defaultProps = {
    avatar: "",
    userName: "",
    job: "",
    email: "",
    address: "",
};

function SummaryUser(props) {
    const { avatar, userName, job, email, address } = props;
    return (
        <div className="col-lg-4 col-md-6 mb-10">
            <div className="bg-white bg-opacity-50 rounded-3 p-10 mx-md-2 h-md-100">
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img
                            className="header-avatar rounded-circle"
                            src={avatar || UserHelper.getRandomAvatarUrl()}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = UserHelper.getRandomAvatarUrl();
                            }}
                            alt="avatar"
                        />
                    </div>
                    <div className="flex-grow-1 mx-2">
                        <p className="fw-bold fs-5 my-0">{userName}</p>
                        <p className="SummaryUser_Infor">{job}</p>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex align-items-center ms-3 mb-2">
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ width: "16px" }}
                        >
                            <i
                                className="fas fa-envelope"
                                style={{
                                    color: AppResource.colors.featureColor
                                }}
                            ></i>
                        </div>
                        <span className="SummaryUser_Infor ps-2">{email}</span>
                    </div>
                    <div className="d-flex align-items-center ms-3 mb-2">
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ width: "16px" }}
                        >
                            <i
                                className="fas fa-map-marker-alt"
                                style={{
                                    color: AppResource.colors.featureColor
                                }}
                            ></i>
                        </div>
                        <span className="SummaryUser_Infor ps-2">{address}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummaryUser;
