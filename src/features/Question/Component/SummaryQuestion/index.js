import React from "react";
import PropTypes from "prop-types";
import Tag from "general/components/Tag";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";

SummaryQuestion.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string,
    createAt: PropTypes.string,
    titleQuestion: PropTypes.string,
    Tags: PropTypes.array,
    comments: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    onClick: PropTypes.func,
};

SummaryQuestion.defaultProps = {
    avatar: "",
    userName: "",
    createAt: "",
    titleQuestion: "",
    tags: [],
    comments: "",
    likes: null,
    dislikes: null,
    onClick: null,
};

function SummaryQuestion(props) {
    const { avatar, userName, createAt, titleQuestion, tags, comments, likes, dislikes, onClick } = props;
    return (
        <div className='my-5 SummaryQuestion cursor-pointer' onClick={onClick}>
            <div className='comment p-5 bg-body shadow-sm rounded'>
                <div className='d-flex'>
                    <div className='flex-shrink-0'>
                        <img
                            className='header-avatar rounded-circle'
                            src={avatar || UserHelper.getRandomAvatarUrl()}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = UserHelper.getRandomAvatarUrl();
                            }}
                            alt='avatar'
                        />
                    </div>
                    <div className='flex-grow-1 mx-2'>
                        <p className='fw-bold fs-5 my-0'>{userName}</p>
                        <p className='fw-normal fs-6'>{createAt}</p>
                    </div>
                </div>
                <div className='content'>
                    <p className='fw-bold fs-3'>{titleQuestion}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex flex-fill'>
                        {tags?.map((item, index) => {
                            return (
                                <div key={index} className='badge badge-secondary mr-4 d-flex align-items-center'>
                                    <span>{item?.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className='d-flex'>
                        <button className='btn'>
                            <i className='fas fa-comment'></i>
                            {comments}
                        </button>
                        <button className='btn'>
                            <i className='fas fa-thumbs-up'></i>
                            {likes}
                        </button>
                        <button className='btn'>
                            <i className='fas fa-thumbs-down'></i>
                            {dislikes}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummaryQuestion;
