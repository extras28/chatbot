import React from "react";
import PropTypes from "prop-types";

CellTag.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    numberOfQuestion: PropTypes.number,
    questionPerWeek: PropTypes.number,
    questionThisDay: PropTypes.number,
};

CellTag.defaultProps = {
    name: "",
    description: "",
    numberOfQuestion: 0,
    questionPerWeek: 0,
    questionThisDay: 0,
};

function CellTag(props) {
    const {
        name,
        description,
        numberOfQuestion,
        questionPerWeek,
        questionThisDay,
    } = props;
    return (
        <div className='CellTag bg-white border rounded custom-cell p-5 h-100 d-flex flex-column justify-content-between'>
            <div>
                <p className='badge  bg-secondary text-remaining'>{name}</p>
                <p className='q-max-line-4'>{description}</p>
            </div>
            <div className='d-flex justify-content-between flex-wrap'>
                <span className='text-muted'>{`${numberOfQuestion} câu hỏi`}</span>
                <span className='text-muted'>{`${numberOfQuestion} câu hỏi trong tuần`}</span>
            </div>
        </div>
    );
}

export default CellTag;
