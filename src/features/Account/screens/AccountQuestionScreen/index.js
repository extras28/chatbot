import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    thunkGetDetailQuestion,
    thunkGetQuestionsListOfUser,
} from "features/Question/questionSlice";
import Tag from "general/components/Tag";
import Utils from "general/utils/Utils";
import { useNavigate } from "react-router-dom";

AccountQuestionScreen.propTypes = {};

function AccountQuestionScreen(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { questionsListOfUser } = useSelector((state) => state?.question);
    useEffect(() => {
        async function handleGetQuestionsListOfUser() {
            await dispatch(thunkGetQuestionsListOfUser());
        }
        handleGetQuestionsListOfUser();
        return () => {};
    }, []);

    const tags = ["C", "PHP", "Javascript"];
    return (
        <div className="card mb-5 mb-xl-10 position-relative">
            {/* header */}
            <div className="card-header cursor-pointer d-flex flex-wrap justify-content-between align-items-center">
                <div className="card-title m-0">
                    <h3 className="fw-bold m-0">
                        {questionsListOfUser.length} câu hỏi
                    </h3>
                </div>
            </div>
            {/* body */}
            <div className="card-body p-0">
                {questionsListOfUser?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="d-flex flex-column p-5"
                            style={{ borderBottom: " 1px solid #EBEDF3" }}
                        >
                            <div className="d-flex">
                                <div className="p-2 me-3">
                                    <i className="far fa-comment me-2"></i>2
                                </div>
                                <div className="p-2 me-3">
                                    <i className="far fa-thumbs-up me-2"></i>
                                    10
                                </div>
                                <div className="p-2 me-3">
                                    <i className="far fa-thumbs-down me-2"></i>1
                                </div>
                            </div>
                            <div
                                className="fs-5 my-2"
                                onClick={async () => {
                                    dispatch(
                                        thunkGetDetailQuestion({
                                            _id: item._id,
                                        })
                                    );
                                    navigate("/question/detail");
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                {item.title}
                            </div>
                            <div className="d-flex p-2">
                                {tags.map((tag, index) => (
                                    <Tag key={index} tagName={tag} />
                                ))}
                                <div className="d-flex flex-fill justify-content-end">
                                    Ngày tạo:{" "}
                                    {Utils.formatDateTime(
                                        item?.createdAt,
                                        "DD-MM-YYYY"
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AccountQuestionScreen;
