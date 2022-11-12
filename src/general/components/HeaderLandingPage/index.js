import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../../assets/images/icon.png";
import avatar from "../../../assets/images/avatar.png";
import "./style.scss";
HeaderLandingPage.propTypes = {
    loggedIn: PropTypes.bool,
};

HeaderLandingPage.defaultProps = {
    loggedIn: false,
};

function HeaderLandingPage(props) {
    const { loggedIn } = props;
    return (
        <div className="HeaderLandingPage d-flex sticky-top justify-content-between align-items-center shadow-sm px-5 py-4 ps-5 bg-body rounded">
            <NavLink to="/" className="text-decoration-none text-black">
                <div className="d-flex align-items-end fs-5 fw-normal ">
                    <img className="me-3" src={logo} alt="" />
                    <div className="d-none d-sm-flex">
                        Code<div className="fw-bolder">Helper</div>
                    </div>
                </div>
            </NavLink>
            {!loggedIn && (
                <div>
                    {/* Screen >= 576px */}
                    <div className="d-none d-sm-block">
                        <NavLink to="/sign-up">
                            <button type="button" className="ButtonPrimary">
                                <i className="far fa-user-plus me-2 text-white"></i>
                                Đăng ký
                            </button>
                        </NavLink>
                        <NavLink to="/sign-in">
                            <button type="button" className="ButtonCancel ms-3">
                                Đăng nhập
                            </button>
                        </NavLink>
                    </div>
                    {/* Screen < 576px */}
                    <div className="d-flex d-sm-none">
                        <input type="checkbox" id="dropdownMenu-notLoggedIn" />
                        <label
                            for="dropdownMenu-notLoggedIn"
                            id="overlay-button"
                        >
                            <span></span>
                        </label>
                        <div id="overlay">
                            <ul className="d-flex flex-column justify-content-center align-items-center ps-0 m-0">
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        Trang chủ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        Giới thiệu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        Liên hệ
                                    </NavLink>
                                </li>
                                <li className="border-bottom-0 py-4">
                                    <NavLink to="/sign-up">
                                        <button
                                            type="button"
                                            className="ButtonPrimary py-2 px-7"
                                        >
                                            Đăng ký
                                        </button>
                                    </NavLink>
                                    <NavLink to="/sign-in">
                                        <button
                                            type="button"
                                            className="ButtonCancel py-2 ms-3"
                                        >
                                            Đăng nhập
                                        </button>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {loggedIn && (
                <div>
                    {/* Screen >= 576px */}
                    <div className="d-none d-sm-flex align-items-center justify-content-between">
                        <NavLink to="">
                            <button type="button" className="ButtonPrimary">
                                <i className="far fa-plus-circle me-3 text-white"></i>
                                Thêm câu hỏi
                            </button>
                        </NavLink>
                        <div className="bell mx-5">
                            <i className="far fa-bell"></i>
                            <div></div>
                        </div>
                        <label for="dropdownMenuButton">
                            <img
                                className="header-avatar"
                                src={avatar}
                                alt=""
                            />
                            <button
                                className="show-option"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-sort-down"></i>
                            </button>

                            <ul
                                className="dropdown-menu my-4"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <li>
                                    <a className="dropdown-item pe-5" href="#">
                                        Thông tin cá nhân
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Đổi mật khẩu
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </label>
                    </div>

                    {/* Screen < 576px */}
                    <div className="d-flex d-sm-none">
                        <input type="checkbox" id="dropdownMenu-loggedIn" />
                        <label
                            for="dropdownMenu-loggedIn"
                            id="overlay-button"
                        >
                            <span></span>
                        </label>
                        <div id="overlay">
                            <ul className="d-flex flex-column justify-content-center align-items-center ps-0 m-0 text-start">
                                <li>
                                    <div className="d-flex flex-column align-items-center py-4">
                                        <img className="header-sm-avatar" src={avatar} alt=""/>
                                        <div className="fs-6 fw-bold pt-2">Nguyễn Quang Dũng</div>
                                    </div>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i class="far fa-user-circle mr-4"></i>
                                        Thông tin cá nhân
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i class="far fa-plus-circle mr-4"></i>
                                        Thêm câu hỏi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i class="far fa-bell mr-4"></i>
                                        Thông báo
                                        <div className="notificationNumber ms-auto text-white rounded-circle">2</div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i class="far fa-unlock-alt mr-4"></i>
                                        Đổi mật khẩu
                                    </NavLink>
                                </li>
                                <li className="border-bottom-0">
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i class="far fa-sign-out mr-4"></i>
                                        Đăng xuất
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderLandingPage;
