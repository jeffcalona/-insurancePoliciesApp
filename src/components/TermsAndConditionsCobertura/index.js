import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TermsAndConditionsCobertura = ({ setAccept, bottomSheetModalTermRef }) => {

    const acceptTerms = () => {
        setAccept(true)
        bottomSheetModalTermRef.current.close()
    }

    const noAcceptTerms = () => {
        setAccept(false)
        bottomSheetModalTermRef.current.close()
    }
    
  return (
    <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <View style={styles.termsAndConditions}>
            <Text style={styles.termsAndConditions_title}>Términos y Condiciones</Text>
            <ScrollView style={{maxHeight: 300}}>
                <Text style={styles.termsAndConditions_containerTitle}>Acepto</Text>
                <Text>Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker, que incluía versiones de Lorem Ipsum. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker, que incluía versiones de Lorem Ipsum.</Text>
            </ScrollView>
            <View style={styles.termsAndConditions_buttons}>
                <TouchableOpacity onPress={acceptTerms} style={styles.termsAndConditions_buttonsAccept}>
                    <Text style={{color: 'white', fontWeight: '600'}}>Aceptar</Text>
                </TouchableOpacity>
                <View style={{width: 100, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={noAcceptTerms}  style={styles.termsAndConditions_buttonsNoAccept}>
                        <Text>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default TermsAndConditionsCobertura

const styles = StyleSheet.create({
    termsAndConditions: {
        width: '85%',
        marginTop: 30,
        alignItems: 'center'
      },
      termsAndConditions_title: {
        width: '100%',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 30
      },
      termsAndConditions_containerTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10
      },
      termsAndConditions_buttons: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
      },
      termsAndConditions_buttonsAccept: {
        width: 100,
        height: 40,
        backgroundColor: '#1B7BCC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
      },
      termsAndConditions_buttonsNoAccept: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      }
})