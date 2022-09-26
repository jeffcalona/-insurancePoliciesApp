import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BlindajeLogo from '../../Assets/Icons/BlindajeLogo.png'
import { useNavigation } from '@react-navigation/native'

const Publicity = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.publicity}>
        <View style={styles.publicityContent}>
            <View style={styles.publicityContent_text}>
                <Text style={styles.publicityContent_textTitle}>Cobertura Jurídica</Text>
                <Text style={styles.publicityContent_textDescription}>Cubre de manera integral todos los procedimientos quirúrgicos realizados por el cirujano plástico y médico cirujano</Text>
            </View>
            <View>
                <Image style={styles.publicityContent_logo} source={BlindajeLogo} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("CoberturaJuridica")} style={styles.publicityContent_button}>
                <Text style={styles.publicityContent_buttonText}>Ver Más</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Publicity

const styles = StyleSheet.create({
    publicity: {
        width: 350,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {height: 4},
        shadowColor: 'black',
        shadowOpacity: 0.4,
        marginTop: 10
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
    publicityContent_logo: {
        width: 93,
        height: 90,
        marginLeft: 5,
        marginRight: 8
    },
    publicityContent_textTitle: {
        fontWeight: '800',
        fontSize: 22,
        lineHeight: 22 
    },
    publicityContent_textDescription: {
        fontSize: 10
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