import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-psemibold">AI Storage! finally...</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="font-pmedium font-blue">
        <Text className="font-pmedium">go to profile</Text>
      </Link>
    </View>
  );
}

