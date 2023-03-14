import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fcmToken: null
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFcmToken: (state, action) => {
            state.fcmToken = action.payload
        },
    }
})

export const { setFcmToken } = UserSlice.actions

export default UserSlice.reducer