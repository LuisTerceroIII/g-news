import { Button } from '@/components/basics/button'
import { useNavigation } from 'expo-router'
import React, { FC } from 'react'
import { View } from 'react-native'

interface InterestsProps {

}

export const Interests: FC<InterestsProps> = (props) => {

	const navigation = useNavigation()
	
	const goToNewInterest = () => navigation.navigate("New_Interest")

	return (
		<View>
			<Button 
				tx='Nuevo interes' 
				style={{alignSelf: "center"}}
				onPress={goToNewInterest}
			/>
		</View>
	)
}
