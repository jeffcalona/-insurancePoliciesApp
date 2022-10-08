import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const Profile = () => {
  const {logout} = useContext(AuthContext)
  return (
    <View>
      <TouchableOpacity onPress={() => {logout()}} style={{width: 100, height: 40, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})