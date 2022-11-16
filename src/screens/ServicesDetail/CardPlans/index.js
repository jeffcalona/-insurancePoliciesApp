import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Record, RecordCircle } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import TermsAndConditionsCobertura from '../../../components/TermsAndConditionsCobertura'

const CardPlans = ({ titleDescription, description, planN, procedureTipeN, price, backgroundImgN, nameN, logoDetailN }) => {
  const navigation = useNavigation()
  const bottomSheetModalTermRef = useRef(null)
  const snapModalPoint = ["65"]

  const [accept, setAccept] = useState(false)

  const onPressAdd = () => {
    accept === true ?
    navigation.navigate('FormCoberturaJuridica', {plan: planN, procedureTipe: procedureTipeN, price: price, backgroundImg: backgroundImgN, name: nameN, logoDetail: logoDetailN})
    :
    Alert.alert(
      "Acepta Términos y Condiciones",
      "Para continuar debe aceptar los terminos y condiciones",
      [
        {
          text: "Ok"
        }
      ]
    )
  }

  const handlerModal = () => {
    bottomSheetModalTermRef.current?.present()
  }

  return (
    <>
      <Text style={styles.servicesDetail_containerTitleDescription}>{titleDescription}</Text>
      <ScrollView style={styles.servicesDetail_containerDescription}>
        <Text>{description}</Text>
      </ScrollView>
      <View style={styles.servicesDetail_containerTermsAndConditions}>
        {accept === false ?
          <TouchableOpacity onPress={() => setAccept(!accept)}>
            <Record size={25} color='#1B7BCC' />
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => setAccept(!accept)}>
            <RecordCircle size={25} color='#1B7BCC' />
          </TouchableOpacity>
        }
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 5}}>Acepto </Text>
          <TouchableOpacity onPress={handlerModal} style={styles.servicesDetail_containerTermsAndConditionsText}>
            <Text>términos y condiciones</Text>
          </TouchableOpacity>
          <BottomSheetModal ref={bottomSheetModalTermRef} index={0} snapPoints={snapModalPoint} backgroundStyle={{ borderRadius: 30, shadowOffset: {height: -3}, shadowColor: 'black', shadowOpacity: 0.4}}>
            <TermsAndConditionsCobertura setAccept={setAccept} bottomSheetModalTermRef={bottomSheetModalTermRef} />
          </BottomSheetModal>
        </View>
      </View>
      <View style={styles.servicesDetail_containerPrice}>
        <Text style={styles.servicesDetail_containerPriceText}>${price}</Text>
        <TouchableOpacity onPress={accept => onPressAdd(accept)} style={styles.servicesDetail_containerPriceButton}>
          <Text style={styles.servicesDetail_containerPriceButtonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default CardPlans

const styles = StyleSheet.create({
  servicesDetail_containerTitleDescription: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10
  },
  servicesDetail_containerDescription: {
    maxHeight: 130
  },
  servicesDetail_containerTermsAndConditions: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  servicesDetail_containerTermsAndConditionsText: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  
  servicesDetail_containerPrice: {
    position: 'absolute',
    bottom: 140,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  servicesDetail_containerPriceText: {
    fontSize: 25,
    fontWeight: '500',
    color: '#1B7BCC',
    marginLeft: 10
  },
  servicesDetail_containerPriceButton: {
    width: 150,
    height: 60,
    backgroundColor: '#1B7BCC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  servicesDetail_containerPriceButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
})