import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import avatar from "../../../assets/images/avatar.png";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";
HeaderLandingPage.propTypes = {
    loggedIn: PropTypes.bool,
};

HeaderLandingPage.defaultProps = {
    loggedIn: false,
};

function HeaderLandingPage(props) {
    const loggedIn = UserHelper.checkAccessTokenValid();
    return (
        <div className='HeaderLandingPage d-flex sticky-top justify-content-end align-items-center shadow-sm px-5 py-4 ps-5 bg-body' style={{zIndex: '1000'}}>
            
            {!loggedIn && (
                <div>
                    {/* Screen >= 576px */}
                    <div className='d-none d-md-block'>
                        <NavLink to='/sign-up'>
                            <button
                                type='button'
                                className='ButtonPrimary'
                            >
                                <i className='far fa-user-plus me-2 text-white'></i>
                                Đăng ký
                            </button>
                        </NavLink>
                        <NavLink to='/sign-in'>
                            <button
                                type='button'
                                className='ButtonCancel ms-3'
                            >
                                Đăng nhập
                            </button>
                        </NavLink>
                    </div>
                    {/* Screen < 576px */}
                    <div className='d-flex d-md-none'>
                        <input
                            type='checkbox'
                            id='dropdownMenu-notLoggedIn'
                        />
                        <label
                            htmlFor='dropdownMenu-notLoggedIn'
                            id='overlay-button'
                        >
                            <span></span>
                        </label>
                        <div id='overlay'>
                            <ul className='d-flex flex-column justify-content-center align-items-center ps-0 m-0'>
                                <li>
                                    <NavLink
                                        className='dropdownMenuItem'
                                        to='#'
                                    >
                                        Trang chủ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className='dropdownMenuItem'
                                        to='#'
                                    >
                                        Giới thiệu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className='dropdownMenuItem'
                                        to='#'
                                    >
                                        Liên hệ
                                    </NavLink>
                                </li>
                                <li className='border-bottom-0 py-4'>
                                    <NavLink to='/sign-up'>
                                        <button
                                            type='button'
                                            className='ButtonPrimary py-2 px-7'
                                        >
                                            Đăng ký
                                        </button>
                                    </NavLink>
                                    <NavLink to='/sign-in'>
                                        <button
                                            type='button'
                                            className='ButtonCancel py-2 ms-3'
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
                    <div className='d-none d-sm-flex align-items-center justify-content-between'>
                        <NavLink to=''>
                            <button
                                type='button'
                                className='ButtonPrimary'
                            >
                                <i className='far fa-plus-circle me-3 text-white'></i>
                                Thêm câu hỏi
                            </button>
                        </NavLink>
                        <div className='bell mx-5'>
                            <i className='far fa-bell'></i>
                            <div></div>
                        </div>
                        <label htmlhtmlFor='dropdownMenuButton'>
                            <img
                                className='header-avatar'
                                src={avatar}
                                alt=''
                            />
                            <button
                                className='show-option'
                                id='dropdownMenuButton'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                <i className='fas fa-sort-down'></i>
                            </button>

                            <ul
                                className='dropdown-menu my-4'
                                aria-labelledby='dropdownMenuButton'
                            >
                                <li>
                                    <a
                                        className='dropdown-item pe-5'
                                        href='#'
                                    >
                                        Thông tin cá nhân
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdown-item'
                                        href='#'
                                    >
                                        Đổi mật khẩu
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdown-item'
                                        href='#'
                                    >
                                        Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </label>
                    </div>

                    {/* Screen < 576px */}
                    <div className='d-flex d-sm-none'>
                        <input
                            type='checkbox'
                            id='dropdownMenu-loggedIn'
                        />
                        <label
                            htmlFor='dropdownMenu-loggedIn'
                            id='overlay-button'
                        >
                            <span></span>
                        </label>
                        <div id='overlay'>
                            <ul className='d-flex flex-column justify-content-center align-items-center ps-0 m-0 text-start'>
                                <li>
                                    <div className='d-flex flex-column align-items-center py-4'>
                                        <img
                                            className='header-sm-avatar'
                                            src={avatar}
                                            alt=''
                                        />
                                        <div className='fs-6 fw-bold pt-2'>
                                            Nguyễn Quang Dũng
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <NavLink
                                        className='dropdownMenuItem'
                                        to='#'
                                    >
                                        <i className='far fa-user-circle mr-4'></i>
                                        Thông tin cá nhân
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className='dropdownMenuItem'
                                        to='#'
                                    >
                                        <i className='far fa-plus-circle mr-4'></i>
                                        Thêm câu hỏi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className='dropdownMenuItem'
                                        to='#'
                                    >
                                        <i className='far fa-bell mr-4'></i>
                                        Thông báo
                                        <div className='notificationNumber ms-auto text-white rounded-circle'>
                                            2
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className='dropdownMenuItem'
                                        to='#'
                                    >
                                        <i className='far fa-unlock-alt mr-4'></i>
                                        Đổi mật khẩu
                                    </NavLink>
                                </li>
                                <li className='border-bottom-0'>
                                    <NavLink
                                        className='dropdownMenuItem'
                                        to='#'
                                    >
                                        <i className='far fa-sign-out mr-4'></i>
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
