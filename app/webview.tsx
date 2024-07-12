import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { getActionArticle } from "@/state/ui-slices/search-article-slice"
import { Article } from "@/model/entities/article";
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default function WebviewScreen() {

	const actionArticle: Article = useSelector(getActionArticle)

	return (
		<WebView
			style={styles.container}
			source={{ uri: actionArticle?.url }}
		/>
	);
}
