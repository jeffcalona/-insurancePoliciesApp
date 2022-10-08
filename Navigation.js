import React, { useContext } from "react";
import { ActivityIndicator, Image, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { Home as HomeIcon, ClipboardText, Profile as ProfileIcon, AddCircle } from 'iconsax-react-native';

import BlindajeLogo from './src/Assets/Icons/BlindajeLogo.png'

//screens
import Home from './src/screens/Home'
import MyPolicies from './src/screens/MyPolicies'
import Profile from "./src/screens/Profile";
import ServicesScreen from "./src/screens/ServicesScreen";
import CoberturaJuridica from "./src/screens/CoberturaJuridica";
import ServicesDetail from "./src/screens/ServicesDetail";
import FormCoberturaJuridica from "./src/screens/FormCoberturaJuridica";
import FormPolicies from "./src/screens/FormPolicies";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import OnBoarding from "./src/screens/OnBoarding";
import { AuthContext } from "./src/Context/AuthContext";

//staks
const ServicesScreenStack = createNativeStackNavigator()
function Stacks() {
    return (
        <ServicesScreenStack.Navigator >
            <ServicesScreenStack.Screen name="AgregarServiciosStack" component={ServicesScreen} />
            <ServicesScreenStack.Screen name="DetailStack" component={ServicesDetail} />
            <ServicesScreenStack.Screen name="FormCoberturaJuridica" component={FormCoberturaJuridica} />
            <ServicesScreenStack.Screen name="FormPolicies" component={FormPolicies} />
        </ServicesScreenStack.Navigator>
    )
}

//onBoarding
const Stack = createNativeStackNavigator()
function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='OnBoarding' component={OnBoarding} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

//Tabs
const Tab = createBottomTabNavigator()
function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: '#1B7BCC',
                tabBarInactiveTintColor: 'rgba(27, 123, 204, .3)',
                tabBarStyle: {
                    borderTopColor: 'white',
                    shadowOffset: {height: -3},
                    shadowColor: 'black',
                    shadowOpacity: 0.3,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    height: 90,
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color }) => (
                  <HomeIcon color={color} variant="Linear" size={35} style={{ marginTop: 10 }} />
                )
            }} />
            <Tab.Screen name="CoberturaJuridica" component={CoberturaJuridica} options={{
                tabBarLabel: 'Coberturas',
                tabBarIcon: ({ focused }) => (
                  focused ? 
                  <Image source={BlindajeLogo} style={{ width: 35, height: 35, marginTop: 10, opacity: 1 }} />
                  :
                  <Image source={BlindajeLogo} style={{ width: 35, height: 35, marginTop: 10, opacity: .3 }} />
                )
            }} />
            <Tab.Screen name="AgregarServicios" component={Stacks} options={({ route }) => ({
                tabBarStyle: {
                    display: getTabBarVisibility(route),
                    borderTopColor: 'white',
                    shadowOffset: {height: -3},
                    shadowColor: 'black',
                    shadowOpacity: 0.3,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    height: 90,
                },
                tabBarLabel: 'Agregar',
                tabBarIcon: () => (
                  <AddCircle color='#1B7BCC'  variant="Bold" size={65} style={{ marginTop: -10, shadowOffset: {height: 4}, shadowColor: 'rgba(0, 0, 0, .8)', shadowOpacity: .3 }} />
                ),
                headerShown: false
            })} />
            <Tab.Screen name="MyPolices" component={MyPolicies} options={{
                tabBarLabel: 'Mis Pólizas',
                tabBarIcon: ({ color }) => (
                  <ClipboardText color={color} variant="Linear" size={35} style={{ marginTop: 10 }} />
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color }) => (
                  <ProfileIcon color={color} variant="Linear" size={35} style={{ marginTop: 10 }} />
                )
            }} />
        </Tab.Navigator>
    )
}

//ocultar y mostrar tabBar
const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'
    switch (routeName) {
        case 'DetailStack':
            return 'none';
            break
        case 'FormCoberturaJuridica':
            return 'none';
            break
        case 'FormPolicies':
            return 'none';
            break
        default: 'flex'
    }
}


export default function Navigation() {

    //Context
    const {isLoading, userToken} = useContext(AuthContext)

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {userToken !== null ?
                <Tabs />
                :
                <AuthStack />
            }
        </NavigationContainer>
    )
}