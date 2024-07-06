import { Screen } from "@/components/basics/screen";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import { getActionArticle } from "@/store/ui-slices/search-article-slice"
import { useSelector } from "react-redux";
import { Article } from "@/types/types";
import { Heading } from "@/components/basics/heading";
import { Paragraph } from "@/components/basics/paragraph";
import { Link } from "expo-router";

const styles = StyleSheet.create({
	screen: {
		padding: 0
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "cover"
	},
	contentBox: {
		padding: "5%"
	},
	contentTx: {
		paddingTop: 10,
		fontWeight: 400
	},
})

export default function ArticleScreen() {

	const actionArticle: Article = useSelector(getActionArticle)
	
	return (
		<Screen style={styles.screen}>
			<Image source={{uri: actionArticle?.image}} style={styles.image}/>
			<View style={styles.contentBox}>
				<Heading tx={actionArticle?.title} variant="subTitle"/>
				<Paragraph tx={actionArticle?.publishedAt} style={styles.contentTx} />
				<Paragraph tx={actionArticle?.content} style={styles.contentTx} />
				<Link href={"webview"}>Abrir</Link>
			</View>
		</Screen>
	);
}
