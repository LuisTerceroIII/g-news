import { configureStore } from '@reduxjs/toolkit'
import searchArticleSliceReducer from '@/store/ui-slices/search-article-slice'

export default configureStore({
  reducer: {
    searchArticleSlice: searchArticleSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})