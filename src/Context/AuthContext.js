import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {REACT_APP_USERDATABASE} from "@env"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [isLoading, setIsLoading] = useState(null)
    const [userData, setUserData] = useState(null)
    const [userToken, setUserToken] = useState(null)

    const login = (email, password) => {
        setIsLoading(true)
        
        axios.post(`${REACT_APP_USERDATABASE}/login`, {
                email, 
                password
        }).then(res => {
            setIsLoading(true)
            let userData = res.data
            setUserData(userData["0"])
            setUserToken(userData.token)

            AsyncStorage.setItem('userData', JSON.stringify(userData))
            AsyncStorage.setItem('userToken', userData.token)
            setIsLoading(false)

        }).catch(e => {
            console.log(e)
        })
        setIsLoading(false)
    }

    const register = (name, identification, email, password, password_confirmation) => {
        axios.post(`${REACT_APP_USERDATABASE}/register`, {
            name, identification, email, password, password_confirmation
        }).then(res => {
            console.log('usuario registrado')
        }).catch(e => {
            console.log(e)
        })
    }

    const logout = () => {
        setIsLoading(true)
        setUserToken(null)
        AsyncStorage.removeItem('userData')
        AsyncStorage.removeItem('userToken')
        setIsLoading(false)
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true)
            let userData = await AsyncStorage.getItem('userData')
            let userToken = await AsyncStorage.getItem('userToken')

            userData = JSON.parse(userData)

            if(userData) {
                setUserToken(userToken)
                setUserData(userData["0"])
            }
            setIsLoading(false)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ login, register, logout, isLoading, userToken, userData }}>
            {children}
        </AuthContext.Provider>
    )
}