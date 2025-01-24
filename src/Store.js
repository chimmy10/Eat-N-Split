import { configureStore } from "@reduxjs/toolkit";
import splitReducer from "./Context";

export const store = configureStore({
	reducer: {
		split: splitReducer,
	},
});
