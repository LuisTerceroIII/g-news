import { Button } from "@/components/basics/button";
import { Heading } from "@/components/basics/heading";
import { Input } from "@/components/basics/input";
import { Screen } from "@/components/basics/screen";
import { Interests } from "@/components/screens/home/interests/interests";
import { Link, useNavigation } from "expo-router";
import { useReducer } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	heading: {
		color: "purple",
		alignSelf: "center"
	},
	searchNewsInput: {
		marginVertical: 20
	},
	subtitle: {
		color: "purple",
		marginVertical: 20,
		alignSelf: "flex-start"
	},
	link: {
		color: "white",
		fontSize: 16,
		fontWeight: 600
	}
})

interface HomeStates {
	keywordFilter: string
}
enum HomeActions {
	onChangeKeywordFilter = 'onChangeKeywordFilter'
}
interface Action {
	type: HomeActions,
	payload?: any
}
function reducer(state: HomeStates, action: Action) {
	if (action.type === 'onChangeKeywordFilter') {
		return {
			...state,
			keywordFilter: action.payload
		};
	}
	throw Error('Unknown action.');
}

export default function Home() {

	const navigation = useNavigation()
	const [state, dispatch] = useReducer(reducer, { keywordFilter: "" })

	const onChangeKeyword = (keyword: string) => {
		dispatch({ type: HomeActions.onChangeKeywordFilter, payload: keyword })
	}

	const search = () => navigation.navigate({ name: "results", params: { keyword: state.keywordFilter } })

	return (
		<Screen style={{ justifyContent: "center", flex: 1 }}>
			<KeyboardAvoidingView behavior="padding">
				<Heading tx="Tus News" variant="title" style={styles.heading} />
				<Input value={state.keywordFilter} onChangeText={onChangeKeyword} style={styles.searchNewsInput} />
				<Button style={{ alignSelf: "center" }} tx="Buscar" onPress={search} />
			</KeyboardAvoidingView>
		</Screen>
	);
}