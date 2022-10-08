import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import AuthComponent from '../../components/AuthComponent'
import AuthBackgroundImg from '../../Assets/Icons/AuthBackgroundImg.jpg'
import AuthComponentInput from '../../components/AuthComponentInput'
import { User, Hashtag, MessageText, PasswordCheck } from 'iconsax-react-native'
import AuthComponentButton from '../../components/AuthComponentButton'

const data = [
  {id: '1', title: 'Nombre', icon: User, placeHolder: 'Combre Completo', isPassword: false},
  {id: '2', title: 'Identificación', icon: Hashtag, placeHolder: 'Número de Identificación', isPassword: false},
  {id: '3', title: 'Email', icon: MessageText, placeHolder: 'Correo Electrónico', isPassword: false},
  {id: '4', title: 'Contraseña', icon: PasswordCheck, placeHolder: '************', isPassword: true},
  {id: '5', title: 'Repita Contraseña', icon: PasswordCheck, placeHolder: '************', isPassword: true}
]

const Register = () => {
  return (
    <ImageBackground source={AuthBackgroundImg} style={styles.authBackgroundImg}>
      <View style={styles.login}>
        <Text style={styles.login_title}>Blindaje Quirúrgico</Text>
      </View>
      <View style={styles.loginContent}>
        <View style={styles.loginContent_}>
          <AuthComponent autContentTitle='Nuevo Usuario' />
          <View style={styles.loginContent_inputs}>
            {data.map((newData) => {
              return (
                <AuthComponentInput key={newData.id} titleInput={newData.title} iconInput={<newData.icon size='20' color='black' />} inputPlaceholder={newData.placeHolder} isPassword={newData.isPassword} />
              )
            })}
          </View>
          <AuthComponentButton buttonTitle='Regístrate' />
        </View>
      </View>
    </ImageBackground>
  )
}

export default Register

const styles = StyleSheet.create({
  authBackgroundImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  login: {
    height: '27%',
    justifyContent: 'center',
  },
  login_title: {
      width: 300,
      fontSize: 35,
      textAlign: 'center',
      lineHeight: 34,
      fontWeight: '700',
      color: 'white'
  },
  loginContent: {
    width: '100%',
    height: '73%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginContent_: {
    width: '80%',
    height: '87%',
    alignItems: 'center'
  },
  loginContent_inputs: {
    marginVertical: 10
  }
})