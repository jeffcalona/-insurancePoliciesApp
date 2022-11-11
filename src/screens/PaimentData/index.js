import { Imge, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { REACT_APP_COBERTURA } from '@env'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormPaimentData from '../../components/FormPaimentData'
const PaimentData = ({ route, ...props }) => {
    const navigation = useNavigation()
    console.log('holiii: ', route.params?.doctorSelected)


    const payCobertura = async (values) => {
        await axios.post(`${REACT_APP_COBERTURA}/register`, {
            plan: route.params?.plan, price: route.params?.price, procedureTipe: route.params?.procedureTipe, doctor_id: route.params?.doctorSelected[0].id , fullNameP: route.params?.values.fullNameP, identificationP: route.params?.values.identificationP, directionP: route.params?.values.directionP, phoneP: route.params?.values.phoneP, nitC: route.params?.values.nitC, directionC: route.params?.values.directionC, cityC: route.params?.values.cityC, datePro: route.params?.values.datePro.toLocaleDateString(), timePro: route.params?.values.timePro.toLocaleTimeString()
        }).then(res => {
            console.log('Paciente Registrado Con Éxito')
            navigation.navigate('Home')
        }).catch(e => {
            console.log('Error!', e.response)
        })
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: `Datos de la ${route.params?.tipePaiment}`,
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white'
        })
        
        }, [])

  return (
    <View style={styles.paimentData}>
      <Formik 
        initialValues={{
            nameCard: null,
            numCard: null,
            expCard: null,
            cvcCard: null
        }}
        validationSchema={Yup.object({
            nameCard: Yup.string().typeError('El campo es requerido').required('El campo es requerido'),
            numCard: Yup.number().typeError('El campo debe ser de tipo numérico').required('El campo es requerido'),
            expCard: Yup.string().typeError('El campo es requerido').required('El campo es requerido'),
            cvcCard: Yup.number().typeError('El campo debe ser de tipo numérico').required('El campo es requerido')
        })}
        onSubmit={values => payCobertura(values)}
      >
        <FormPaimentData paimentVal={route.params?.price} />
      </Formik>
    </View>
  )
}

export default PaimentData

const styles = StyleSheet.create({
    paimentData: {
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    }
})