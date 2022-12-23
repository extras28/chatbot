import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BaseSearchBar from "../Form/BaseSearchBar";
import MenuItem from "../MenuItem";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";
import { NavLink } from "react-router-dom";

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
  let [showSideBar, setShowSideBar] = useState(true);
  let [selected, setSelected] = useState("questions");
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
      <div
        className="d-flex text-decoration-none align-items-center w-100"
        style={{
          color: "#fff",
          height: `${loggedIn ? 6 : 5}rem`,
        }}
      >
        <NavLink to="/" className="d-flex w-100 mx-4 align-items-center fs-5 fw-normal ">
          <i className="fab fa-forumbee d-flex fa-2x ms-lg-2"></i>
          {showSideBar && (
            <div className="d-none d-lg-flex ms-2 text-white mr-lg-25">
              Code<div className="fw-bolder">Helper</div>
            </div>
          )}
        </NavLink>
        {showSideBar && (
          <i
            className="ButtonShowSideBar fas fa-caret-circle-left d-none d-lg-flex"
            onClick={handleShowSideBar}
          ></i>
        )}
        {!showSideBar && (
          <div
            className="ButtonShowSideBar d-none d-lg-flex"
          >
            <i
              className="fas fa-caret-circle-right"
              style={{ fontSize: "2rem" }}
              onClick={handleShowSideBar}
            ></i>
          </div>
        )}
      </div>
      <div className="d-inline-flex flex-column align-items-center w-100">
        
        <div className="MenuSideBar w-100 mt-5">
          <MenuItem
            className={selected === "questions" ? "MenuItem_active" : ""}
            linkTo=""
            text={showSideBar ? "Câu hỏi" : ""}
            title="Câu hỏi"
            icon="fas fa-list-ul"
            onClick={() => setSelected("questions")}
          />
          <MenuItem
            className={selected === "users" ? "MenuItem_active" : ""}
            linkTo=""
            text={showSideBar ? "Người dùng" : ""}
            title="Người dùng"
            icon="far fa-users"
            onClick={() => setSelected("users")}
          />
          <MenuItem
            className={selected === "tags" ? "MenuItem_active" : ""}
            linkTo=""
            text={showSideBar ? "Thẻ" : ""}
            title="Thẻ"
            icon="far fa-tags"
            onClick={() => setSelected("tags")}
          />
          <MenuItem
            className={selected === "ranking" ? "MenuItem_active" : ""}
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
                className={selected === "my-questions" ? "MenuItem_active" : ""}
                linkTo=""
                text={showSideBar ? "Câu hỏi của bạn" : ""}
                title="Câu hỏi của bạn"
                icon="far fa-question-circle"
                onClick={() => setSelected("my-questions")}
              />
              <MenuItem
                className={selected === "my-answers" ? "MenuItem_active" : ""}
                linkTo=""
                text={showSideBar ? "Câu trả lời của bạn" : ""}
                title="Câu trả lời của bạn"
                icon="far fa-comment"
                onClick={() => setSelected("my-answers")}
              />
              <MenuItem
                className={selected === "my-likes" ? "MenuItem_active" : ""}
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
