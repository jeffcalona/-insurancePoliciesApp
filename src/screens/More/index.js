import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigation } from '@react-navigation/native'
import { NotificationBing, Profile as ProfileIcon } from 'iconsax-react-native'
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
        <View>
        <Text>More</Text>
        </View>
    </BottomSheetModalProvider>
  )
}

export default More

const styles = StyleSheet.create({})