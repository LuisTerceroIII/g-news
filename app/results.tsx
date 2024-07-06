import { Heading } from "@/components/basics/heading";
import { Screen } from "@/components/basics/screen";
import { ArticleCard } from "@/components/screen/seach-flow/article-card";
import { api } from "@/services/api/api";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useMemo, useReducer } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const reducer = (state, action) => {
	if (action.type === "news") {
		return {
			...state,
			newsData: action.payload
		}
	} else if (action.type === "loading") {
		return {
			...state,
			requestState: "loading"
		}
	} else if (action.type === "endLoading") {
		return {
			...state,
			requestState: "idle"
		}
	}

}

export default function ResultsScreen() {
	
	const { keyword } = useLocalSearchParams<{ keyword: string }>()
	const navigation = useNavigation()
	const [state, dispatch] = useReducer(reducer, { newsData: [], requestState: "idle" })

	useEffect(() => {
		const abortController = new AbortController()
		const fetchData = async () => {
			dispatch({ type: "loading" })
			dispatch({ type: "news", payload: await api.gNewsApi.getFilterNews({ keyword: keyword }, abortController) })
			dispatch({ type: "endLoading" })
		}
		fetchData()
	}, [])

	const newsResults = useMemo(() => {	
		return state?.newsData?.data?.articles?.map((article: any) => {
			const goToNew = () => navigation.navigate({ name: "new", params: { keyword: article } })

			return <ArticleCard article={article} onPress={goToNew} key={article?.url} />
		})
	}, [state?.newsData?.length])

	return (
		<Screen>
			<Heading tx={keyword || ""} variant="title" />
			{state.requestState === "loading" ? <ActivityIndicator /> : (
				<View style={{rowGap: 20, paddingTop: 20}}>
					{newsResults}
				</View>
			)}
		</Screen>
	);
}
