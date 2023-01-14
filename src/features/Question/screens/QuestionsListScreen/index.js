import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./style.scss";
import MiniProfile from "general/components/MiniProfile";
import BaseLayout from "general/components/BaseLayout";
import { useEffect } from "react";
import Utils from "general/utils/Utils";
import BaseSearchBar from "general/components/Form/BaseSearchBar";
import { useState } from "react";
import Loading from "general/components/Loading";
import Empty from "general/components/Empty";
import AppResource from "general/constants/AppResource";
import {
    setPaginationQuestionPerPage,
    thunkGetDetailQuestion,
    thunkGetQuestionsList,
} from "features/Question/questionSlice";
import SummaryQuestion from "features/Question/Component/SummaryQuestion";
import Global from "general/utils/Global";
import Pagination from "general/components/Pagination";
import { useNavigate } from "react-router-dom";

QuestionsListScreen.propTypes = {};

function QuestionsListScreen(props) {
    const [filters, setFilters] = useState({
        q: "",
        page: 1,
        limit: Global.gDefaultPagination,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isGettingQuestionsList, questionsList, paginationListQuestion } = useSelector((state) => state?.question);
    // console.log(questionsList);
    useEffect(() => {
        dispatch(thunkGetQuestionsList(filters));
    }, [filters]);
    return (
        <BaseLayout selected="questions">
            <div className='container-xxl'>
                <div className='max-w-200px'>
                    <BaseSearchBar
                        placeholder='Tìm kiếm câu hỏi'
                        value={filters.q}
                        name='questionFilter'
                        onSubmit={(value) => {
                            setFilters({ ...filters, q: value });
                        }}
                    />
                </div>
                <div>
                    {isGettingQuestionsList ? (
                        <div className='d-flex align-items-center justify-content-center mt-8'>
                            <Loading showBackground={false} message='Đang lấy dữ liệu' />
                        </div>
                    ) : questionsList?.length > 0 ? (
                        questionsList?.map((item, index) => {
                            return (
                                <div
                                    className='cursor-pointer custom-cell'
                                    key={index}
                                    onClick={async () => {
                                        navigate(`/question/detail/${item?._id}`);
                                    }}>
                                    <SummaryQuestion
                                        tags={item?.tagIds}
                                        avatar={item?.account?.avatar?.path}
                                        userName={item?.account?.fullname}
                                        createAt={Utils.formatDateTime(item?.createdAt, "DD-MM-YYYY")}
                                        titleQuestion={item?.title}
                                        comments='15'
                                        likes={item?.like}
                                        dislikes={item?.dislike}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <div className='mt-8'>
                            <Empty
                                text='Không có kết quả phù hợp'
                                buttonText='Làm mới'
                                visible={false}
                                imageEmpty={AppResource.images.errorStates.noMatchFound}
                            />
                        </div>
                    )}
                    <div>
                        {questionsList?.length > 0 && (
                            <div className='d-flex align-items-center justify-content-center mt-0'>
                                <Pagination
                                    rowsPerPage={paginationListQuestion.perPage}
                                    rowCount={paginationListQuestion.count ?? questionsList?.length}
                                    currentPage={paginationListQuestion.currentPage ?? 1}
                                    onChangePage={(newPage) => {
                                        let iNewPage = parseInt(newPage);
                                        Global.g_needToRefreshQuestions = true;
                                        setFilters({
                                            ...filters,
                                            page: iNewPage,
                                        });
                                    }}
                                    onChangeRowsPerPage={(newPerPage) => {
                                        const iNewPerPage = parseInt(newPerPage);
                                        dispatch(setPaginationQuestionPerPage(iNewPerPage));
                                        Global.g_needToRefreshQuestions = true;
                                        setFilters({
                                            ...filters,
                                            page: 1,
                                            limit: iNewPerPage,
                                        });
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}

export default QuestionsListScreen;
