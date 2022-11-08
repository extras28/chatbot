import React, { useState } from "react";
import PropTypes from "prop-types";
import BaseSearchBar from "../Form/BaseSearchBar";
import MenuItem from "../MenuItem";
import "./style.scss";

SideBar.propTypes = {};

function SideBar(props) {
    let [showSearchBar, setShowshowSearchBar] = useState(false);
    const handleShowSearchBar = () => {
        setShowshowSearchBar(!showSearchBar);
    };
    return (
        <div className="SideBar d-inline-flex flex-column align-items-center bg-white h-100">
            <div className="SearchBar d-none d-md-block mx-5 mt-35 mb-10">
                <BaseSearchBar placeholder="Search..." />
            </div>
            <div
                className="SearchButton d-flex d-md-none justify-content-center w-100 mt-24 p-3"
                onClick={handleShowSearchBar}
            >
                {!showSearchBar && <i class="fas fa-search"></i>}
                {showSearchBar && <i class="fas fa-times"></i>}
            </div>
            {showSearchBar && (
                <div className="SearchPopover d-block d-md-none">
                    <BaseSearchBar placeholder="Search..." />
                </div>
            )}
            <div className="MenuTitle d-none d-md-block fw-bolder text-dark opacity-50 col-9 mb-2">
                DANH SÁCH
            </div>
            <div className="d-block d-md-none w-100 border border-bottom border-secondary mb-5"></div>
            <div className="MenuSideBar w-100">
                <MenuItem
                    className="MenuItem_active"
                    linkTo="#"
                    text="Câu hỏi"
                    icon="fas fa-list-ul"
                />
                <MenuItem
                    className=""
                    linkTo="#"
                    text="Bài viết"
                    icon="far fa-scroll"
                />
                <MenuItem
                    className=""
                    linkTo="#"
                    text="Thẻ"
                    icon="far fa-tags"
                />
                <MenuItem
                    className=""
                    linkTo="#"
                    text="Xếp hạng"
                    icon="far fa-trophy-alt"
                />
            </div>
            <div className="MenuTitle d-none d-md-block fw-bolder text-dark opacity-50 col-9 mb-2 mt-5">
                DI CHUYỂN ĐẾN
            </div>
            <div className="d-block d-md-none w-100 border border-bottom border-secondary my-5"></div>
            <div className="MenuSideBar w-100">
                <MenuItem
                    className=""
                    linkTo="#"
                    text="Câu hỏi của bạn"
                    icon="far fa-question-circle"
                />
                <MenuItem
                    className=""
                    linkTo="#"
                    text="Câu trả lời của bạn"
                    icon="far fa-comment"
                />
                <MenuItem
                    className=""
                    linkTo="#"
                    text="Bài viết cua bạn"
                    icon="far fa-scroll"
                />
                <MenuItem
                    className=""
                    linkTo="#"
                    text="Yêu thích"
                    icon="far fa-heart"
                />
            </div>
        </div>
    );
}

export default SideBar;
