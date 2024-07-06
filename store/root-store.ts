import { configureStore } from '@reduxjs/toolkit'
import searchArticleSliceReducer from '@/store/ui-slices/search-article-slice'
import { useDispatch } from 'react-redux';

export const rootStore = configureStore({
	reducer: {
		searchArticleSlice: searchArticleSliceReducer
	},
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