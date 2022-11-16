import { StyleSheet, Text, View, Image, TouchableOpacity, LogBox } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowRight2, Card } from 'iconsax-react-native'
import LogoNequi from '../../Assets/Icons/LogoNequi.png'

const ShoppingCartCobertura = ({ route }) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ])

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Método de Pago',
      headerTransparent: true,
      headerBackTitleVisible: false,
      headerTintColor: 'black'
    })
  }, [])

  return (
    <View style={styles.shoppingCartCoberturaContainer}>
      <View style={styles.shoppingCartCobertura}>
        <Text>Selecciona método de pago</Text>
        <TouchableOpacity style={styles.shoppingCartCobertura_method} onPress={() => navigation.navigate('PaimentData', {plan: route.params?.plan, price: route.params?.price, procedureTipe: route.params?.procedureTipe, values: route.params?.values, tipePaiment: 'Tarjeta', doctorSelected: route.params?.doctorSelected})}>
          <View style={styles.shoppingCartCobertura_method_}>
            <Card size={30} color='black' />
            <View>
              <Text style={styles.shoppingCartCobertura_methodFirstText}>Tarjeta de Crédito o Debito</Text>
              <Text style={styles.shoppingCartCobertura_methodSecondText}>Paga con tu Visa o MasterCard</Text>
            </View>
            <ArrowRight2 size={25} color='#1B7BCC' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shoppingCartCobertura_method} onPress={() => navigation.navigate('PaimentData', {plan: route.params?.plan, price: route.params?.price, values: route.params?.values, tipePaiment: 'Cuenta'})}>
          <View style={styles.shoppingCartCobertura_method_}>
            <View>
              <Image source={LogoNequi} style={styles.shoppingCartCobertura_methodNequi} />
            </View>
            <ArrowRight2 size={25} color='#1B7BCC' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ShoppingCartCobertura

const styles = StyleSheet.create({
  shoppingCartCoberturaContainer: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  shoppingCartCobertura: {
    width: '80%',
    marginTop: 120
  },
  shoppingCartCobertura_method: {
    height: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowOffset: {height: 4},
    shadowColor: 'black',
    shadowOpacity: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  shoppingCartCobertura_method_:{
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shoppingCartCobertura_methodFirstText: {
    fontSize: 12,
    fontWeight: '600'
  },
  shoppingCartCobertura_methodSecondText: {
    fontSize: 12,
    fontWeight: '300'
  },
  shoppingCartCobertura_methodNequi: {
    width: 125,
    height: 32
  }
})