import { configureStore } from "@reduxjs/toolkit";
import { sideBarSliceReducer } from "./sidebarSlice";

const store = configureStore({
    reducer: {
        sideBarSliceReducer: sideBarSliceReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;