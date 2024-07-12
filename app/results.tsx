import { Heading } from "@/components/basics/heading";
import { Screen } from "@/components/basics/screen";
import { ArticleCard } from "@/components/screen/seach-flow/article-card";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useMemo, useReducer } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { setActionArticle } from "@/state/ui-slices/search-article-slice"
import { useSelector } from "react-redux";
import { searchByKeywordAsync, getResultArticles, getRequestState } from "@/state/ui-slices/search-article-slice"
import { useAppDispatch } from "@/state/root-store";

export default function ResultsScreen() {
	
	const { keyword } = useLocalSearchParams<{ keyword: string }>()
	const navigation = useNavigation()
	const dispatch = useAppDispatch()
	const resultArticles = useSelector(getResultArticles)
	const requestState = useSelector(getRequestState)
	
	useEffect(() => {
		dispatch(searchByKeywordAsync(keyword || ""))
	}, [])

	const newsResults = useMemo(() => {	
		return resultArticles?.map((article: any) => {
			const goToNew = () => {
				dispatch(setActionArticle({article}))
				navigation.navigate("article")
			}
			return <ArticleCard article={article} onPress={goToNew} key={article?.url} />
		})
	}, [resultArticles?.length, keyword])

	return (
		<Screen>
			<Heading tx={keyword || ""} variant="title" style={{paddingHorizontal: "5%"}}/>
			{requestState === "pending" ? <ActivityIndicator /> : (
				<View style={{rowGap: 20, paddingTop: 20, paddingHorizontal: "5%"}}>
					{newsResults}
				</View>
			)}
		</Screen>
	);
}
