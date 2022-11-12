import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.scss";

MenuItem.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    linkTo: PropTypes.string,
    onClick: PropTypes.func,
};

MenuItem.defaultProps = {
    className: null,
    icon: null,
    text: null,
    linkTo: null,
    onClick: null,
};
function MenuItem(props) {
    const { className, icon, text, linkTo, onClick} = props;

    return (
        <NavLink to={linkTo} onClick = {onClick}>
            <div
                className={`MenuItem d-flex align-items-center fw-bold py-4 p-lg-4 ${className}`}
                title={text}
            >
                <i class={`col-lg-2 ${icon}`}></i>
                <div className="MenuItemName d-none d-lg-block">{text}</div>
            </div>
        </NavLink>
    );
}

export default MenuItem;
