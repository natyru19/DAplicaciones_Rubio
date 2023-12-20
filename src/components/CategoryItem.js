import { StyleSheet, Text, View } from 'react-native'
import {colors} from "../Global/colors"

const CategoryItem = ({category}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",        
        backgroundColor:colors.color1,
        margin: 10,
        padding:10,
        shadowColor:"black",
        shadowOffset:{width:1,height:2},
        shadowRadius:3,
        shadowOpacity:1
    },

    text:{
        textAlign:"center"
    }
})