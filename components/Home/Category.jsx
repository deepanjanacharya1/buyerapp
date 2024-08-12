import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import CategoryItem from './CategoryItem'

export default function Category() {

    const [categoryList,setCategoryList]=useState([]);
    useEffect(()=>{

        getCategoryList()

    },[])

    const getCategoryList=async()=>{
        setCategoryList([])
        const q=query(collection(db,'Category'));
        const querySnapshot=await getDocs(q);

        querySnapshot.forEach((doc)=>{
            console.log(doc.data())
            setCategoryList(prev=>[...prev,doc.data()])

        })
    }
    return (
    <View>
        <View style={{
            padding:20,
            display:'flex',
            marginTop:10,
            flexDirection:'row',
            justifyContent:'space-between'
        }}>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:20,
                display:'flex',
                justifyContent:'space-between'
                }}
                >Category</Text>
            <Text style={{color:Colors.PRIMARY,fontFamily:'outfit-medium'}}>View All</Text>
        </View>

        <FlatList
            data={categoryList}
            horizontal={true}
            renderItem={({item,index})=>(
                <CategoryItem category={item} key={index} onCategoryPress={(category)=>console.log(category)}
                />                        
    )}  
        />
    </View>
  )
}