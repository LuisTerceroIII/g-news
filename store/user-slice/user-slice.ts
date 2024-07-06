import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Article, ArticlesGroup } from "@/types/types"

interface UserSliceState {
    articlesGroups: ArticlesGroup[]
    actionGroup: ArticlesGroup
}

const initialState: UserSliceState = {
    actionGroup: new ArticlesGroup(),
    articlesGroups: []
}

export const UserSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        createGroup: (state, action: PayloadAction<{group: ArticlesGroup}>) => {
            if(action.payload?.group?.name === "") return
            state.articlesGroups.push(action.payload?.group)
        },
        onChangeGroupName: (state, action: PayloadAction<{name: string}>) => {
            state.actionGroup.name = action.payload.name || ""
        },
        onChangeGroupDescription: (state, action: PayloadAction<{name: string}>) => {
            state.actionGroup.name = action.payload.name || ""
        },
        addArticleToGroup: (state, action: PayloadAction<{groupId: string, article: Article}>) => {
            const groupToUse = state.articlesGroups?.find(group => group?.id === action.payload.groupId)
            if(groupToUse == null) return
            state.actionGroup = groupToUse
            state.actionGroup.articles.push(action.payload.article)
        }
    }
})