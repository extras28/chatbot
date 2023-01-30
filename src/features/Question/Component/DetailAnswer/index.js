import React from "react";
import PropTypes from "prop-types";
import UserHelper from "general/helpers/UserHelper";
import "./style.scss";
import MDEditor from "@uiw/react-md-editor";
import wsHelperInstance from "general/helpers/WebSocketClientHelper";
import { useSelector } from "react-redux";
DetailAnswer.propTypes = {
    avatar: PropTypes.string,
    fullname: PropTypes.string,
    createdAt: PropTypes.string,
    contentAnswer: PropTypes.string,
    comments: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    deleteAnswer: PropTypes.func,
    _id: PropTypes.string,
    tempId: PropTypes.string,
    account: PropTypes.string,
};
DetailAnswer.defaultProps = {
    avatar: "",
    fullname: "",
    createdAt: "",
    contentAnswer: "",
    comments: "",
    likes: null,
    dislikes: null,
    deleteAnswer: null,
    _id: "",
    tempId: "",
    account: "",
};

function DetailAnswer(props) {
    const {
        avatar,
        fullname,
        createdAt,
        contentAnswer,
        comments,
        likes,
        dislikes,
        deleteAnswer,
        _id,
        tempId,
        account,
    } = props;
    const { currentAccount } = useSelector((state) => state?.auth);

    function handleDeleteAnswer() {
        if (deleteAnswer) {
            if (tempId) {
                deleteAnswer(tempId);
            } else {
                deleteAnswer(_id);
            }
        }
    }
    return (
        <div className='DetailAnswer w-100 bg-white rounded shadow my-3 p-5 px-md-10'>
            <div className='d-flex align-items-center'>
                <div className='flex-shrink-0 symbol'>
                    <img
                        className='DetailAnswer_Avatar'
                        src={avatar || UserHelper.getRandomAvatarUrl()}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = UserHelper.getRandomAvatarUrl();
                        }}
                        alt='avatar'
                    />
                </div>
                <div className='flex-grow-1 flex-fill mx-2'>
                    <div className='DetailAnswer_Fullname my-0'>{fullname}</div>
                    <div className='DetailAnswer_CreatedAt mt-1'>Trả lời lúc: {createdAt}</div>
                </div>
                {currentAccount?._id === account ? (
                    <div>
                        <button
                            className='ButtonEllipsis show-option'
                            id='dropdownMenuButton'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'>
                            <i className='fa-2x fal fa-ellipsis-v'></i>
                        </button>

                        <ul className='dropdown-menu my-4' aria-labelledby='dropdownMenuButton'>
                            <li className='dropdown-item cursor-pointer pe-5'>Chỉnh sửa câu trả lời</li>
                            <li className='dropdown-item cursor-pointer' onClick={handleDeleteAnswer}>
                                Xóa câu trả lời
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
            <div
                data-color-mode='light'
                className='overflow-auto'
                style={{
                    display: "grid",
                    width: "auto",
                    minWidth: "0",
                    marginTop: "1rem",
                }}>
                <MDEditor.Markdown source={contentAnswer} />
            </div>
            <div className='mt-5 d-flex justify-content-between align-items-center flex-wrap pt-2 border-top'>
                <div className='d-flex flex-wrap me-auto'>
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
    );
}

export default DetailAnswer;
