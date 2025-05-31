import { createSlice } from "@reduxjs/toolkit";

const initialState = {toggleSideBar: false}

const sideBarSlice = createSlice({
    name: "SideBar slice",
    initialState,
    reducers:{
        handleToogleSideBar(state){
            state.toggleSideBar = !state.toggleSideBar
        }
    }
});

export const { handleToogleSideBar }  = sideBarSlice.actions;
export const sideBarSliceReducer = sideBarSlice.reducer