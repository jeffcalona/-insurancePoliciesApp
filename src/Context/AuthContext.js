import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import {REACT_APP_USERDATABASE} from "@env"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)

    const [hola, setHola] = useState('')
    console.log('holaaa', hola)

    // const login = (email, password) => {
    //     setIsLoading(true)
        
    //     // axios.post('http://127.0.0.1:80/api/login', {
    //     //         email, 
    //     //         password
    //     // }).then(res => {
    //     //     console.log('response data', res.data)
    //     // }).catch(e => {
    //     //     console.log(e)
    //     // })

    //     //setUserToken('esteeseltoken')
    //     AsyncStorage.setItem('userToken', 'esteeseltoken')
    //     setIsLoading(false)
    // }

    const login = async () => {
        setIsLoading(true)
        const response = await fetch('http://127.0.0.1:80/api/login')
        const data = await response.json()
        setHola(data)
    }

    const logout = () => {
        setIsLoading(true)
        setUserToken(null)
        AsyncStorage.removeItem('userToken')
        setIsLoading(false)
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            setUserToken(userToken)
            setIsLoading(false)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
            {children}
        </AuthContext.Provider>
    )
}