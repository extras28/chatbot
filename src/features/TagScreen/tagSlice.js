import tagApi from "api/tagApi";
import Global from "general/utils/Global";
import _ from "lodash";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const thunkGetTagList = createAsyncThunk("tag/find", async (params) => {
    const res = await tagApi.getTags(params);
    return res;
});

const tagSlice = createSlice({
    name: "tag",
    initialState: {
        isGettingTags: false,
        tags: [],
        paginationTags: { perPage: Global.gDefaultPagination },
    },
    reducers: {
        setPaginationTagPerPage: (state, action) => {
            return {
                ...state,
                paginationTags: {
                    ...state.paginationTags,
                    perPage: action.payload,
                },
            };
        },
    },
    extraReducers: {
        //get tags list
        [thunkGetTagList.pending]: (state, action) => {
            state.isGettingTags = true;
        },
        [thunkGetTagList.rejected]: (state, action) => {
            state.isGettingTags = false;
        },
        [thunkGetTagList.fulfilled]: (state, action) => {
            state.isGettingTags = false;
            const { limit, page, tags, count } = action.payload;
            state.tags = tags;
            if (!_.isNull(count) && !_.isNull(page)) {
                state.paginationTags = {
                    ...state.paginationTags,
                    currentPage: page,
                    perPage: limit,
                    count: count,
                };
            }
            Global.g_needToRefreshTags = false;
        },
    },
});

const { reducer, actions } = tagSlice;
export const { setPaginationTagPerPage } = actions;
export default reducer;
