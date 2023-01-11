import React from "react";
import PropTypes from "prop-types";
import UserHelper from "general/helpers/UserHelper";
import MDEditor from "@uiw/react-md-editor";
import Tag from "general/components/Tag";

DetailQuestion.propTypes = {
    srcAvatar: PropTypes.string,
    fullname: PropTypes.string,
    createdAt: PropTypes.string,
    title: PropTypes.string,
    contentTextProblem: PropTypes.string,
    contentTextExpect: PropTypes.string,
    Tags: PropTypes.array,
    comments: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
};

DetailQuestion.defaultProps = {
    srcAvatar: "",
    fullname: "",
    createdAt: "",
    title: "",
    contentTextProblem: "",
    contentTextExpect: "",
    tags: [],
    comments: "",
    likes: null,
    dislikes: null,
};

function DetailQuestion(props) {
    const {
        avatar,
        fullname,
        createdAt,
        title,
        contentTextProblem,
        contentTextExpect,
        tags,
        comments,
        likes,
        dislikes,
    } = props;
    return (
        <div className='DetailQuestion bg-white rounded shadow p-5 p-md-10'>
            <div className='d-flex align-items-center'>
                <div className='flex-shrink-0 symbol'>
                    <img
                        className='DetailQuestion_Avatar'
                        src={avatar || UserHelper.getRandomAvatarUrl()}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = UserHelper.getRandomAvatarUrl();
                        }}
                        alt='avatar'
                    />
                </div>
                <div className='flex-grow-1 mx-2'>
                    <div className='fw-bold fs-5 my-0'>{fullname}</div>
                </div>
            </div>
            <div className='content pt-4'>
                <div className='fw-bold fs-3'>{title}</div>
                <div className='mt-1 fw-normal fs-6'>Ngày tạo: {createdAt}</div>
            </div>
            <div data-color-mode='light' className='overflow-auto' style={{ maxWidth: "1000px" }}>
                <MDEditor.Markdown source={contentTextProblem} />
            </div>
            <div data-color-mode='light' className='mt-5 overflow-auto' style={{ maxWidth: "1000px" }}>
                <MDEditor.Markdown source={contentTextExpect} />
            </div>
            <div className='mt-5 d-flex justify-content-between align-items-center'>
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
                        <i className='far fa-comment'></i>
                        {comments}
                    </button>
                    <button className='btn'>
                        <i className='far fa-thumbs-up'></i>
                        {likes}
                    </button>
                    <button className='btn'>
                        <i className='far fa-thumbs-down'></i>
                        {dislikes}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailQuestion;
