import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import ItemListCategories from './ItemListCategories'

const Home = () => {
  return (
    <>
      <Header title="Categorías"/>
      <Categories/>
      
    </>
  )
}

export default Home

const styles = StyleSheet.create({})