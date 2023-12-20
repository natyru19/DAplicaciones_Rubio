import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from "../components/Header"
import { colors } from '../Global/colors'

const ItemListCategories = () => {
  return (
    <>
      <Header/>
      <View style={styles.container}>
              
        <TextInput style={styles.input} placeholder="Buscar producto"/>
        <Pressable onPress={()=>console.log("buscar")}>          
        <Text>B</Text>
        </Pressable>
        <Pressable>
        <Text>x</Text>
        </Pressable>
      </View>
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container:{
       width:"100%", 
       flexDirection:"row",
       alignItems:"center",
       gap:10

    },
    input:{
      backgroundColor:colors.color1,
      width:"80%",
      borderWidth:2,
      borderRadius:5,
      paddingHorizontal:10,
      paddingVertical:5,
      margin:10
    }
})