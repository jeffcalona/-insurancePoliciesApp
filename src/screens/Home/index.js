import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import Publicity from '../../components/Publicity'
import Services from '../../components/Services'
import Polizas from '../../components/Polizas'
import { useNavigation } from '@react-navigation/native'
import { NotificationBing, Profile as ProfileIcon } from 'iconsax-react-native'
import { AuthContext } from '../../Context/AuthContext'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Profile from '../Profile'

const Home = () => {
  const {userData} = useContext(AuthContext)
  const Navigation = useNavigation()
  const bottomSheetModalProfileRef = useRef(null)
  const snapModalPoint = ["100"]

  const handlerModal = () => {
    bottomSheetModalProfileRef.current?.present()
  }

  useEffect(() => {
    Navigation.setOptions({
      headerTitle: `Hola, ${userData.name}`,
      headerLeft: () => (
        <NotificationBing color={Navigation.color} variant="Linear" size={30} style={{ marginLeft: 20 }} />
      ),
      headerRight: () => (
        <TouchableOpacity onPress={handlerModal}>
          <ProfileIcon color={Navigation.color} variant="Linear" size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>
      ),
      headerStyle: {
        borderBottomColor: 'white',
        shadowOpacity: 0,
      },
    })
  }, [Navigation])

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={bottomSheetModalProfileRef} index={0} snapPoints={snapModalPoint}>
        <Profile />
      </BottomSheetModal>
      <View style={styles.home}>
        <Publicity />
        <Services />
        <Polizas />
      </View>
    </BottomSheetModalProvider>
  )
}

export default Home

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logoutButton: {
      width: '70%',
      height: 60,
      backgroundColor: '#1B7BCC',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      shadowOffset: {height: 4},
      shadowColor: 'black',
      shadowOpacity: 0.4,
    }
})