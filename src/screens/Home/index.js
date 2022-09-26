import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Publicity from '../../components/Publicity'
import Services from '../../components/Services'
import Polizas from '../../components/Polizas'
import { useNavigation } from '@react-navigation/native'
import { NotificationBing } from 'iconsax-react-native'

const Home = () => {
  const Navigation = useNavigation()

  const [user, setUser] = useState('Cliente')

  useEffect(() => {
    Navigation.setOptions({
      headerTitle: `Hola, ${user}`,
      headerLeft: () => (
        <NotificationBing color={Navigation.color} variant="Linear" size={30} style={{ marginLeft: 20 }} />
      ),
      headerStyle: {
        borderBottomColor: 'white',
        shadowOpacity: 0,
      },
    })
  }, [Navigation])

  return (
    <View style={styles.home}>
      <Publicity />
      <Services />
      <Polizas />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})