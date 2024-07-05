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
      <Stack.Screen name="Home" />
      <Stack.Screen name="New" />
      <Stack.Screen name="New_Interest" options={{ title: "Nuevo interes" }} />
    </Stack>
  );
}
