import { Redirect, useRootNavigationState } from "expo-router";
import { Pressable, Text, View } from "react-native";
import LoginScreen from './../components/LoginScreen';
import {auth} from './../configs/FirebaseConfig';
import { useEffect } from "react";

export default function Index() {
  //return <Redirect href={'/home'}/>

  const user=auth.currentUser;
  const rootNavigationState=useRootNavigationState
  useEffect(()=>{
    checkNavigationLoaded();
  },[])

  const checkNavigationLoaded=()=>{
    if(!rootNavigationState.key)
      return null;
  }
  //const {user} = useUser();
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
