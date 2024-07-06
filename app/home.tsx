import { Button } from "@/components/basics/button";
import { Heading } from "@/components/basics/heading";
import { Input } from "@/components/basics/input";
import { Screen } from "@/components/basics/screen";
import React, { useState } from 'react'
import { Link, useNavigation } from "expo-router";
import { useReducer } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { getKeyword, onChangeKeyword } from "@/store/ui-slices/search-article-slice"


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

export default function Home() {

	const navigation = useNavigation()
	const keywordFilter = useSelector(getKeyword)
	const dispatch = useDispatch()

	const onChangeText = (keyword: string) => {
		dispatch(onChangeKeyword({keyword}))
	}

	const search = () => navigation.navigate({ name: "results", params: { keyword: keywordFilter } })

	return (
		<Screen style={{ justifyContent: "center", flex: 1 }}>
			<KeyboardAvoidingView behavior="padding">
				<Heading tx="Tus News" variant="title" style={styles.heading} />
				<Input value={keywordFilter} onChangeText={onChangeText} style={styles.searchNewsInput} />
				<Button style={{ alignSelf: "center" }} tx="Buscar" onPress={search} />
			</KeyboardAvoidingView>
		</Screen>
	);
}
