import { useState } from "react"
import { View , Text, StyleSheet,TextInput, Button, FlatList, Modal } from "react-native"
import uuid from 'react-native-uuid'
import ModalDelete from "./src/components/ModalDelete"
import AddProduct from "./src/components/AddProduct"
import ListProduct from "./src/components/ListProduct"
import Home from "./src/Screens/Home"
import ItemListCategories from "./src/Screens/ItemListCategories"
import ItemDetail from "./src/Screens/ItemDetail"


const App = () => {

  const [newTitleProduct, setNewTitleProduct] = useState("")
  const [newPriceProduct, setNewPriceProduct] = useState("")
  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handlerAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title: newTitleProduct,
      price: newPriceProduct
    }
    setProducts(current => [...current, newProduct])
    setNewTitleProduct("")
    setNewPriceProduct("")
  }

  const handlerModal = (item) => {
    setProductSelected(item)
    setModalVisible(true)
  }

  const handlerDeleteProduct = () => {
    setProducts(current => current.filter(product => product.id !== productSelected.id))
    setModalVisible(false)
  }

    return  <View style={styles.container}> 
    <ItemListCategories/>    
      
              
           </View>
    
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"start",
      alignItems:"center",
      marginTop:80,            
    }
  })



export default App