import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack screenOptions={{
			headerStyle: {
				backgroundColor: '#ffff',
			},
			headerTintColor: '#000000',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			headerBackVisible: true
		}}>
			<Stack.Screen name="home" options={{headerShown: false}} />
			<Stack.Screen name="results" options={{ title: "Resultados" }}/>
			<Stack.Screen name="new" options={{ title: "Noticia" }} />
		</Stack>
	);
}
