import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import CoberturaJuridicaForm from '../CoberturaJuridicaForm'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet' 

const FormCoberturaJuridicaComponent = ({ id, plan, price, procedureTipe, nameC, logoIcon }) => {
    const navigation = useNavigation()
    const [ultil, setUltil] = useState('')

    const [doctorSelected, setDoctorSelected] = useState([])
    const [doctorsSelectedId, setDoctorsSelectedId] = useState([])
    
    let date = new Date()
    
    //Calculo de la fecha "hasta"
    let localeDate = date.toLocaleDateString()

    function toDate(today, days){
        today.setDate(today.getDate() + days)
        return today
    }
    
    let isToDate = toDate(date, 30)

    
    const buttonRegisterCoberturaJuridica = (values) => {
        navigation.navigate('PaimentMethod', { id, plan, price, procedureTipe, doctorSelected, doctorsSelectedId, values, nameC, logoIcon })
    }

    useEffect(() => {
        setUltil(isToDate.toLocaleDateString())
        
    }, [isToDate])

  return (
    <BottomSheetModalProvider>
        <ScrollView style={styles.formCoberturaJuridica_scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.formCoberturaJuridica_numberCoberture}>
                    <Text>Cobertura Jurídica Nro</Text>
                    <Text>0321</Text>
                </View>
                <Text>Fecha de expedición - Vigencia</Text>
                <View style={styles.formCoberturaJuridica_headerdate}>
                    <Text>Desde</Text>
                    <Text style={styles.formCoberturaJuridica_headerdate_}>{localeDate}</Text>
                </View>
                <View style={styles.formCoberturaJuridica_headerdate}>
                    <Text>Hasta</Text>
                    <Text style={styles.formCoberturaJuridica_headerdate_}>{ultil}</Text>
                </View>
                <Text style={styles.formCoberturaJuridica_headerTitle}>Beneficiario</Text>
                <Formik
                    initialValues={{
                        fullNameP: null,
                        identificationP: null,
                        directionP: null,
                        phoneP: null,
                        nitC: null,
                        directionC: null,
                        cityC: null,
                        datePro: new Date(),
                        timePro: new Date(),
                    }}
                    validationSchema={Yup.object({
                        fullNameP: Yup.string().typeError('El campo es requerido').required('El campo es requerido'),
                        identificationP: Yup.number().typeError('El campo debe ser de tipo numérico').required('El campo es requerido'),
                        directionP: Yup.string().typeError('El campo es requerido').required('El campo es requerido'),
                        phoneP: Yup.number().typeError('El campo debe ser de tipo numérico').required('El campo es requerido'),
                        nitC: Yup.number().typeError('El campo debe ser de tipo numérico').required('El campo es requerido'),
                        directionC: Yup.string().typeError('El campo es requerido').required('El campo es requerido'),
                        cityC: Yup.string().typeError('El campo es requerido').required('El campo es requerido'),
                        datePro: Yup.string().typeError('El campo es requerido'),
                        timePro: Yup.string().typeError('El campo es requerido'),
                    })}
                    onSubmit={(values, props, doctorSelected) => buttonRegisterCoberturaJuridica(values, props, doctorSelected)}
                >
                    <CoberturaJuridicaForm procedureTipe={procedureTipe} setDoctorSelected={setDoctorSelected} doctorSelected={doctorSelected} doctorsSelectedId={doctorsSelectedId} setDoctorsSelectedId={setDoctorsSelectedId} />
                </Formik>
        </ScrollView>
    </BottomSheetModalProvider>
  )
}

export default FormCoberturaJuridicaComponent

const styles = StyleSheet.create({
    formCoberturaJuridica_scrollView: {
        width: '85%',
        height: '100%',
        position: 'relative',
        marginTop: 40
    },
    formCoberturaJuridica_numberCoberture: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formCoberturaJuridica_headerdate: {
        flexDirection: 'row'
    },
    formCoberturaJuridica_headerdate_: {
        marginLeft: 10
    },
    formCoberturaJuridica_headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
    },

    //Inputs Date and time
})