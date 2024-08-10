import { Redirect } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return <Redirect href={'/home'}/>
}
