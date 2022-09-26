import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BlindajeLogo from '../../Assets/Icons/BlindajeLogo.png'
import ViajesLogoBlack from '../../Assets/Icons/ViajesLogoBlack.png'
import SoatLogoBlack from '../../Assets/Icons/SoatLogoBlack.png'
import AutomovilLogoBlack from '../../Assets/Icons/AutomovilLogoBlack.png'
import SaludLogoBlack from '../../Assets/Icons/SaludLogoBlack.png'
import MotoLogoBlack from '../../Assets/Icons/MotoLogoBlack.png'
import CasaLogoBlack from '../../Assets/Icons/CasaLogoBlack.png'
import PolizasCard from './PolizasCard'
import { useNavigation } from '@react-navigation/native'

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

const Polizas = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.policies}>
        <View style={styles.policies_}>
            <View style={styles.policies_header}>
                <Text>Mis Pólizas</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MyPolices')} style={styles.policies_headerButton}>
                    <Text style={styles.policies_headerButtonText}>Ver Todas</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.policies_cards}>
                <FlatList style={styles.policies_cards_} data={policiess} keyExtractor={(item) => item.id} renderItem={({ item }) => <PolizasCard img={item.logo} name={item.name} description={item.description} active={item.active} />} showsVerticalScrollIndicator={false} />
            </View>
        </View>
    </View>
  )
}

export default Polizas

const styles = StyleSheet.create({
    policies: {
        width: '90%',
        height: 210,
        marginTop: 20,
    },
    policies_: {
        alignItems: 'center'
    },
    policies_header: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    policies_headerButton: {
        width: 100,
        height: 30,
        backgroundColor: '#1B7BCC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    policies_headerButtonText: {
        color: 'white'
    },
    policies_cards: {
        width: '100%',
        alignItems: 'center'
    },
    policies_cards_: {
        width: '100%',
    }
})