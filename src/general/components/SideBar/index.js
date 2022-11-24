import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BaseSearchBar from "../Form/BaseSearchBar";
import MenuItem from "../MenuItem";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";
import { NavLink } from "react-bootstrap";

SideBar.propTypes = {
  className: PropTypes.string,
  loggedIn: PropTypes.bool,
  headerHeight: PropTypes.string,
};

SideBar.defaultProps = {
  className: "",
  loggedIn: false,
  headerHeight: "78",
};

function SideBar(props) {
  const { className, headerHeight } = props;
  const loggedIn = UserHelper.checkAccessTokenValid();
  let [showSearchBar, setShowSearchBar] = useState(false);
  let [showSideBar, setShowSideBar] = useState(true);
  let [selected, setSelected] = useState("questions");
  const handleShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  useEffect(() => {
    // console.log(headerHeight);
  }, []);
  return (
    <div
      className={`SideBar sticky-top top-0 d-inline-flex flex-column align-items-center min-vh-100 ${className}`}
      // style={{ top: `${headerHeight}px` }}
    >
      <NavLink
        to="/"
        className="d-flex text-decoration-none align-items-center w-100"
        style={{
          color: "#fff",
          height: `${loggedIn ? 6 : 5}rem`,
        }}
      >
        <div className="d-flex w-100 align-items-center fs-5 fw-normal ">
          <i className="fab fa-forumbee d-flex fa-2x"></i>
          {showSideBar && (
            <div className="d-none d-lg-flex ms-2">
              Code<div className="fw-bolder">Helper</div>
            </div>
          )}
        </div>
        {showSideBar && (
          <i
            className="ButtonShowSideBar fas fa-caret-circle-left d-none d-lg-flex"
            onClick={handleShowSideBar}
          ></i>
        )}
        {!showSideBar && (
          <div
            className="ButtonShowSideBar d-none d-lg-flex"
            onClick={() => {
              setShowSearchBar(false);
            }}
          >
            <i
              className="fas fa-caret-circle-right"
              style={{ fontSize: "2rem" }}
              onClick={handleShowSideBar}
            ></i>
          </div>
        )}
      </NavLink>
      <div className="d-block d-lg-none w-100 border border-bottom border-secondary"></div>
      {!showSideBar && (
        <div className="d-none d-lg-block w-100 border border-bottom border-secondary"></div>
      )}
      <div className="d-inline-flex flex-column align-items-center w-100">
        {/* ===== SearchBar when SideBar is showed ===== */}
        {showSideBar && (
          <div className="SearchBar d-none d-lg-block mx-5 mb-10 mt-lg-10">
            <BaseSearchBar
              name="searchBarDashboardlg"
              placeholder="Search..."
            />
          </div>
        )}
        {/* ============================================ */}
        <div
          className="SearchButton d-flex d-lg-none justify-content-center w-100 p-3"
          onClick={handleShowSearchBar}
        >
          {!showSearchBar && <i className="fas fa-search"></i>}
          {showSearchBar && <i className="fas fa-times"></i>}
        </div>
        {!showSideBar && (
          <div
            className="SearchButton d-none d-lg-flex justify-content-center w-100 p-3"
            onClick={handleShowSearchBar}
          >
            {!showSearchBar && <i className="fas fa-search"></i>}
            {showSearchBar && <i className="fas fa-times"></i>}
          </div>
        )}
        {/* ===== SearchBar when SideBar is not showed or Screen is small ===== */}
        {showSearchBar && !showSideBar && (
          <div
            className="SearchPopover"
            style={{
              top: `${loggedIn ? 6.1 : 5.1}rem`,
            }}
          >
            <BaseSearchBar name="searchBarDashboard" placeholder="Search..." />
          </div>
        )}
        {/* =================================================================== */}
        {showSideBar && (
          <div className="MenuTitle d-none d-lg-block fw-bolder text-white opacity-80 col-9 mb-2">
            DANH SÁCH
          </div>
        )}
        <div className="d-block d-lg-none w-100 border border-bottom border-secondary mb-5"></div>
        {!showSideBar && (
          <div className="d-none d-lg-block w-100 border border-bottom border-secondary mb-5"></div>
        )}
        <div className="MenuSideBar w-100">
          <MenuItem
            className={selected === "questions" && "MenuItem_active"}
            linkTo=""
            text={showSideBar ? "Câu hỏi" : ""}
            title="Câu hỏi"
            icon="fas fa-list-ul"
            onClick={() => setSelected("questions")}
          />
          <MenuItem
            className={selected === "blogs" && "MenuItem_active"}
            linkTo=""
            text={showSideBar ? "Bài viết" : ""}
            title="Bài viết"
            icon="far fa-scroll"
            onClick={() => setSelected("blogs")}
          />
          <MenuItem
            className={selected === "tags" && "MenuItem_active"}
            linkTo=""
            text={showSideBar ? "Thẻ" : ""}
            title="Thẻ"
            icon="far fa-tags"
            onClick={() => setSelected("tags")}
          />
          <MenuItem
            className={selected === "ranking" && "MenuItem_active"}
            linkTo=""
            text={showSideBar ? "Xếp hạng" : ""}
            title="Xếp hạng"
            icon="far fa-trophy-alt"
            onClick={() => setSelected("ranking")}
          />
        </div>
        {loggedIn && (
          <div className="w-100 d-flex flex-column align-items-center">
            {showSideBar && (
              <div className="MenuTitle d-none d-lg-block fw-bolder text-white opacity-80 col-9 mb-2 mt-5">
                DI CHUYỂN ĐẾN
              </div>
            )}
            <div className="d-block d-lg-none w-100 border border-bottom border-secondary my-5"></div>
            {!showSideBar && (
              <div className="d-none d-lg-block w-100 border border-bottom border-secondary my-5"></div>
            )}
            <div className="MenuSideBar w-100">
              <MenuItem
                className={selected === "my-questions" && "MenuItem_active"}
                linkTo=""
                text={showSideBar ? "Câu hỏi của bạn" : ""}
                title="Câu hỏi của bạn"
                icon="far fa-question-circle"
                onClick={() => setSelected("my-questions")}
              />
              <MenuItem
                className={selected === "my-answers" && "MenuItem_active"}
                linkTo=""
                text={showSideBar ? "Câu trả lời của bạn" : ""}
                title="Câu trả lời của bạn"
                icon="far fa-comment"
                onClick={() => setSelected("my-answers")}
              />
              <MenuItem
                className={selected === "my-blogs" && "MenuItem_active"}
                linkTo=""
                text={showSideBar ? "Bài viết của bạn" : ""}
                title="Bài viết của bạn"
                icon="far fa-scroll"
                onClick={() => setSelected("my-blogs")}
              />
              <MenuItem
                className={selected === "my-likes" && "MenuItem_active"}
                linkTo=""
                text={showSideBar ? "Yêu thích" : ""}
                title="Yêu thích"
                icon="far fa-heart"
                onClick={() => setSelected("my-likes")}
              />
            </div>
          </div>
        )}
      </div>
      <div
        className={`IconFooter d-flex flex-fill flex-column justify-content-end ${
          showSideBar && `flex-lg-row align-items-lg-end`
        }`}
      >
        <i className="fab fa-github cursor-pointer hover-opacity-60"></i>
        <i className="fab fa-instagram cursor-pointer hover-opacity-60"></i>
        <i className="fab fa-facebook cursor-pointer hover-opacity-60"></i>
      </div>
    </div>
  );
}

export default SideBar;
