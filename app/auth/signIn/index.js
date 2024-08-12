import { View, Text , TextInput, TouchableOpacity, ToastAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from '@firebase/auth';
import {auth} from './../../../configs/FirebaseConfig';

export default function SignIn() {
  
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  useEffect(()=> {
  
    navigation.setOptions({
      headerShown:false
    })

  },[])

  const onSignIn=()=>{
    if(!email&&!password){
      ToastAndroid.show('Please enter Email and Password',ToastAndroid.LONG);
      return;
    }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/(tabs)/home')
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,error.code);
    if(errorCode=='auth/invalid-credential'){
      ToastAndroid.show("Invalid Credentials",ToastAndroid.LONG)
    }
  });
  }

  return (
    <View style={{
      padding:60,
      height:'100%',
      backgroundColor:Colors.WHITE,
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:30
      }}>Lets Sign you In</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:20,
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:10,
      }}>You've been missed</Text>
      {/* email */}
      <View style={{
        marginTop:50,

      }}>
        <Text style={{
          fontFamily:'outfit',

        }}>Email</Text>
        <TextInput style={styles.input}
        onChangeText={(value)=>setEmail(value)} 
        placeholder='Enter Email' />
      </View>
      {/* password */}
      <View style={{
        marginTop:20,

      }}>
        <Text style={{
          fontFamily:'outfit',

        }}>Password</Text>
        <TextInput secureTextEntry={true}
        style={styles.input}
        onChangeText={(value)=>setPassword(value)} 
        placeholder='Enter your Password' />
      </View>
      
      {/* SignIn Button */}
      <TouchableOpacity onPress={onSignIn} style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:20
      }}>
        <Text style={{
          color:Colors.WHITE,
          textAlign:'center'
        }}>Sign In </Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity onPress={()=>router.replace('auth/signUp')} style={{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginTop:20,
        borderWidth:1
      }}>
        <Text style={{
          color:Colors.BLACK,
          textAlign:'center',
          fontFamily:'outfit-bold',
        }}>Create Account </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth:2,
    borderRadius:15,
    borderColor:Colors.GRAY,
    fontFamily:'outfit',
  }
})