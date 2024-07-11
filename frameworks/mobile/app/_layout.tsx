import { Stack } from "expo-router";
import { Provider } from 'react-redux'
import rootStore from "@/store/root-store"

export default function RootLayout() {
	return (
		<Provider store={rootStore}>
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
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="results" options={{ title: "Resultados" }} />
				<Stack.Screen name="article" options={{ title: "Noticia" }} />
				<Stack.Screen name="webview" />
			</Stack>
		</Provider>
	);
}
