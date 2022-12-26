import questionApi from "api/questionApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const thunkGetQuestionsList = createAsyncThunk(
    "question/find",
    async (params) => {
        const res = await questionApi.getQuestionsList(params);
        return res;
    }
);

const questionSlice = createSlice({
    name: "question",
    initialState: {
        isGettingQuestionsList: false,
        questionsList: [],
    },
    reducers: {},
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
            const list = action.payload;
            state.questionsList = list;
        },
    },
});

const { reducer, actions } = questionSlice;
export const {} = actions;
export default reducer;
