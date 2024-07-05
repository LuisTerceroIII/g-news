import { Heading } from "@/components/basics/heading";
import { Screen } from "@/components/basics/screen";
import { api } from "@/services/api/api";
import { useLocalSearchParams } from "expo-router";
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

export default function NewScreen() {
	const { keyword } = useLocalSearchParams<{ keyword: string }>()
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
		return state?.newsData?.data?.articles?.map((newData: any) => {
			return <Heading tx={JSON.stringify(newData)} variant="subTitle" key={newData?.url} />
		})
	}, [state?.newsData?.length])

	return (
		<Screen>
			<Heading tx={keyword || ""} variant="title" />
			{state.requestState === "loading" ? <ActivityIndicator /> : (
				<View>
					{newsResults}
				</View>
			)}
		</Screen>
	);
}
