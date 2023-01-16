import React from "react";
import PropTypes from "prop-types";
import UserHelper from "general/helpers/UserHelper";
import MDEditor from "@uiw/react-md-editor";
import Tag from "general/components/Tag";
import "./style.scss";
import { useSelector } from "react-redux";

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
    const { currentAccount } = useSelector((state) => state?.auth);
    const { detailQuestion } = useSelector((state) => state?.question);
    const isMyQuestion = currentAccount?._id === detailQuestion?.account?._id;

    return (
        <div className="DetailQuestion bg-white rounded shadow p-5 p-md-10">
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0 symbol">
                    <img
                        className="DetailQuestion_Avatar"
                        src={avatar || UserHelper.getRandomAvatarUrl()}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = UserHelper.getRandomAvatarUrl();
                        }}
                        alt="avatar"
                    />
                </div>
                <div className="flex-grow-1 flex-fill mx-2">
                    <div className="fw-bold fs-5 my-0">{fullname}</div>
                </div>
                <div>
                    <button
                        className="ButtonEllipsis show-option"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa-2x fal fa-ellipsis-v"></i>
                    </button>

                    {isMyQuestion && (
                        <ul
                            className="dropdown-menu my-4"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <li className="dropdown-item cursor-pointer pe-5">
                                Chỉnh sửa câu hỏi
                            </li>
                            <li className="dropdown-item cursor-pointer">
                                Xóa câu hỏi
                            </li>
                        </ul>
                    )}
                    {!isMyQuestion && (
                        <ul
                            className="dropdown-menu my-4"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <li className="dropdown-item cursor-pointer">
                                Báo cáo
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="content pt-4">
                <div className="fw-bold fs-3">{title}</div>
                <div className="mt-1 fw-normal fs-6">Ngày tạo: {createdAt}</div>
            </div>
            <div
                data-color-mode="light"
                className="overflow-auto"
                style={{ display: "grid", width: "auto", minWidth: "0" }}
            >
                <MDEditor.Markdown source={contentTextProblem} />
            </div>
            <div
                data-color-mode="light"
                className="mt-5 overflow-auto"
                style={{ display: "grid", width: "auto", minWidth: "0" }}
            >
                <MDEditor.Markdown source={contentTextExpect} />
            </div>
            <div className="mt-5 d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex flex-fill flex-wrap">
                    {tags?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="badge badge-secondary mr-4 d-flex align-items-center"
                            >
                                <span>{item?.name}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="d-flex flex-wrap ms-auto">
                    <button className="btn">
                        <i className="fas fa-comment"></i>
                        {comments}
                    </button>
                    <button className="btn">
                        <i className="fas fa-thumbs-up"></i>
                        {likes}
                    </button>
                    <button className="btn">
                        <i className="fas fa-thumbs-down"></i>
                        {dislikes}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailQuestion;
