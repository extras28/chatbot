import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Tag.propTypes = {
    tagName: PropTypes.string,
};

Tag.defaultProps = {
    tagName: "",
};
function Tag(props) {
    const { tagName } = props;
    return (
        <div className="flex-shrink-0 ms-2" style={{ cursor: "pointer" }}>
            <span className="badge rounded-pill bg-light text-secondary">
                {tagName}
            </span>
        </div>
    );
}

export default Tag;
