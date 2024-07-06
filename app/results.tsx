import { Heading } from "@/components/basics/heading";
import { Screen } from "@/components/basics/screen";
import { ArticleCard } from "@/components/screen/seach-flow/article-card";
import { api } from "@/services/api/api";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useMemo, useReducer } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { setActionArticle } from "@/store/ui-slices/search-article-slice"
import { useDispatch, useSelector } from "react-redux";
import { searchByKeywordAsync, getResultArticles, getRequestState } from "@/store/ui-slices/search-article-slice"

export default function ResultsScreen() {
	
	const { keyword } = useLocalSearchParams<{ keyword: string }>()
	console.log("🚀 ~ ResultsScreen ~ keyword:", keyword)
	const navigation = useNavigation()
	const dispatch = useDispatch<any>()
	const resultArticles = useSelector(getResultArticles)
	const requestState = useSelector(getRequestState)
	
	useEffect(() => {
		dispatch(searchByKeywordAsync(keyword || ""))
	}, [keyword])

	const newsResults = useMemo(() => {	
		return resultArticles?.map((article: any) => {
			const goToNew = () => {
				dispatch(setActionArticle({article}))
				navigation.navigate("new")
			}
			return <ArticleCard article={article} onPress={goToNew} key={article?.url} />
		})
	}, [resultArticles?.length, keyword])

	return (
		<Screen>
			<Heading tx={keyword || ""} variant="title" />
			{requestState === "pending" ? <ActivityIndicator /> : (
				<View style={{rowGap: 20, paddingTop: 20}}>
					{newsResults}
				</View>
			)}
		</Screen>
	);
}
