import { Dimensions, Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { User, Hashtag, Book1, Call, Book, Calendar, Clock } from 'iconsax-react-native'

const pacienteData = [
  {icon: User, placeholder: "Nombre Completo"},
  {icon: Hashtag, placeholder: "Número de Identificación"},
  {icon: Book1, placeholder: "Dirección"},
  {icon: Call, placeholder: "Teléfono"}
]
const instituteData = [
  {icon: Hashtag, placeholder: "Nit"},
  {icon: Book1, placeholder: "Dirección"},
  {icon: Book, placeholder: "Ciudad"}
]
const proceduteData = [
  {icon: Calendar, placeholder: "Fecha de Intervención"},
  {icon: Clock, placeholder: "Hora de Intervención"}
]

const FormCoberturaJuridica = ({ route }) => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Formulario',
      headerTransparent: true,
      headerTintColor: 'white',
      headerBackTitleVisible: false
    })
  }, [navigation])

  return (
    <View style={styles.formCoberturaJuridica}>
      <View style={styles.formCoberturaJuridica_deader}>
        <ImageBackground style={styles.formCoberturaJuridica_deaderBackgroundImg} source={route.params?.backgroundImg}>
          <Text style={styles.formCoberturaJuridica_title}>{route.params?.name}</Text>
        </ImageBackground>
      </View>
      <View style={styles.formCoberturaJuridica_container}>
        <ScrollView style={styles.formCoberturaJuridica_scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.formCoberturaJuridica_headerInfo}>
            <Text>Cobertura Jurídica Nro</Text>
            <Text>0321</Text>
          </View>
          <Text>Fecha de expedición - Vigencia</Text>
          <View style={styles.formCoberturaJuridica_headerdate}>
            <Text>Desde</Text>
            <Text style={styles.formCoberturaJuridica_headerdate_}>.../.../...</Text>
          </View>
          <View style={styles.formCoberturaJuridica_headerdate}>
            <Text>Hasta</Text>
            <Text style={styles.formCoberturaJuridica_headerdate_}>.../.../...</Text>
          </View>
          <Text style={styles.formCoberturaJuridica_headerTitle}>Paciente</Text>
          {pacienteData.map((data, index) => {
            return (
              <View style={styles.formCoberturaJuridica_inputContainer} keyExtractor={index}>
                <data.icon color='black' variant='Linear' size={20} />
                <TextInput style={styles.formCoberturaJuridica_input} placeholder={data.placeholder} />
              </View>
            )
          })}
          <Text style={styles.formCoberturaJuridica_headerTitlesInfo}>Institución donde se realiza la investigación quirúrgica y/o tratamiento estético</Text>
          {instituteData.map((data, index) => {
            return (
              <View style={styles.formCoberturaJuridica_inputContainer} keyExtractor={index + 1}>
                <data.icon color='black' variant='Linear' size={20} />
                <TextInput style={styles.formCoberturaJuridica_input} placeholder={data.placeholder} />
              </View>
            )
          })}
          <Text style={styles.formCoberturaJuridica_headerTitlesInfo}>Procedimientos quirúrgicos y/o estéticos realizados</Text>
          {proceduteData.map((data, index) => {
            return (
              <View style={styles.formCoberturaJuridica_inputContainer} keyExtractor={index + 2}>
                <data.icon color='black' variant='Linear' size={20} />
                <TextInput style={styles.formCoberturaJuridica_input} placeholder={data.placeholder} />
              </View>
            )
          })}
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity style={styles.formCoberturaJuridica_button}>
              <Text style={styles.formCoberturaJuridica_buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.formCoberturaJuridica_logo}>
        <Image style={styles.formCoberturaJuridica_logoImg} source={route.params?.logoDetail} />
      </View>
    </View>
  )
}

export default FormCoberturaJuridica

const styles = StyleSheet.create({
  formCoberturaJuridica: {
    height: Dimensions.get('window').height,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  formCoberturaJuridica_deader: {
    height: 650,
    width: '100%',
  },
  formCoberturaJuridica_deaderBackgroundImg: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  formCoberturaJuridica_title: {
    marginTop: 110,
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    maxWidth: 220,
    textAlign: 'center',
    lineHeight: 25
  },
  formCoberturaJuridica_container: {
    height: '75%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  formCoberturaJuridica_scrollView: {
    width: '85%',
    height: '100%',
    position: 'relative',
    marginTop: 40
  },
  formCoberturaJuridica_headerInfo: {
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
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5
  },
  formCoberturaJuridica_headerTitlesInfo: {
    marginVertical: 5,
    fontWeight: '600'
  },
  formCoberturaJuridica_inputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    alignItems: 'center'
  },
  formCoberturaJuridica_input: {
    width: '90%',
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: {height: 4},
    shadowColor: 'black',
    shadowOpacity: 0.4,
    paddingVertical: 12,
    paddingLeft: 15,
    fontSize: 12
  },
  formCoberturaJuridica_button: {
    width: 140,
    height: 50,
    backgroundColor: '#1B7BCC',
    marginTop: 20,
    marginBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  formCoberturaJuridica_buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },

  formCoberturaJuridica_logo: {
    position: 'absolute',
    width: 85,
    height: 85,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: '19%'
  },
  formCoberturaJuridica_logoImg: {
    width: 70,
    height: 70
  }
})