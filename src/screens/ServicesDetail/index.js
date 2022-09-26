import { Image, ImageBackground, StyleSheet, Text, Dimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CardPlans from './CardPlans'

const ServicesDetail = ({ route }) => {
  const navigation = useNavigation()

  const [basicPlan, setBasicPlan] = useState(true)
  const [plusPlan, setPlusPlan] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Agregar',
      headerTransparent: true,
      headerTintColor: 'white',
      headerBackTitleVisible: false,
    })
  }, [navigation])

  const handleBasicPlan = () => {
    setBasicPlan(true)
    setPlusPlan(false)
  }
  const handlePlusPlan = () => {
    setBasicPlan(false)
    setPlusPlan(true)
  }

  return (
    <View style={styles.servicesDetail}>
      <View style={styles.servicesDetail_header}>
        <ImageBackground style={styles.servicesDetail_headerImgBackground} source={route.params?.backgroundImg}>
          <Text style={styles.servicesDetail_Title}>{route.params?.name}</Text>
        </ImageBackground>
      </View>
      <View style={styles.servicesDetail_container}>
        {route.params?.planes ?
          <View style={styles.servicesDetail_container_}>
            <Text style={styles.servicesDetail_containerTextTitle}>Planes</Text>
            <View style={{height: '100%'}}>
              <View style={styles.servicesDetail_containerButtons}>
                <TouchableOpacity style={[styles.servicesDetail_containerButton, { shadowOpacity: basicPlan ? 0 : 0.4 } ]} onPress={handleBasicPlan}>
                  <Text style={styles.servicesDetail_containerButtonText}>Básico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.servicesDetail_containerButton, { shadowOpacity: !plusPlan ? 0.4 : 0 } ]}  onPress={handlePlusPlan}>
                  <Text style={styles.servicesDetail_containerButtonText}>Plus</Text>
                </TouchableOpacity>
              </View>
              {basicPlan && 
                <CardPlans titleDescription={'Descripción'} description={route.params?.planes[0].planDescription} price={route.params?.planes[0].planPrice} />
              }
              {plusPlan && 
                <CardPlans titleDescription={'Adicional'} description={route.params?.planes[1].planDescription} price={route.params?.planes[1].planPrice} />
              }
            </View>
          </View>
          :
          <View style={styles.servicesDetail_container_}>
            <View style={{height: '100%'}}>
                <CardPlans titleDescription={'Descripción'} description={route.params?.descriptionL} price={route.params?.price} />
            </View>
          </View>
        }
      </View>
      <View style={styles.servicesDetail_logo}>
        <Image style={styles.servicesDetail_logoImg} source={route.params?.logoDetail} />
      </View>
    </View>
  )
}

export default ServicesDetail

const styles = StyleSheet.create({
  servicesDetail: {
    height: Dimensions.get('window').height,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  servicesDetail_header: {
    height: 650,
    width: '100%',
  },
  servicesDetail_headerImgBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  servicesDetail_Title: {
    marginTop: 170,
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    maxWidth: 245,
    textAlign: 'center',
    lineHeight: 30
  },
  servicesDetail_container: {
    height: '58%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  servicesDetail_container_: {
    width: '85%',
    height: '100%',
    paddingTop: 30,
    position: 'relative',
  },
  servicesDetail_containerTextTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  servicesDetail_containerButtons: {
    flexDirection: 'row'
  },
  servicesDetail_containerButton: {
    width: 80,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 15,
    backgroundColor: '#96C4EA',
    shadowColor: "#000",
    shadowOffset: { height: 3 },
    shadowRadius: 3,
  },
  servicesDetail_containerButtonText: {
    color: 'white',
    fontWeight: '600'
  },
  servicesDetail_logo: {
    position: 'absolute',
    width: 110,
    height: 110,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: '33%'
  },
  servicesDetail_logoImg: {
    width: 80,
    height: 80
  }
})