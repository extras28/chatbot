<<<<<<< HEAD
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import BaseSearchBar from "../Form/BaseSearchBar";
import avatar from "../../../assets/images/avatar.png";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";
import { thunkSignOut } from "app/authSlice";
import { useDispatch } from "react-redux";

HeaderLandingPage.propTypes = {
    loggedIn: PropTypes.bool,
    searchBar: PropTypes.bool,
    logo: PropTypes.bool,
    menu: PropTypes.bool,
    buttonAddQuestion: PropTypes.bool,
    buttonSign: PropTypes.bool,
};

HeaderLandingPage.defaultProps = {
    loggedIn: false,
    searchBar: true,
    logo: false,
    menu: false,
    buttonAddQuestion: true,
    buttonSign: true,
};

function HeaderLandingPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedIn = UserHelper.checkAccessTokenValid();
    const { searchBar, logo, menu, buttonAddQuestion, buttonSign } = props;
    let [showSearchBar, setShowSearchBar] = useState(false);
    let [showPopupLogOut, setShowPopupLogOut] = useState(false);

    //Logout
    const handleLogOut = async () => {
        const result = await dispatch(thunkSignOut());
        setShowPopupLogOut(!showPopupLogOut);
        navigate("/");
    };

    const handleShowSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };
    const handleShowPopupLogOut = () => {
        setShowPopupLogOut(!showPopupLogOut);
    };

    function handleNavigate(url) {
        navigate(url);
    }

    return (
        <div
            className="HeaderLandingPage d-flex sticky-top justify-content-between align-items-center shadow-sm px-5 py-4 ps-5 bg-body"
            style={{ zIndex: showPopupLogOut ? "1002" : "1000" }}
        >
            {logo && (
                <NavLink
                    to="/"
                    className="d-flex align-items-center fs-5 fw-normal "
                >
                    <i
                        className="fab fa-forumbee d-flex fa-2x ms-sm-2"
                        style={{ color: "#F48023" }}
                    ></i>
                    <div className="d-none d-sm-flex ms-2 text-black">
                        Code<div className="fw-bolder">Helper</div>
                    </div>
                </NavLink>
            )}
            {searchBar && (
                <div className="d-flex flex-fill pe-3">
                    <div
                        className="d-none d-sm-block mx-auto w-100"
                        style={{ maxWidth: "50rem" }}
                    >
                        <BaseSearchBar placeholder="Search..." />
                    </div>
                    <div className="SearchButton d-block d-sm-none ms-auto">
                        <button onClick={handleShowSearchBar}>
                            <i className="fas fa-search" />
                        </button>
                        {showSearchBar && (
                            <div className="SearchPopover">
                                <BaseSearchBar placeholder="Search..." />
                            </div>
                        )}
                    </div>
                </div>
            )}
            {menu && (
                <div className="HeaderLandingPageNav d-none d-md-flex flex-fill justify-content-end">
                    <a href="#home" className="HeaderLandingPageNavItem">
                        <span onClick={() => handleNavigate("/#home")}>
                            Trang chủ
                        </span>
                    </a>
                    <a
                        href="#introduction"
                        className="HeaderLandingPageNavItem"
                    >
                        <span onClick={() => handleNavigate("/#introduction")}>
                            Giới thiệu
                        </span>
                    </a>
                    <a href="#contact" className="HeaderLandingPageNavItem">
                        <span onClick={() => handleNavigate("/#contact")}>
                            Liên hệ
                        </span>
                    </a>
                    <a className="HeaderLandingPageNavItem">
                        <span onClick={() => handleNavigate("/dashboard")}>
                            Trang câu hỏi
                        </span>
                    </a>
                </div>
            )}
            {buttonAddQuestion && (
                <button
                    type="button"
                    className="ButtonPrimary d-none d-md-flex me-3"
                    title="Thêm câu hỏi"
                    onClick={() =>
                        loggedIn
                            ? handleNavigate("/add-question")
                            : handleNavigate("/sign-in")
                    }
                >
                    <i className="far fa-plus-circle text-white"></i>
                    <div className="d-none d-lg-flex ms-3">Thêm câu hỏi</div>
                </button>
            )}
            {!loggedIn && (
                <div>
                    {/* Screen >= 768px */}
                    {buttonSign && (
                        <div className="d-none d-lg-block">
                            <NavLink to="/sign-up">
                                <button type="button" className="ButtonPrimary">
                                    <i className="far fa-user-plus me-2 text-white"></i>
                                    Đăng ký
                                </button>
                            </NavLink>
                            <NavLink to="/sign-in">
                                <button
                                    type="button"
                                    className="ButtonCancel ms-3"
                                >
                                    Đăng nhập
                                </button>
                            </NavLink>
                        </div>
                    )}
                    {/* Screen < 768px */}
                    <div className="d-flex d-lg-none">
                        <input type="checkbox" id="dropdownMenu-notLoggedIn" />
                        <label
                            htmlFor="dropdownMenu-notLoggedIn"
                            id="overlay-button"
                        >
                            <span></span>
                        </label>
                        <div id="overlay">
                            <ul className="d-flex flex-column justify-content-center align-items-center ps-0 m-0">
                                {menu && (
                                    <li className="d-block d-md-none">
                                        <a
                                            className="dropdownMenuItem"
                                            href="#home"
                                        >
                                            Trang chủ
                                        </a>
                                    </li>
                                )}
                                {menu && (
                                    <li className="d-block d-md-none">
                                        <a
                                            className="dropdownMenuItem"
                                            href="#introduction"
                                        >
                                            Giới thiệu
                                        </a>
                                    </li>
                                )}
                                {menu && (
                                    <li className="d-block d-md-none">
                                        <a
                                            className="dropdownMenuItem"
                                            href="#contact"
                                        >
                                            Liên hệ
                                        </a>
                                    </li>
                                )}
                                {menu && (
                                    <li className="d-block d-md-none">
                                        <NavLink
                                            className="dropdownMenuItem"
                                            to="/dashboard"
                                        >
                                            Trang câu hỏi
                                        </NavLink>
                                    </li>
                                )}
                                {buttonAddQuestion && (
                                    <li className="d-block d-md-none">
                                        <NavLink
                                            className="dropdownMenuItem"
                                            to="/sign-in"
                                        >
                                            Thêm câu hỏi
                                        </NavLink>
                                    </li>
                                )}
                                {buttonSign && (
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
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {loggedIn && (
                <div className="d-flex justify-content-center align-items-center">
                    {/* Screen >= 768px */}
                    <div className="d-none d-md-flex align-items-center">
                        <div className="bell mx-5">
                            <i className="far fa-bell"></i>
                            <div></div>
                        </div>
                        <label
                            className="d-flex"
                            htmlhtmlFor="dropdownMenuButton"
                        >
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
                                    <div
                                        className="dropdown-item cursor-pointer"
                                        onClick={handleShowPopupLogOut}
                                    >
                                        Đăng xuất
                                    </div>
                                </li>
                            </ul>
                        </label>
                    </div>

                    {/* Screen < 768px */}
                    {menu && (
                        <div class="dropdownMenuLandingPage d-block d-md-none">
                            <button class="btn_dropdown">
                                <i class="fas fa-sort-down "></i>
                            </button>
                            <div class="dropdownMenuDetail">
                                <a href="#home">Trang chủ</a>
                                <a href="#introduction">Giới thiệu</a>
                                <a href="#contact">Liên hệ</a>
                                <NavLink to="/dashboard">Trang câu hỏi</NavLink>
                            </div>
                        </div>
                    )}
                    <div className="d-flex d-md-none">
                        <input type="checkbox" id="dropdownMenu-loggedIn" />
                        <label
                            htmlFor="dropdownMenu-loggedIn"
                            id="overlay-button"
                        >
                            <span></span>
                        </label>
                        <div id="overlay">
                            <ul className="d-flex flex-column justify-content-center align-items-center ps-0 m-0 text-start">
                                <li>
                                    <div className="d-flex flex-column align-items-center py-4">
                                        <img
                                            className="header-sm-avatar"
                                            src={avatar}
                                            alt=""
                                        />
                                        <div className="fs-6 fw-bold pt-2">
                                            Nguyễn Quang Dũng
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i className="far fa-user-circle mr-4"></i>
                                        Thông tin cá nhân
                                    </NavLink>
                                </li>
                                {buttonAddQuestion && (
                                    <li>
                                        <NavLink
                                            className="dropdownMenuItem"
                                            to="/add-question"
                                        >
                                            <i className="far fa-plus-circle mr-4"></i>
                                            Thêm câu hỏi
                                        </NavLink>
                                    </li>
                                )}
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i className="far fa-bell mr-4"></i>
                                        Thông báo
                                        <div className="notificationNumber ms-auto text-white rounded-circle">
                                            2
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i className="far fa-unlock-alt mr-4"></i>
                                        Đổi mật khẩu
                                    </NavLink>
                                </li>
                                <li className="border-bottom-0">
                                    <div
                                        className="dropdownMenuItem"
                                        onClick={handleShowPopupLogOut}
                                    >
                                        <i className="far fa-sign-out mr-4"></i>
                                        Đăng xuất
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {showPopupLogOut && (
                <div
                    className="d-flex justify-content-center align-items-center position-fixed top-0 left-0 min-vh-100 min-vw-100"
                    style={{ backgroundColor: "rgba(0,0,0,.4)", zIndex:"1000" }}
                >
                    <div className="d-flex flex-column justify-content-center align-items-center bg-white rounded">
                        <h6 className="py-4 m-0 px-auto">Đăng xuất</h6>
                        <div className="d-flex flex-column align-items-center pt-4 w-100 bg-secondary">
                            <div>
                                <i className="fas fa-sign-out-alt fa-4x"
                                    style={{ color: "#F48023" }}
                                    ></i>
                            </div>
                            <p className="fs-7" style={{fontSize: "12px",fontWeight: "500"}}>Bạn có chắc chắn muốn đăng xuất?</p>
                        </div>
                        <div className="d-flex justify-content-center p-3 w-100">
                            <button type="button" className="ButtonPrimary px-10" onClick={handleLogOut}>
                                Xác nhận
                            </button>
                            <button type="button" className="ButtonCancel px-15 ms-3" onClick={handleShowPopupLogOut}>
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderLandingPage;
=======
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import BaseSearchBar from "../Form/BaseSearchBar";
import avatar from "../../../assets/images/avatar.png";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";
import DialogModal from "../DialogModal";
import { useDispatch, useSelector } from "react-redux";
import { thunkSignOut } from "app/authSlice";
import Utils from "general/utils/Utils";
HeaderLandingPage.propTypes = {
    loggedIn: PropTypes.bool,
    searchBar: PropTypes.bool,
    logo: PropTypes.bool,
    menu: PropTypes.bool,
    buttonAddQuestion: PropTypes.bool,
    buttonSign: PropTypes.bool,
};

HeaderLandingPage.defaultProps = {
    loggedIn: false,
    searchBar: true,
    logo: false,
    menu: false,
    buttonAddQuestion: true,
    buttonSign: true,
};

function HeaderLandingPage(props) {
    const navigate = useNavigate();
    const {loggedIn, currentAccount} = useSelector(state => state?.auth); 

    const { searchBar, logo, menu, buttonAddQuestion, buttonSign } = props;
    let [showSearchBar, setShowSearchBar] = useState(false);
    const handleShowSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };

    function handleNavigate(url) {
        navigate(url);
    }

    const [showLogOutModal, setShowLogOutModal] = useState(false);

    const dispatch = useDispatch();

    return (
        <div
            className="HeaderLandingPage d-flex sticky-top justify-content-between align-items-center shadow-sm px-5 py-4 ps-5 bg-body"
            style={{ zIndex: "1000" }}
        >
            {logo && (
                <NavLink
                    to="/"
                    className="d-flex align-items-center fs-5 fw-normal "
                >
                    <i
                        className="fab fa-forumbee d-flex fa-2x ms-sm-2"
                        style={{ color: "#F48023" }}
                    ></i>
                    <div className="d-none d-sm-flex ms-2 text-black">
                        Code<div className="fw-bolder">Helper</div>
                    </div>
                </NavLink>
            )}
            {searchBar && (
                <div className="d-flex flex-fill justify-content-end">
                    {/* <div
                        className="d-none d-sm-block w-100 mx-5 ml-md-10"
                        style={{ maxWidth: "50rem" }}
                    >
                        <BaseSearchBar placeholder="Search..." />
                    </div> */}
                    <div className="SearchButton d-block d-sm-none mx-5">
                        <button
                            onClick={handleShowSearchBar}
                        >
                            <i
                                className="fas fa-search"
                            />
                        </button>
                        {showSearchBar && (
                            <div
                                className="SearchPopover"
                                
                            >
                                <BaseSearchBar
                                    placeholder="Search..."
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
            {menu && (
                <div className="HeaderLandingPageNav d-none d-md-flex flex-fill justify-content-end">
                    <a href="#home" className="HeaderLandingPageNavItem">
                        <span onClick={() => handleNavigate("/#home")}>
                            Trang chủ
                        </span>
                    </a>
                    <a
                        href="#introduction"
                        className="HeaderLandingPageNavItem"
                    >
                        <span onClick={() => handleNavigate("/#introduction")}>
                            Giới thiệu
                        </span>
                    </a>
                    <a href="#contact" className="HeaderLandingPageNavItem">
                        <span onClick={() => handleNavigate("/#contact")}>
                            Liên hệ
                        </span>
                    </a>
                    <a className="HeaderLandingPageNavItem">
                        <span onClick={() => handleNavigate("/dashboard")}>
                            Trang câu hỏi
                        </span>
                    </a>
                </div>
            )}
            {!loggedIn && (
                <div>
                    {/* Screen >= 576px */}
                    {buttonSign && (
                        <div className="d-none d-md-block">
                            <NavLink to="/sign-up">
                                <button type="button" className="ButtonPrimary">
                                    <i className="far fa-user-plus me-2 text-white"></i>
                                    Đăng ký
                                </button>
                            </NavLink>
                            <NavLink to="/sign-in">
                                <button
                                    type="button"
                                    className="ButtonCancel ms-3"
                                >
                                    Đăng nhập
                                </button>
                            </NavLink>
                        </div>
                    )}
                    {/* Screen < 576px */}
                    <div className="d-flex d-md-none">
                        <input type="checkbox" id="dropdownMenu-notLoggedIn" />
                        <label
                            htmlFor="dropdownMenu-notLoggedIn"
                            id="overlay-button"
                        >
                            <span></span>
                        </label>
                        <div id="overlay">
                            <ul className="d-flex flex-column justify-content-center align-items-center ps-0 m-0">
                                {menu && (
                                    <li>
                                        <a
                                            className="dropdownMenuItem"
                                            href="#home"
                                        >
                                            Trang chủ
                                        </a>
                                    </li>
                                )}
                                {menu && (
                                    <li>
                                        <a
                                            className="dropdownMenuItem"
                                            href="#introduction"
                                        >
                                            Giới thiệu
                                        </a>
                                    </li>
                                )}
                                {menu && (
                                    <li>
                                        <a
                                            className="dropdownMenuItem"
                                            href="#contact"
                                        >
                                            Liên hệ
                                        </a>
                                    </li>
                                )}
                                {menu && (
                                    <li>
                                        <NavLink
                                            className="dropdownMenuItem"
                                            to="/dashboard"
                                        >
                                            Trang câu hỏi
                                        </NavLink>
                                    </li>
                                )}
                                {buttonSign && (
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
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {loggedIn && (
                <div className="d-flex justify-content-center align-items-center">
                    {/* Screen >= 768px */}
                    <div className="d-none d-md-flex align-items-center">
                        {buttonAddQuestion && (
                            <NavLink to="">
                                <button
                                    type="button"
                                    className="ButtonPrimary d-flex"
                                    title="Thêm câu hỏi"
                                >
                                    <i className="far fa-plus-circle text-white"></i>
                                    <div className="d-flex ms-3">
                                        Thêm câu hỏi
                                    </div>
                                </button>
                            </NavLink>
                        )}
                        <div className="bell mx-5">
                            <i className="far fa-bell"></i>
                            <div></div>
                        </div>
                        <label
                            className="d-flex"
                            htmlFor="dropdownMenuButton"
                        >
                            <div className="HeaderLandingPage_Avatar">
                                <img
                                    src = {
                                        Utils.getFullUrl(currentAccount?.avatar?.path) ||
                                        UserHelper.getRandomAvatarUrl()
                                    }
                                    onError = {
                                        (e) => {
                                            e.target.onerror = null;
                                            e.target.src = UserHelper.getRandomAvatarUrl();
                                        }
                                    }
                                    alt="avatar"
                                />
                            </div>
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
                                    <a className="dropdown-item" href="#" onClick={()=>setShowLogOutModal(true)}>
                                        Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </label>
                    </div>

                    {/* Screen < 768px */}
                    {menu && (
                        <div className="dropdownMenuLandingPage d-block d-md-none">
                            <button className="btn_dropdown">
                                <i className="fas fa-sort-down "></i>
                            </button>
                            <div className="dropdownMenuDetail">
                                <a href="#home">Trang chủ</a>
                                <a href="#introduction">Giới thiệu</a>
                                <a href="#contact">Liên hệ</a>
                                <NavLink to="/dashboard">Trang câu hỏi</NavLink>
                            </div>
                        </div>
                    )}
                    <div className="d-flex d-md-none">
                        <input type="checkbox" id="dropdownMenu-loggedIn" />
                        <label
                            htmlFor="dropdownMenu-loggedIn"
                            id="overlay-button"
                        >
                            <span></span>
                        </label>
                        <div id="overlay">
                            <ul className="d-flex flex-column justify-content-center align-items-center ps-0 m-0 text-start">
                                <li>
                                    <div className="d-flex flex-column align-items-center py-4">
                                        <img
                                            className="header-sm-avatar"
                                            src={avatar}
                                            alt=""
                                        />
                                        <div className="fs-6 fw-bold pt-2">
                                            Nguyễn Quang Dũng
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i className="far fa-user-circle mr-4"></i>
                                        Thông tin cá nhân
                                    </NavLink>
                                </li>
                                {buttonAddQuestion && (
                                    <li>
                                        <NavLink
                                            className="dropdownMenuItem"
                                            to="#"
                                        >
                                            <i className="far fa-plus-circle mr-4"></i>
                                            Thêm câu hỏi
                                        </NavLink>
                                    </li>
                                )}
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i className="far fa-bell mr-4"></i>
                                        Thông báo
                                        <div className="notificationNumber ms-auto text-white rounded-circle">
                                            2
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                    >
                                        <i className="far fa-unlock-alt mr-4"></i>
                                        Đổi mật khẩu
                                    </NavLink>
                                </li>
                                <li className="border-bottom-0">
                                    <NavLink
                                        className="dropdownMenuItem"
                                        to="#"
                                        onClick={()=>setShowLogOutModal(true)}
                                    >
                                        <i className="far fa-sign-out mr-4"></i>
                                        Đăng xuất
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            <DialogModal 
                show={showLogOutModal}
                onClose={()=>setShowLogOutModal(false)}
                title="Đăng xuất"
                onExecute = {
                    () => {
                        dispatch(thunkSignOut()).then(() => {
                            UserHelper.signOut();
                        });
                    }
                }
            />
        </div>
    );
}

export default HeaderLandingPage;
>>>>>>> 4adf6ed6bd8b59ece71bd03f9375acc71a1d4b23
