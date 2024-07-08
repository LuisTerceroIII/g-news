import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import searchArticleSliceReducer from '@/store/ui-slices/search-article-slice'
import UserSliceReducer from './user-slice/user-slice';

const rootReducer = combineReducers({
	searchArticleSlice: searchArticleSliceReducer,
	userSlice: UserSliceReducer
})

export const rootStore = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => (
		getDefaultMiddleware({
			serializableCheck: false
		})
	)
		
})

export type RootStore = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default rootStore