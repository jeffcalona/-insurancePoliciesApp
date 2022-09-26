import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NotificationBing } from 'iconsax-react-native'
import PolizasCard from '../../components/Polizas/PolizasCard'
import BlindajeLogo from '../../Assets/Icons/BlindajeLogo.png'
import ViajesLogoBlack from '../../Assets/Icons/ViajesLogoBlack.png'
import SoatLogoBlack from '../../Assets/Icons/SoatLogoBlack.png'
import SaludLogoBlack from '../../Assets/Icons/SaludLogoBlack.png'
import AutomovilLogoBlack from '../../Assets/Icons/AutomovilLogoBlack.png'
import MotoLogoBlack from '../../Assets/Icons/MotoLogoBlack.png'
import CasaLogoBlack from '../../Assets/Icons/CasaLogoBlack.png'

const policiess = [
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
      logo: ViajesLogoBlack,
      name: 'Viajes',
      description: 'Descripción corta',
      active: true
  },
  {
      id: '4',
      logo: SoatLogoBlack,
      name: 'Soat',
      description: 'Descripción corta',
      active: false
  },
  {
      id: '5',
      logo: AutomovilLogoBlack,
      name: 'Automóvil',
      description: 'Descripción corta',
      active: true
  },
  {
      id: '6',
      logo: SaludLogoBlack,
      name: 'Salud',
      description: 'Descripción corta',
      active: true
  },
  {
      id: '7',
      logo: MotoLogoBlack,
      name: 'Moto',
      description: 'Descripción corta',
      active: true
  },
  {
      id: '8',
      logo: CasaLogoBlack,
      name: 'Casa',
      description: 'Descripción corta',
      active: true
  }
]

const MyPolicies = () => {
  const Navigation = useNavigation()

  useEffect(() => {
    Navigation.setOptions({
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
    <View style={styles.myPolices}>
      <View style={styles.myPolices_}>
        <FlatList data={policiess} keyExtractor={(item) => item.id} renderItem={({ item }) => <PolizasCard img={item.logo} name={item.name} description={item.description} active={item.active} />} showsVerticalScrollIndicator={false} />
      </View>
    </View>
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