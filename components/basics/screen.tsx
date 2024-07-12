import React, { FC } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, ViewStyle } from 'react-native'

interface ScreenProps {
	style?: ViewStyle
	scrollStyle?: ViewStyle
	children?: React.ReactNode
}

const styles = StyleSheet.create({
	screen : {
		flexGrow: 1
	},
	scroll: {
		width: "100%",
		paddingVertical: "5%"
	}
})

export const Screen: FC<ScreenProps> = (props) => {
	
	const { style, scrollStyle, children } = props

	return (
		<SafeAreaView style={[styles.screen, style]}>
			<ScrollView contentContainerStyle={[styles.scroll, style]} nestedScrollEnabled>
				{children}
			</ScrollView>
		</SafeAreaView>
  	)
}
