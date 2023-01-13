import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetDetailQuestion, thunkGetQuestionsListOfUser } from "features/Question/questionSlice";
import Tag from "general/components/Tag";
import Utils from "general/utils/Utils";
import { useNavigate } from "react-router-dom";
import ModalEditQuestion from "features/Account/components/ModalEditQuestion";
import DialogModal from "general/components/DialogModal";

AccountQuestionScreen.propTypes = {};

function AccountQuestionScreen(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { questionsListOfUser } = useSelector((state) => state?.question);
    const [showModalEditQuestion, setShowModalEditQuestion] = useState(false);
    const [showModalDeleteQuestion, setShowModalDeleteQuestion] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState({});
    useEffect(() => {
        async function handleGetQuestionsListOfUser() {
            await dispatch(thunkGetQuestionsListOfUser());
        }
        handleGetQuestionsListOfUser();
        return () => {};
    }, []);

    const tags = ["C", "PHP", "Javascript"];
    return (
        <div className='card mb-5 mb-xl-10 position-relative'>
            {/* header */}
            <div className='card-header cursor-pointer d-flex flex-wrap justify-content-between align-items-center'>
                <div className='card-title m-0'>
                    <h3 className='fw-bold m-0'>Câu hỏi: {questionsListOfUser.length}</h3>
                </div>
            </div>
            {/* body */}
            <div className='card-body p-0'>
                {questionsListOfUser?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='d-flex flex-column p-5'
                            style={{ borderBottom: " 1px solid #EBEDF3" }}>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <div
                                    className='fs-5 my-2 font-weight-bolder'
                                    onClick={async () => {
                                        dispatch(
                                            thunkGetDetailQuestion({
                                                _id: item._id,
                                            })
                                        );
                                        navigate("/question/detail");
                                    }}
                                    style={{ cursor: "pointer" }}>
                                    {item.title}
                                </div>
                                <div className='d-flex align-items-center'>
                                    <a
                                        className='btn btn-icon btn-sm btn-light-primary btn-hover-primary mr-2'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedQuestion(item);
                                            setShowModalEditQuestion(true);
                                        }}>
                                        <i className='far fa-pen p-0 icon-1x' />
                                    </a>
                                    <a
                                        className='btn btn-icon btn-sm btn-light-danger btn-hover-danger'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedQuestion(item);
                                            setShowModalDeleteQuestion(true);
                                        }}>
                                        <i className='far fa-trash p-0 icon-1x' />
                                    </a>
                                </div>
                            </div>

                            <div className='d-flex mt-4'>
                                {item?.tagIds?.map((tag, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className='badge badge-secondary mr-4 d-flex align-items-center'>
                                            <span>{tag?.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='d-flex mt-4 justify-content-between flex-wrap'>
                                <div className='d-flex'>
                                    <div className='p-2 me-3'>
                                        <i className='fas fa-comment me-2 text-hover-success cursor-pointer'></i>2
                                    </div>
                                    <div className='p-2 me-3'>
                                        <i className='fas fa-thumbs-up me-2 text-hover-primary cursor-pointer'></i>
                                        {item?.likeCount ? item?.likeCount : 0}
                                    </div>
                                    <div className='p-2 me-3'>
                                        <i className='fas fa-thumbs-down me-2 text-hover-danger cursor-pointer'></i>
                                        {item?.dislikeCount ? item?.dislikeCount : 0}
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    Ngày tạo: {Utils.formatDateTime(item?.createdAt, "DD-MM-YYYY")}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ModalEditQuestion
                onClose={() => setShowModalEditQuestion(false)}
                show={showModalEditQuestion}
                questionItem={selectedQuestion}
            />
            <DialogModal
                title='Xóa câu hỏi'
                description={`Bạn có chắc muốn xóa câu hỏi với tiêu đề ${selectedQuestion?.title}`}
                show={showModalDeleteQuestion}
                onClose={() => setShowModalDeleteQuestion(false)}
                onExecute={() => console.log(selectedQuestion)}
            />
        </div>
    );
}

export default AccountQuestionScreen;
