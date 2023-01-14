import questionApi from "api/questionApi";
import PreferenceKeys from "general/constants/PreferenceKey";
import ToastHelper from "general/helpers/ToastHelper";
import Global from "general/utils/Global";
import _ from "lodash";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const thunkGetQuestionsList = createAsyncThunk("question/find", async (params) => {
    const res = await questionApi.getQuestionsList(params);
    return res;
});

export const thunkGetQuestionsListOfUser = createAsyncThunk("question/find-by-person", async (params) => {
    const res = await questionApi.getQuestionsListOfUser(params);
    return res;
});

export const thunkGetDetailQuestion = createAsyncThunk("question/detail", async (params) => {
    const res = await questionApi.thunkGetDetailQuestion(params);
    return res;
});

export const thunkCreateQuestion = createAsyncThunk("question/create", async (params) => {
    const res = await questionApi.createQuestion(params);
    return res;
});

export const thunkEditQuestion = createAsyncThunk("question/update", async (params) => {
    const res = await questionApi.editQuestion(params);
    return res;
});

const questionSlice = createSlice({
    name: "question",
    initialState: {
        isGettingQuestionsList: false,
        isGettingDetailQuestion: false,
        isGettingQuestionsListOfUser: false,
        questionsList: [],
        questionsListOfUser: [],
        detailQuestion: {},
        paginationListQuestion: { perPage: Global.gDefaultPagination },
    },
    reducers: {
        setPaginationQuestionPerPage: (state, action) => {
            return {
                ...state,
                paginationListQuestion: {
                    ...state.paginationListQuestion,
                    perPage: action.payload,
                },
            };
        },
    },
    extraReducers: {
        //get questions list
        [thunkGetQuestionsList.pending]: (state, action) => {
            state.isGettingQuestionsList = true;
        },
        [thunkGetQuestionsList.rejected]: (state, action) => {
            state.isGettingQuestionsList = false;
        },
        [thunkGetQuestionsList.fulfilled]: (state, action) => {
            state.isGettingQuestionsList = false;
            const { total, limit, page, questions, count } = action.payload;
            state.questionsList = questions;
            if (!_.isNull(total) && !_.isNull(page)) {
                state.paginationListQuestion = {
                    ...state.paginationListQuestion,
                    total: total,
                    currentPage: page,
                    perPage: limit,
                    count: count,
                };
                Global.g_needToRefreshQuestions = false;
            }
        },

        //get questions list of user
        [thunkGetQuestionsListOfUser.pending]: (state, action) => {
            state.isGettingQuestionsListOfUser = true;
        },
        [thunkGetQuestionsListOfUser.rejected]: (state, action) => {
            state.isGettingQuestionsListOfUser = false;
        },
        [thunkGetQuestionsListOfUser.fulfilled]: (state, action) => {
            state.isGettingQuestionsListOfUser = false;
            const { total, limit, page, questions, count } = action.payload;
            state.questionsListOfUser = questions;
            if (!_.isNull(total) && !_.isNull(page)) {
                state.paginationListQuestion = {
                    ...state.paginationListQuestion,
                    total: total,
                    currentPage: page,
                    perPage: limit,
                    count: count,
                };
                Global.g_needToRefreshQuestions = false;
            }
        },

        //get detail question
        [thunkGetDetailQuestion.pending]: (state, action) => {
            state.isGettingDetailQuestion = true;
        },
        [thunkGetDetailQuestion.rejected]: (state, action) => {
            state.isGettingDetailQuestion = false;
        },
        [thunkGetDetailQuestion.fulfilled]: (state, action) => {
            state.isGettingDetailQuestion = false;
            const { result, question } = action.payload;
            const { _id } = action.meta.arg;
            if (result === "success") {
                state.detailQuestion = question;
                localStorage.setItem(PreferenceKeys.questionId, _id);
            }
        },

        [thunkCreateQuestion.fulfilled]: (state, action) => {
            const { result } = action.payload;
            if (result === "success") {
                ToastHelper.showSuccess("Thêm câu hỏi thành công.");
            }
        },
        //get detail question
        [thunkEditQuestion.fulfilled]: (state, action) => {
            const { result } = action.payload;
            if (result === "success") {
                ToastHelper.showSuccess("Sửa câu hỏi thành công.");
            }
        },
    },
});

const { reducer, actions } = questionSlice;
export const { setPaginationQuestionPerPage } = actions;
export default reducer;
