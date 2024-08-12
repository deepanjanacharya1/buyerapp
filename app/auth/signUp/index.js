import { View, Text, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from './../../../configs/FirebaseConfig';
import { createUserWithEmailAndPassword } from '@firebase/auth';

export default function SignUp() {
  const navigation=useNavigation();
  const router=useRouter();

  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const [fullName, setfullName]=useState();
  
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

  const OnCreateAccount=()=>{
    if(!email&&!password&&!fullName){
      ToastAndroid.show('Please enter all details',ToastAndroid.BOTTOM);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    router.replace('/home')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('--',errorMessage,errorCode);
    // ..
  });
  }

  return (
    <View style={{
      padding:25,
      paddingTop:50,
      backgroundColor:Colors.WHITE,
      height:'100%',

    }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:30
      }}>Create New Account</Text>
      
      {/* User Full Name */}
      <View style={{
        marginTop:20,

      }}>
        <Text style={{
          fontFamily:'outfit',

        }}>Full Name</Text>
        <TextInput style={styles.input} placeholder='Enter Your Full Name'
        onChangeText={(value)=>setfullName(value)} />
      </View>

      {/* email */}
      <View style={{
        marginTop:20,

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
      {/* Create Account Button */}
      <TouchableOpacity onPress={OnCreateAccount} style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:40
      }}>
        <Text style={{
          color:Colors.WHITE,
          textAlign:'center'
        }}>Create Account </Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity onPress={()=>router.replace('auth/signIn')} style={{
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
        }}>Sign In</Text>
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