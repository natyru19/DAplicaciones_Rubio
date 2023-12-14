import { useState } from "react"
import { View , Text, StyleSheet,TextInput, Button, FlatList, Modal } from "react-native"
import uuid from 'react-native-uuid'
import ModalDelete from "./src/components/ModalDelete"
import AddProduct from "./src/components/AddProduct"
import ListProduct from "./src/components/ListProduct"
import Home from "./src/Screens/Home"


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
      <Home/>
              <AddProduct
              valueTitle={newTitleProduct}
              valuePrice={newPriceProduct}
              onChangeTitle={setNewTitleProduct}
              onChangePrice={setNewPriceProduct}
              addProduct={handlerAddProduct}
              />
              
              <ListProduct
              products={products}
              onModal={handlerModal}
              />
              <ModalDelete
              product={productSelected}
              visible={modalVisible}
              onModal={handlerModal}
              onDelete={handlerDeleteProduct}
              />
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