import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Profile as ProfileIcon, ShoppingCart } from 'iconsax-react-native'
import PolizasCard from '../../components/Polizas/PolizasCard'
import { AuthContext } from '../../Context/AuthContext'
import { REACT_APP_USERDATABASE } from '@env'
import axios from 'axios'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Profile from '../Profile'


const MyPolicies = () => {
  const {userData} = useContext(AuthContext)
  const Navigation = useNavigation()
  const bottomSheetModalProfileRef = useRef(null)
  const snapModalPoint = ["100"]
  
  const [allCobertures, setAllCobertures] = useState([])

  const handlerModal = () => {
    bottomSheetModalProfileRef.current?.present()
  }

  useEffect(() => {
    Navigation.setOptions({
      headerTitle: 'Mis Pólizas',
      headerLeft: () => (
        <TouchableOpacity onPress={handlerModal}>
          <ProfileIcon color="black" variant="Linear" size={30} style={{ marginLeft: 20 }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => Navigation.navigate("ShoppingCart")}>
            <ShoppingCart color="black" variant="Linear" size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>
      ),
      headerStyle: {
        borderBottomColor: 'white',
        shadowOpacity: 0,
      },
      //for android
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16
      },
    })
  }, [Navigation])


  useEffect(() => {
      axios.get(`${REACT_APP_USERDATABASE}/get/cobertura/${userData.id}`)
      .then(res => {
          setAllCobertures(res.data.cobertura)
      }).catch(e => {
          console.log(e)
      })
  }, [])

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={bottomSheetModalProfileRef} index={0} snapPoints={snapModalPoint}>
        <Profile />
      </BottomSheetModal>
      <View style={styles.myPolices}>
        <View style={styles.myPolices_}>
          <FlatList data={allCobertures} keyExtractor={(item) => item.id} renderItem={({ item }) => <PolizasCard name={item.fullNameP} procedureTipe={item.procedureTipe} />} showsVerticalScrollIndicator={false} />
        </View>
      </View>
    </BottomSheetModalProvider>
  )
}

export default MyPolicies

const styles = StyleSheet.create({
  myPolices: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
  myPolices_: {
    width: '90%'
  }
})