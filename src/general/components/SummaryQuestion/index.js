import React from "react";
import PropTypes from "prop-types";
import Tag from "general/components/Tag";
import "./style.scss";

SummaryQuestion.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string,
    createAt: PropTypes.string,
    titleQuestion: PropTypes.string,
    Tags: PropTypes.array,
    comments: PropTypes.string,
    likes: PropTypes.string,
    dislikes: PropTypes.string,
};

SummaryQuestion.defaultProps = {
    avatar: "",
    userName: "",
    createAt: "",
    titleQuestion: "",
    tags: [],
    comments: "",
    likes: "",
    dislikes: "",
};

function SummaryQuestion(props) {
    const {
        avatar,
        userName,
        createAt,
        titleQuestion,
        tags,
        comments,
        likes,
        dislikes,
    } = props;
    return (
        <div className="my-5">
            <div className="comment p-5 container-sm bg-body shadow-sm rounded">
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img className="header-avatar" src={avatar} alt="" />
                    </div>
                    <div className="flex-grow-1 mx-2">
                        <p className="fw-bold fs-5 my-0">@{userName}</p>
                        <p className="fw-normal fs-6">{createAt}</p>
                    </div>
                </div>
                <div className="content">
                    <p className="fw-bold fs-3">{titleQuestion}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-fill">
                        {tags.map((tag) => (
                            <Tag tagName={tag} />
                        ))}
                    </div>
                    <div className="d-flex">
                        <button className="btn">
                            <i class="far fa-comment"></i>
                            {comments}
                        </button>
                        <button className="btn">
                            <i class="far fa-thumbs-up"></i>
                            {likes}
                        </button>
                        <button className="btn">
                            <i class="far fa-thumbs-down"></i>
                            {dislikes}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummaryQuestion;
