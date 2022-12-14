import { AnyAction, EnhancedStore } from "@reduxjs/toolkit";
import { ThunkMiddleware } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import responsiveReducer from "@Slices/responsive/responsiveSlice";
// import pageLoadingReducer from "~Store/slices/PageLoading/PageLoadingSlice";

/* Returns the type of a redux store with a given slice; for anootating type of store parameters in functions/classes */
export type ReduxStoreWithSlice<SliceState = {}> = EnhancedStore<{
	responsive: SliceState;
}, AnyAction, [ThunkMiddleware<{
	responsive: SliceState;
}, AnyAction, undefined>]>

export const store = configureStore({
	reducer: {
		responsive: responsiveReducer,
		// pageLoading: pageLoadingReducer,
	}
})

// Infer the `RootState` and `AppDispatch` from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type of reducers object for dispatch
export type AppDispatch = typeof store.dispatch;