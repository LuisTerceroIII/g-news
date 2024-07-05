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
      <Stack.Screen name="index" />
      <Stack.Screen name="new" />
    </Stack>
  );
}
