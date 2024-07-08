import { Heading } from "@/components/basics/heading";
import { Screen } from "@/components/basics/screen";
import { ArticleCard } from "@/components/screen/seach-flow/article-card";
import { useNavigation } from "expo-router";
import { useMemo } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { setActionArticle } from "@/store/ui-slices/search-article-slice"
import { useSelector } from "react-redux";
import { getSavedArticles } from "@/store/user-slice/user-slice"
import { useAppDispatch } from "@/store/root-store";

export default function SavedArticlesScreen() {

	const navigation = useNavigation()
	const dispatch = useAppDispatch()
	const savedArticles = useSelector(getSavedArticles)
	console.log("🚀 ~ SavedArticlesScreen ~ savedArticles:", savedArticles)

	const newsResults = useMemo(() => {
		return savedArticles?.map((article: any) => {
			const goToNew = () => {
				dispatch(setActionArticle({ article }))
				navigation.navigate("article")
			}
			return <ArticleCard article={article} onPress={goToNew} key={article?.url} />
		})
	}, [savedArticles?.length])

	return (
		<Screen>
			<Heading tx={"Articulos Guardados"} variant="title" />

			<View style={{ rowGap: 20, paddingTop: 20 }}>
				{newsResults}
			</View>

		</Screen>
	);
}
