import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NotificationBing, Profile as ProfileIcon } from 'iconsax-react-native'
import CoberturaLogoWhite from '../../Assets/Icons/CoberturaLogoWhite.png'
import SoatLogo from '../../Assets/Icons/SoatLogo.png'
import ViajesLogo from '../../Assets/Icons/ViajesLogo.png'
import ArriendoLogo from '../../Assets/Icons/ArriendoLogo.png'
import MotoLogo from '../../Assets/Icons/MotoLogo.png'
import AutomovilLogo from '../../Assets/Icons/AutomovilLogo.png'
import SegurosVoluntariosLogo from '../../Assets/Icons/SegurosVoluntariosLogo.png'
import PlanComplementarioLogo from '../../Assets/Icons/PlanComplementarioLogo.png'
import CasaLogo from '../../Assets/Icons/CasaLogo.png'
import BackgroundCoberturasJ from '../../Assets/Icons/BackgroundCoberturasJ.jpg'
import CoberturaLogoBlue from '../../Assets/Icons/CoberturaLogoBlue.png'
import SoatLogoBlue from '../../Assets/Icons/SoatLogoBlue.png'
import ViajesLogoBlue from '../../Assets/Icons/ViajesLogoBlue.png'
import ArriendoLogoBlue from '../../Assets/Icons/ArriendoLogoBlue.png'
import MotoLogoBlue from '../../Assets/Icons/MotoLogoBlue.png'
import AutomovilLogoBlue from '../../Assets/Icons/AutomovilLogoBlue.png'
import SegurosVoluntariosLogoBlue from '../../Assets/Icons/SegurosVoluntariosLogoBlue.png'
import PlanComplementarioLogoBlue from '../../Assets/Icons/PlanComplementarioLogoBlue.png'
import CasaLogoBlue from '../../Assets/Icons/CasaLogoBlue.png'
import ServicesCardScreen from '../../components/ServicesCardScreen'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Profile from '../Profile'

const servicess = [
  {
    id: '1',
    name: 'Cobertura Jurídica',
    description: 'Descripción corta de lo que contiene el plan de cobertura jurídica',
    price: '150.000',
    logo: CoberturaLogoWhite,
    logoDetail: CoberturaLogoBlue,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
    procedimientos: [
      {
        estetico: {
          planes: [
            {
              planId: '1',
              planName: 'Básico',
              planDescription: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
              planPrice: '100.000'
            },
            {
              planId: '2',
              planName: 'Plus',
              planDescription: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centu.',
              planPrice: '180.000'
            }
          ]
        }
      },
      {
        quirurgico: {
          planes: [
            {
              planId: '1',
              planName: 'Básico',
              planDescription: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
              planPrice: '150.000'
            },
            {
              planId: '2',
              planName: 'Plus',
              planDescription: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centu.',
              planPrice: '200.000'
            }
          ]
        }
      }
    ]
  },
  {
    id: '2',
    name: 'Soat',
    description: 'Descripción corta de lo que contiene el plan de cobertura jurídica',
    descriptionL: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    price: '100.000',
    logo: SoatLogo,
    logoDetail: SoatLogoBlue,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
    url: ''
  },
  {
    id: '3',
    name: 'Seguro de Viajes',
    description: 'Descripción corta de lo que contiene el plan de cobertura jurídica',
    descriptionL: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    price: '250.000',
    logo: ViajesLogo,
    logoDetail: ViajesLogoBlue,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
    url: 'https://www.suraenlinea.com/viajes/sura?codigoAsesor=xxxx'
  },
  {
    id: '4',
    name: 'Arrendamiento Digital',
    description: 'Descripción corta de lo que contiene el plan de cobertura jurídica',
    descriptionL: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    price: '250.000',
    logo: ArriendoLogo,
    logoDetail: ArriendoLogoBlue,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
    url: 'https://www.suraenlinea.com/arrendamiento-digital/sura/cotizacion/calculadora?asesor=XXXX'
  },
  {
    id: '5',
    name: 'Moto',
    description: 'Descripción corta de lo que contiene el plan de cobertura jurídica',
    descriptionL: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    price: '100.000',
    logo: MotoLogo,
    logoDetail: MotoLogoBlue,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
    url: ''
  },
  {
    id: '6',
    name: 'Automóvil',
    description: 'Descripción corta de lo que contiene el plan de cobertura jurídica',
    descriptionL: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    price: '200.000',
    logo: AutomovilLogo,
    logoDetail: AutomovilLogoBlue,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
    url: ''
  },
  {
    id: '7',
    name: 'Seguros Voluntarios',
    description: 'Descripción corta de lo que contiene el plan de cobertura jurídica',
    descriptionL: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    price: '100.000',
    logo: SegurosVoluntariosLogo,
    logoDetail: SegurosVoluntariosLogoBlue,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
    url: 'https://www.suraenlinea.com/home?asesor=XXXXX#motos'
  },
  {
    id: '8',
    name: 'Plan Complementario',
    description: 'Descripción corta de lo que contiene el plan de cobertura jurídica',
    descriptionL: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    price: '100.000',
    logo: PlanComplementarioLogo,
    logoDetail: PlanComplementarioLogoBlue,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
    url: 'https://www.suraenlinea.com/pac-digital/sura/cotizar/datos?asesor=XXXX'
  },
  {
    id: '9',
    name: 'Casa',
    description: 'Descripción corta de lo que contiene el plan de cobertura jurídica',
    descriptionL: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letras.',
    price: '100.000',
    logo: CasaLogo,
    logoDetail: CasaLogoBlue,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
    url: ''
  }
]

const ServicesScreen = () => {
  const Navigation = useNavigation()
  const bottomSheetModalProfileRef = useRef(null)
  const snapModalPoint = ["100"]

  const handlerModal = () => {
    bottomSheetModalProfileRef.current?.present()
  }

  useEffect(() => {
    Navigation.setOptions({
      headerLeft: () => (
        <NotificationBing color={Navigation.color} variant="Linear" size={30} style={{ marginLeft: 20 }} />
      ),
      headerRight: () => (
        <TouchableOpacity onPress={handlerModal}>
          <ProfileIcon color={Navigation.color} variant="Linear" size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>
      ),
      headerTitle: 'Agregar Servicios',
      headerStyle: {
        borderBottomColor: 'white',
        shadowOpacity: 0, 
      }
    })
  }, [Navigation])

  return (
    <BottomSheetModalProvider>
      <View style={styles.servicesScreen}>
        <BottomSheetModal ref={bottomSheetModalProfileRef} index={0} snapPoints={snapModalPoint}>
          <Profile />
        </BottomSheetModal>
        <View style={styles.servicesScreen_}>
          <FlatList data={servicess} keyExtractor={(item) => item.id} renderItem={({item}) => <ServicesCardScreen status={item.status} logo={item.logo} name={item.name} description={item.description} price={item.price} id={item.id} descriptionL={item.descriptionL} backgroundImg={item.backgroundImg} logoDetail={item.logoDetail} planes={item.planes} procedimientos={item.procedimientos} url={item.url}/>} showsVerticalScrollIndicator={false} />
        </View>  
      </View>
    </BottomSheetModalProvider>
  )
}

export default ServicesScreen

const styles = StyleSheet.create({
  servicesScreen: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
  servicesScreen_: {
    width: '90%'
  }
})