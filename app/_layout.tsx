import { Stack } from "expo-router";
import { Provider } from 'react-redux'
import store from "@/store/root-store"

export default function RootLayout() {
	return (
		<Provider store={store}>
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
				<Stack.Screen name="home" options={{ headerShown: false }} />
				<Stack.Screen name="results" options={{ title: "Resultados" }} />
				<Stack.Screen name="new" options={{ title: "Noticia" }} />
			</Stack>
		</Provider>
	);
}
