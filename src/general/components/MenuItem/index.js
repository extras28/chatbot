import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.scss";

MenuItem.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    linkTo: PropTypes.string,
    onClick: PropTypes.func,
};

MenuItem.defaultProps = {
    className: null,
    icon: null,
    text: null,
    title: null,
    linkTo: null,
    onClick: null,
};
function MenuItem(props) {
    const { className, icon, text, title, linkTo, onClick} = props;

    return (
        <NavLink to={linkTo} onClick = {onClick}>
            <div
                className={`MenuItem d-flex align-items-center py-4 px-lg-1  ${className}`}
                title={title}
            >
                <i className={`px-7 ${icon}`}></i>
                <div className='MenuItemName d-none d-lg-block'>{text}</div>
            </div>
        </NavLink>
    );
}

export default MenuItem;
