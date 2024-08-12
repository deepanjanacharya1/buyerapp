import { Redirect } from "expo-router";
import { Pressable, Text, View } from "react-native";
import LoginScreen from './../components/LoginScreen';
import {auth} from './../configs/FirebaseConfig';

export default function Index() {
  //return <Redirect href={'/home'}/>

  const user=auth.currentUser;
  return (
    <View
      style={{
        flex:1,
      }}
    >
      {user?
        <Redirect href={'(tabs)'}/>:
        <LoginScreen/>
      }
    </View>
  )
}
