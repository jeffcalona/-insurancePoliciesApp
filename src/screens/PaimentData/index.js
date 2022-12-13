import { Imge, StyleSheet, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { REACT_APP_COBERTURA } from '@env'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormPaimentData from '../../components/FormPaimentData'
import { AuthContext } from '../../Context/AuthContext'
const PaimentData = ({ route, ...props }) => {
  const {setShopping, shopping} = useContext(AuthContext)
  console.log('carrito de compra en paimentData: ', shopping)

    const navigation = useNavigation()

    const payCobertura = (values) => {
      shopping.map((data, index) => {
        return (axios.post(`${REACT_APP_COBERTURA}/register`, {
          plan: data.plan, price: data.price, procedureTipe: data.procedureTipe, doctor_id: data.doctorsSelectedId, fullNameP: data.values.fullNameP, identificationP: data.values.identificationP, directionP: data.values.directionP, phoneP: data.values.phoneP, nitC: data.values.nitC, directionC: data.values.directionC, cityC: data.values.cityC, datePro: data.values.datePro.toLocaleDateString(), timePro: data.values.timePro.toLocaleTimeString()
        }).then(res => {
            console.log('Paciente Registrado Con Éxito')
            navigation.navigate('Homee')
            setShopping([])
        }).catch(e => {
            console.log('Error!', e.response)
        })
      )})
    }

  //   const payCobertura = async (values) => {
  //     await axios.post(`${REACT_APP_COBERTURA}/register`, {
  //         plan: route.params?.plan, price: route.params?.price, procedureTipe: route.params?.procedureTipe, doctor_id: route.params?.doctorSelected[0].id , fullNameP: route.params?.values.fullNameP, identificationP: route.params?.values.identificationP, directionP: route.params?.values.directionP, phoneP: route.params?.values.phoneP, nitC: route.params?.values.nitC, directionC: route.params?.values.directionC, cityC: route.params?.values.cityC, datePro: route.params?.values.datePro.toLocaleDateString(), timePro: route.params?.values.timePro.toLocaleTimeString()
  //     }).then(res => {
  //         console.log('Paciente Registrado Con Éxito')
  //         navigation.navigate('Homee')
  //         setShopping([])
  //     }).catch(e => {
  //         console.log('Error!', e.response)
  //     })
  // }

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

// doctor_id: data.doctorSelected[0].id