import { View, Text } from 'react-native'
import React from 'react'
import { FlipOutEasyX } from 'react-native-reanimated'

export default function LoginScreen() {
  return (
    <View>
      <Image source={require('./../../assets/images/Login.png')}
      style={{
        width:'100%',
        height:500
      }}
    />
    <View style={{
        padding:20,
        display:'flex',
        alignItems:'center'
    }}>
    <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        textAlign:'center'
    }}>Ready to Order?</Text>
    </View>
</View>
  )
}