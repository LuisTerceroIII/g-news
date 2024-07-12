import { Heading } from "@/components/basics/heading";
import { Screen } from "@/components/basics/screen";
import { ArticleCard } from "@/components/screen/seach-flow/article-card";
import { useNavigation } from "expo-router";
import { useMemo } from "react";
import { FlatList} from "react-native";
import { setActionArticle } from "@/state/ui-slices/search-article-slice"
import { useSelector } from "react-redux";
import { getSavedArticles } from "@/state/user-slice/user-slice"
import { useAppDispatch } from "@/state/root-store";
import { Article } from "@/model/entities/article";

export default function SavedArticlesScreen() {

	const navigation = useNavigation()
	const dispatch = useAppDispatch()
	const savedArticles = useSelector(getSavedArticles)

	const newsResults = useMemo(() => {
		return ({ item } : { item: Article}) => {
			const goToNew = () => {
				dispatch(setActionArticle({ article: item }))
				navigation.navigate("article")
			}
			return <ArticleCard article={item} onPress={goToNew} key={item?.url} />
		}
	}, [savedArticles?.length])

	return (
		<Screen>
			<Heading tx={"Articulos Guardados"} variant="title" style={{paddingHorizontal: "5%"}}/>
			<FlatList 
				data={savedArticles}
				renderItem={newsResults}
				keyExtractor={item => item?.id}
				contentContainerStyle={{ rowGap: 20, paddingTop: 20, paddingHorizontal: "5%", flexGrow: 1 }}
			/>

		</Screen>
	);
}
