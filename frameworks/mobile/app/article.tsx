import { Screen } from "@/components/basics/screen";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import { getActionArticle } from "@/store/ui-slices/search-article-slice"
import { saveArticle } from "@/store/user-slice/user-slice"

import { useDispatch, useSelector } from "react-redux";
import { Heading } from "@/components/basics/heading";
import { Paragraph } from "@/components/basics/paragraph";
import { Link } from "expo-router";
import { Button } from "@/components/basics/button";
import { Article } from "@/model/articles/article";

const styles = StyleSheet.create({
	screen: {
		padding: 0,
		flexGrow: 1
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
	const dispatch = useDispatch()

	const handleSaveArticle = () => {
		dispatch(saveArticle({article: actionArticle}))
	}
	
	return (
		<Screen style={styles.screen}>
			<Image source={{uri: actionArticle?.image}} style={styles.image}/>
			<View style={styles.contentBox}>
				<Heading tx={actionArticle?.title} variant="subTitle"/>
				<Paragraph tx={actionArticle?.publishedAt} style={styles.contentTx} />
				<Paragraph tx={actionArticle?.content} style={styles.contentTx} />
				<Link href={"webview"}>Abrir</Link>

				<Button
					tx="Save"
					onPress={handleSaveArticle} 
				/>
			</View>
		</Screen>
	);
}
