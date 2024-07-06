import { Screen } from "@/components/basics/screen";
import { Text, View } from "react-native";
import { getActionArticle } from "@/store/ui-slices/search-article-slice"
import { useSelector } from "react-redux";
import { ArticleCard } from "@/components/screen/seach-flow/article-card";

export default function NewScreen() {

	const actionArticle = useSelector(getActionArticle)
	
	return (
		<Screen>
			<ArticleCard article={actionArticle}/>
		</Screen>
	);
}
