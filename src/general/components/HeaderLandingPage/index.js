import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../../assets/images/icon.png";
import avatar from "../../../assets/images/avatar.png";
import "./style.scss";
HeaderLandingPage.propTypes = {};

function HeaderLandingPage(props) {
    let user = 0;
    return (
        <div className="d-flex justify-content-between align-items-center shadow-sm px-5 py-4 ps-5 bg-body rounded">
            <NavLink to="/" className="text-decoration-none text-black">
                <div className="d-flex align-items-end fs-5 fw-normal ">
                    <img className="me-3" src={logo} alt="" />
                    Code<div className="fw-bolder">Helper</div>
                </div>
            </NavLink>
            {!user && (
                <div>
                    <NavLink to="/sign-up">
                        <button type="button" className="ButtonPrimary">
                            <i class="far fa-user-plus me-2"></i>
                            Đăng ký
                        </button>
                    </NavLink>
                    <NavLink to="/sign-in">
                        <button type="button" className="ButtonCancel ms-3">
                            Đăng nhập
                        </button>
                    </NavLink>
                </div>
            )}
            {user === 1 && (                
                <div className="d-flex align-items-center justify-content-between">
                    <NavLink to="">
                        <button type="button" className="ButtonPrimary">
                            <i class="far fa-plus-circle me-3"></i>
                            Thêm câu hỏi
                        </button>
                    </NavLink>
                    <div className="bell mx-5">
                        <i class="far fa-bell"></i>
                        <div></div>
                    </div>
                    <label for="dropdownMenuButton">
                        <img className="header-avatar" src={avatar} alt="" />
                        <button
                            className="show-option"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i class="fas fa-sort-down"></i>
                        </button>

                        <ul
                            class="dropdown-menu my-4"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <li>
                                <a class="dropdown-item pe-5" href="#">
                                    Thông tin cá nhân
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Đổi mật khẩu
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </label>
                </div>
            )}
        </div>
    );
}

export default HeaderLandingPage;