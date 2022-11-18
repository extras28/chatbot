import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BaseSearchBar from "../Form/BaseSearchBar";
import MenuItem from "../MenuItem";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";
import { NavLink } from "react-bootstrap";
import AppResource from "general/constants/AppResource";

SideBar.propTypes = {
    className: PropTypes.string,
    loggedIn: PropTypes.bool,
    headerHeight: PropTypes.string,
};

SideBar.defaultProps = {
    className: "",
    loggedIn: false,
    headerHeight: '78',
};

function SideBar(props) {
    const { className, headerHeight } = props;
    const loggedIn = UserHelper.checkAccessTokenValid();
    let [showSearchBar, setShowshowSearchBar] = useState(false);
    let [selected, setSelected] = useState("questions");
    const handleShowSearchBar = () => {
        setShowshowSearchBar(!showSearchBar);
    };
    

    useEffect(()=>{
        // console.log(headerHeight);
    },[])
    return (
        <div
            className={`SideBar sticky-top top-0 d-inline-flex flex-column align-items-center bg-white min-vh-100 ${className}`}
            // style={{ top: `${headerHeight}px` }}
        >
            <NavLink
                to='/'
                className='text-decoration-none text-black w-100 mt-4'
            >
                <div className='d-flex w-100 flex-start align-items-center fs-5 fw-normal '>
                    <i className="fab fa-forumbee fa-2x mr-2" style={{color: AppResource.colors.featureColor}}></i>
                    <div className='d-none d-sm-flex'>
                        Code<div className='fw-bolder'>Helper</div>
                    </div>
                </div>
            </NavLink>
            <div className='d-inline-flex flex-column align-items-center'>
                <div className='SearchBar d-none d-lg-block mx-5 mb-10'>
                    <BaseSearchBar name="searchBarDashboardlg" placeholder='Search...' />
                </div>
                <div
                    className='SearchButton d-flex d-lg-none justify-content-center w-100 p-3'
                    onClick={handleShowSearchBar}
                >
                    {!showSearchBar && <i className='fas fa-search'></i>}
                    {showSearchBar && <i className='fas fa-times'></i>}
                </div>
                {showSearchBar && (
                    <div className='SearchPopover d-block d-lg-none mt-20'>
                        <BaseSearchBar name="searchBarDashboard" placeholder='Search...' />
                    </div>
                )}
                <div className='MenuTitle d-none d-lg-block fw-bolder text-dark opacity-50 col-9 mb-2'>
                    DANH SÁCH
                </div>
                <div className='d-block d-lg-none w-100 border border-bottom border-secondary mb-5'></div>
                <div className='MenuSideBar w-100'>
                    <MenuItem
                        className={
                            selected === "questions" && "MenuItem_active"
                        }
                        linkTo=''
                        text='Câu hỏi'
                        icon='fas fa-list-ul'
                        onClick={() => setSelected("questions")}
                    />
                    <MenuItem
                        className={selected === "blogs" && "MenuItem_active"}
                        linkTo=''
                        text='Bài viết'
                        icon='far fa-scroll'
                        onClick={() => setSelected("blogs")}
                    />
                    <MenuItem
                        className={selected === "tags" && "MenuItem_active"}
                        linkTo=''
                        text='Thẻ'
                        icon='far fa-tags'
                        onClick={() => setSelected("tags")}
                    />
                    <MenuItem
                        className={selected === "ranking" && "MenuItem_active"}
                        linkTo=''
                        text='Xếp hạng'
                        icon='far fa-trophy-alt'
                        onClick={() => setSelected("ranking")}
                    />
                </div>
                {loggedIn && (
                    <div className='w-100 d-flex flex-column align-items-center'>
                        <div className='MenuTitle d-none d-lg-block fw-bolder text-dark opacity-50 col-9 mb-2 mt-5'>
                            DI CHUYỂN ĐẾN
                        </div>
                        <div className='d-block d-lg-none w-100 border border-bottom border-secondary my-5'></div>
                        <div className='MenuSideBar w-100'>
                            <MenuItem
                                className={
                                    selected === "my-questions" &&
                                    "MenuItem_active"
                                }
                                linkTo=''
                                text='Câu hỏi của bạn'
                                icon='far fa-question-circle'
                                onClick={() => setSelected("my-questions")}
                            />
                            <MenuItem
                                className={
                                    selected === "my-answers" &&
                                    "MenuItem_active"
                                }
                                linkTo=''
                                text='Câu trả lời của bạn'
                                icon='far fa-comment'
                                onClick={() => setSelected("my-answers")}
                            />
                            <MenuItem
                                className={
                                    selected === "my-blogs" && "MenuItem_active"
                                }
                                linkTo=''
                                text='Bài viết của bạn'
                                icon='far fa-scroll'
                                onClick={() => setSelected("my-blogs")}
                            />
                            <MenuItem
                                className={
                                    selected === "my-likes" && "MenuItem_active"
                                }
                                linkTo=''
                                text='Yêu thích'
                                icon='far fa-heart'
                                onClick={() => setSelected("my-likes")}
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className='IconFooter d-flex flex-column flex-lg-row'>
                <i className='fab fa-github cursor-pointer hover-opacity-60'></i>
                <i className='fab fa-instagram-square cursor-pointer hover-opacity-60'></i>
                <i className='fab fa-facebook cursor-pointer hover-opacity-60'></i>
            </div>
        </div>
    );
}

export default SideBar;
