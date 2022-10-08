import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NotificationBing } from 'iconsax-react-native'
import BlindajeLogo from '../../Assets/Icons/BlindajeLogo.png'
import PolizasCard from '../../components/Polizas/PolizasCard'

const cobertures = [
  {
    id: '1',
    logo: BlindajeLogo,
    name: 'Nombre Paciente',
    description: 'Procedimiento',
    active: true
  },
  {
      id: '2',
      logo: BlindajeLogo,
      name: 'Nombre Paciente',
      description: 'Procedimiento',
      active: true
  },
  {
    id: '3',
    logo: BlindajeLogo,
    name: 'Nombre Paciente',
    description: 'Procedimiento',
    active: true
  }
]

const CoberturaJuridica = () => {
  const Navigation = useNavigation()

  useEffect(() => {
    Navigation.setOptions({
      headerLeft: () => (
        <NotificationBing color={Navigation.color} variant="Linear" size={30} style={{ marginLeft: 20 }} />
      ),
      headerTitle: 'Coberturas',
      headerStyle: {
        borderBottomColor: 'white',
        shadowOpacity: 0,
      },
    })
  }, [Navigation])
  return (
    <View style={styles.coberturaJuridica}>
      <View style={styles.coberturaJuridica_}>
        <FlatList data={cobertures} keyExtractor={(item) => item.id} renderItem={({ item }) => <PolizasCard img={item.logo} name={item.name} description={item.description} active={item.active} />} showsVerticalScrollIndicator={false} />
      </View>
    </View>
  )
}

export default CoberturaJuridica

const styles = StyleSheet.create({
  coberturaJuridica: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
  coberturaJuridica_: {
    width: '90%',
    height: '100%'
  }
})