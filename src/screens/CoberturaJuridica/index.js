import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Profile as ProfileIcon, ShoppingCart } from 'iconsax-react-native'
import BlindajeLogo from '../../Assets/Icons/BlindajeLogo.png'
import PolizasCard from '../../components/Polizas/PolizasCard'
import { AuthContext } from '../../Context/AuthContext'
import axios from 'axios'
import { REACT_APP_USERDATABASE } from '@env'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Profile from '../Profile'

const CoberturaJuridica = () => {
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
      headerTitle: 'Coberturas',
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
      <View style={styles.coberturaJuridica}>
        <BottomSheetModal ref={bottomSheetModalProfileRef} index={0} snapPoints={snapModalPoint}>
          <Profile />
        </BottomSheetModal>
        <View style={styles.coberturaJuridica_}>
          <FlatList data={allCobertures} keyExtractor={(item) => item.id} renderItem={({ item }) => <PolizasCard name={item.fullNameP} procedureTipe={item.procedureTipe} />} showsVerticalScrollIndicator={false} />
        </View>
      </View>
    </BottomSheetModalProvider>
  )
}

export default CoberturaJuridica

const styles = StyleSheet.create({
  coberturaJuridica: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10
  },
  coberturaJuridica_: {
    width: '90%',
    height: '100%'
  }
})