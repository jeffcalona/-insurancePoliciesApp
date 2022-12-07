import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PublicityCard = ({ title, description, logo }) => {
    const navigation = useNavigation()
  return (
    <View style={styles.publicitya}>
        <View style={styles.publicityContent}>
            <View style={styles.publicityContent_text}>
                <Text style={styles.publicityContent_textTitle}>{title}</Text>
                <Text style={styles.publicityContent_textDescription}>{description}</Text>
            </View>
            <View>
                <Image style={styles.publicityContent_logo} source={logo} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AgregarServicios')} style={styles.publicityContent_button}>
                <Text style={styles.publicityContent_buttonText}>Ver Más</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default PublicityCard

const styles = StyleSheet.create({
    publicitya: {
        width: 350,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {height: 4},
        shadowColor: 'black',
        shadowOpacity: 0.4,
        marginHorizontal: 20
    },
    publicityContent: {
        width: '90%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    publicityContent_text: {
        flex: 1
    },
    publicityContent_textTitle: {
        fontWeight: '800',
        fontSize: 18,
        lineHeight: 22 
    },
    publicityContent_textDescription: {
        fontSize: 10
    },
    publicityContent_logo: {
        width: 75,
        height: 73,
        marginLeft: 5,
        marginRight: 8
    },
    publicityContent_button: {
        backgroundColor: '#1B7BCC',
        width: 80,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    publicityContent_buttonText: {
        color: 'white'
    }
})