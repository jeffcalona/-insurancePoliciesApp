import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigation } from '@react-navigation/native'
import { Profile as ProfileIcon, ShoppingCart } from 'iconsax-react-native'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Profile from '../Profile'

const More = () => {
    const {userData} = useContext(AuthContext)
    const Navigation = useNavigation()
    const bottomSheetModalProfileRef = useRef(null)
    const snapModalPoint = ["100"]

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
    
  return (
    <BottomSheetModalProvider>
      <View style={styles.more}>
        <BottomSheetModal ref={bottomSheetModalProfileRef} index={0} snapPoints={snapModalPoint}>
            <Profile />
        </BottomSheetModal>
        <View style={{alignItems: 'center', marginTop: 100}}>
          <Text>Publicidades y contenido adicional</Text>
        </View>
      </View>
    </BottomSheetModalProvider>
  )
}

export default More

const styles = StyleSheet.create({
  more: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white'
  }
})