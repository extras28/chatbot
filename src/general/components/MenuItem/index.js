import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.scss";

MenuItem.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    linkTo: PropTypes.string,
};

MenuItem.defaultProps = {
    className: null,
    icon: null,
    text: null,
    linkTo: null,
};
function MenuItem(props) {
    const { className, icon, text, linkTo } = props;
    return (
        <NavLink to={linkTo}>
            <div
                className={`MenuItem d-flex align-items-center fw-bold p-4 ${className}`}
                title={text}
            >
                <i className={`col-2 ${icon}`}></i>
                <div className='MenuItemName d-none d-md-block'>{text}</div>
            </div>
        </NavLink>
    );
}

export default MenuItem;
