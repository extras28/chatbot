import authApi from "api/authApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const thunkGetUsersList = createAsyncThunk(
    "user/find",
    async (params) => {
        const res = await authApi.getAccountList(params);
        return res;
    }
);

const usersListSlice = createSlice({
    name: "user",
    initialState: {
        isGettingUsersList: false,
        usersList: [],
    },
    reducers: {},
    extraReducers: {
        //get users list
        [thunkGetUsersList.pending]: (state, action) => {
            state.isGettingUsersList = true;
        },
        [thunkGetUsersList.rejected]: (state, action) => {
            state.isGettingUsersList = false;
        },
        [thunkGetUsersList.fulfilled]: (state, action) => {
            state.isGettingUsersList = false;
            const list = action.payload;
            state.usersList = list;
        },
    },
});

const { reducer, actions } = usersListSlice;
export const {} = actions;
export default reducer;
