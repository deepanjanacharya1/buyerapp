import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './../constants/Colors'
import { StyleSheet } from 'react-native'
import * as WebBrowser from  'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync()
      return () => {
        void WebBrowser.coolDownAsync()
      }
    }, [])
  }
  
  WebBrowser.maybeCompleteAuthSession()


export default function LoginScreen() {
  
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
            redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
          })
    
          if (createdSessionId) {

          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error('OAuth error', err)
        }
      }, [])

    
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
                width:412,
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
                textAlign:'center'
            }}>Awesome App{'\n'}
                <Text style={{color:Colors.PRIMARY,
                }}>Your One Stop Ordering Platorm</Text>
            </Text>
            <Text style={{
                fontSize:15,
                fontFamily:'outfit',
                textAlign:'center',
                marginVertical:15,
                color:Colors.GRAY
            }}>Your favourite order and services app for all your day to day needs
            </Text>
            <TouchableOpacity style={styles.buttonCust} onPress={onPress}>
                <Text style={{
                    textAlign:'center',
                    color:'#ffff',
                    fontFamily:'outfit'
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