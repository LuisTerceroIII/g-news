import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    keyword: ""
}

export const searchArticlesSlice = createSlice({
    name: "searchArticlesSlice",
    initialState: initialState,
    reducers: {
        onChangeKeyword: (state, action: PayloadAction<{keyword: string}>) => {
            state.keyword = action.payload.keyword
        }
    }
})

export const { onChangeKeyword } = searchArticlesSlice.actions
export const getKeyword = (state: any) => state.searchArticleSlice?.keyword

export default searchArticlesSlice.reducer