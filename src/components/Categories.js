import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from "../Data/categories.json"
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <FlatList 
      style={styles.container}
      data={categories}
      keyExtactor={item => item}
      renderItem={({item}) => <CategoryItem category={item}/>}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    width:"100%",
  }
})