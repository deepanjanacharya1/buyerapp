import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './../constants/Colors'
import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function LoginScreen() {
     
    const router = useRouter();

  return (
    <View>
        <View style={{
            display:"flex",
            alignment:'center',
            marginTop:100,
            elevation:1
        }}>
        <Image source={require('./../assets/images/digital-grocery-shopping-stockcake.jpg')}
            style={{
                width:'100%',
                height:450,
                borderRadius:0,
                borderWidth:1,
                borderColor:'#000',
                alignment:'justify'
        }}
      />  
        </View>
        <View style={styles.subContainer}>
            <Text style={{
                fontSize:30,
                fontFamily:'outfit-bold',
                textAlign:'center',
                marginTop:10
            }}>Awesome App{'\n'}
                <Text style={{color:Colors.PRIMARY,
                }}>Your One Stop Ordering Platorm</Text>
            </Text>
            <Text style={{
                fontSize:17,
                fontFamily:'outfit',
                textAlign:'center',
                marginVertical:20,
                color:Colors.GRAY
            }}>Your favourite order and services app for all your day to day needs</Text>
            <TouchableOpacity style={styles.buttonCust} onPress={()=>router.push('auth/signIn')}>
                <Text style={{
                    textAlign:'center',
                    color:'#ffff',
                    fontFamily:'outfit',
                    fontSize:17
                }}>Lets Get Started</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subContainer:{
        backgroundColor:'#FFF',
        padding:44,
        marginTop:-30,
    },
    buttonCust:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        borderRadius:99,
        marginTop:20
    }
}

)