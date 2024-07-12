
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootStore } from "../root-store"
import { User } from "@/model/entities/user"
import { Article } from "@/model/entities/article"

interface UserSliceState {
    user: User
}

const initialState: UserSliceState = {
    user: new User()
}

export const UserSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        saveArticle: (state, action: PayloadAction<{article: Article}>) => {
            state.user.getUserInteractions.savedArticles.saveArticle(action.payload.article)
        }
    }
})
export const { saveArticle } = UserSlice.actions
export const getSavedArticles = (state: RootStore) => state.userSlice?.user?.getUserInteractions?.getSavedArticles

export default UserSlice.reducer