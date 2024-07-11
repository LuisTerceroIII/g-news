import { api } from '@/services/api/api'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootStore } from '../root-store'
import { Article } from '@/model/articles/article'

interface SearchState {
    keyword: string
    actionArticle: Article
    requestState: 'idle' | 'pending' | 'succeeded' | 'failed'
    articlesResults: Article[]
}

const initialState: SearchState = {
    keyword: "",
    actionArticle: new Article(),
    requestState: "idle",
    articlesResults: []
}

export const searchArticlesSlice = createSlice({
    name: "searchArticlesSlice",
    initialState: initialState,
    reducers: {
        onChangeKeyword: (state, action: PayloadAction<{keyword: string}>) => {
            state.keyword = action.payload.keyword
        },
        setActionArticle: (state, action: PayloadAction<{article: Article}>) => {
            state.actionArticle = action.payload.article
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchByKeywordAsync.pending, (state, action) => {
            state.requestState = "pending"
            state.articlesResults = []
        })
        .addCase(searchByKeywordAsync.fulfilled, (state, action) => {
            state.requestState = "succeeded"
            state.articlesResults = action.payload?.data?.articles
        })
        .addCase(searchByKeywordAsync.rejected, (state, action) => {
            state.requestState = "failed"
        })
    }
})

export const searchByKeywordAsync = createAsyncThunk(
    "searchArticleSlice/searchByKeyword",
    async (keyword: string) => {
        const abortController = new AbortController()
        return await api.gNewsApi.getFilterNews({ keyword }, abortController)
    }
)

export const { onChangeKeyword, setActionArticle } = searchArticlesSlice.actions
export const getKeyword = (state: RootStore) => state.searchArticleSlice?.keyword
export const getActionArticle = (state: RootStore) => state.searchArticleSlice?.actionArticle
export const getResultArticles = (state: RootStore) => state.searchArticleSlice?.articlesResults
export const getRequestState = (state: RootStore) => state.searchArticleSlice?.requestState


export default searchArticlesSlice.reducer