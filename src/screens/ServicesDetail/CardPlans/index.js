import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CardPlans = ({ titleDescription, description, price, onPress }) => {
  return (
    <>
      <Text style={styles.servicesDetail_containerTitleDescription}>{titleDescription}</Text>
      <Text>{description}</Text>
      <View style={styles.servicesDetail_containerPrice}>
        <Text style={styles.servicesDetail_containerPriceText}>${price}</Text>
        <TouchableOpacity onPress={onPress} style={styles.servicesDetail_containerPriceButton}>
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
  servicesDetail_containerPrice: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  servicesDetail_containerPriceText: {
    fontSize: 25,
    fontWeight: '500',
    color: '#1B7BCC'
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