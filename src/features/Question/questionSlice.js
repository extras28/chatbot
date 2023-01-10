import questionApi from "api/questionApi";
import ToastHelper from "general/helpers/ToastHelper";
import Global from "general/utils/Global";
import _ from "lodash";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const thunkGetQuestionsList = createAsyncThunk(
    "question/find",
    async (params) => {
        const res = await questionApi.getQuestionsList(params);
        return res;
    }
);
export const thunkCreateQuestion = createAsyncThunk(
    "question/create",
    async (params) => {
        const res = await questionApi.createQuestion(params);
        return res;
    }
);

const questionSlice = createSlice({
    name: "question",
    initialState: {
        isGettingQuestionsList: false,
        questionsList: [],
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
        [thunkCreateQuestion.fulfilled]: (state, action) => {
            const { result } = action.payload;
            if (result === "success") {
                ToastHelper.showSuccess("Thêm câu hỏi thành công.")
            }
        },
    },
});

const { reducer, actions } = questionSlice;
export const { setPaginationQuestionPerPage } = actions;
export default reducer;
