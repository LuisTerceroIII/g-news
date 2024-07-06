import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { getActionArticle } from "@/store/ui-slices/search-article-slice"
import { Article } from "@/types/types";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

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
