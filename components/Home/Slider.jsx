import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection,getDocs,query,where } from 'firebase/firestore'
import { db } from './../../configs/FirebaseConfig'

export default function Slider() {

  const [sliderList,setSliderList]=useState([]);
  useEffect(()=>{
    getSliderList();
  },[]);
  
  // const getSliderList=async()=>{
  //   setSliderList([]);
  //   //const q=query(collection(db,'Slider'));
  //   const querySnapshot= await getDocs(collection(db,'Slider'));

  //   querySnapshot.forEach((doc)=>{
  //     console.log(doc.data());
  //     setSliderList(sliderList=>[...sliderList,doc.data()]);
  //   });
  // }

  const getSliderList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Slider'));
      const sliders = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        sliders.push(doc.data());
      });
      setSliderList(sliders);
    } catch (error) {
      console.error("Error fetching slider data: ", error);
    }
  };

  return (
    <View>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
        padding:20,
      }}>
          #Special for you
      </Text>
      <FlatList
        data={sliderList}
        horizontal={true}
        style={{paddingleft:20}}
        renderItem={({item,index})=>(
          <View>
            <Image source={{uri:item.imageUrl}}
            style={{
              width:220,
              height:150,
              borderRadius:5,
              marginRight:15,
            }}
            resizeMode='cover'
            />
          </View>
        )}
      />

    </View>
  )
}