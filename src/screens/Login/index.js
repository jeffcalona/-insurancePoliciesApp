import React, { useContext } from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import AuthBackgroundImg from '../../Assets/Icons/AuthBackgroundImg.jpg'
import AuthComponent from '../../components/AuthComponent'
import { MessageText, PasswordCheck } from 'iconsax-react-native'
import AuthComponentInput from '../../components/AuthComponentInput'
import AuthComponentButton from '../../components/AuthComponentButton'
import { AuthContext } from '../../Context/AuthContext'

const data = [
  {id: '1', title: 'Email', icon: MessageText, placeHolder: 'Correo Electrónico', isPassword: false},
  {id: '2', title: 'Contraseña', icon: PasswordCheck, placeHolder: '************', isPassword: true},
]

const Login = () => {
  const {login} = useContext(AuthContext)
  return (
    <ImageBackground source={AuthBackgroundImg} style={styles.authBackgroundImg}>
      <View style={styles.login}>
        <Text style={styles.login_title}>Blindaje Quirúrgico</Text>
      </View>
      <View style={styles.loginContent}>
        <View style={styles.loginContent_}>
          <AuthComponent autContentTitle='Bienveniedo de Vuelta' />
          <View style={styles.loginContent_inputs}>
            {data.map((newData) => {
              return (
                <AuthComponentInput key={newData.id} titleInput={newData.title} iconInput={<newData.icon size='20' color='black' />} inputPlaceholder={newData.placeHolder} isPassword={newData.isPassword} />
              )
            })}
          </View>
          <AuthComponentButton onPress={() => {login()}} buttonTitle='Iniciar sesión' />
        </View>
      </View>
    </ImageBackground>
  )
}

export default Login

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
    height: '85%',
    alignItems: 'center'
  },
  loginContent_inputs: {
    marginVertical: 20
  }
})