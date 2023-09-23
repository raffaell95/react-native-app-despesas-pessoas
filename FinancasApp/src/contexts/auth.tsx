import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext({})

function AuthProvider({children}: AuthProviderProps){

    const navigation = useNavigation()

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('@finToken')
            
            if(storageUser){
                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                }).catch(() =>{
                    setUser(null)
                })

                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`
                setUser(response!.data)
                setLoading(false)
            }

            setLoading(false)
        }

        loadStorage()

    }, [])


    async function signUp(email: string, password: string, name: string){
        setLoadingAuth(true)
        try{
            const response = await api.post('/users',{
                name: name,
                password: password,
                email: email
            })

            setLoadingAuth(false)
            navigation.goBack()

        }catch(err){
            console.log("ERRO AO CADASTRAR")
            setLoadingAuth(false)
        }
    }

    async function signIn(email: string, password: string){
        setLoadingAuth(true)

        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            })

            const { id, name, token } = response.data

            const data = {
                id,
                name,
                email,
                token
            }

            await AsyncStorage.setItem('@finToken', token)

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            setUser({
                id,
                name,
                email
            })

            setLoadingAuth(false)

        } catch (error) {
            console.log("ERRO AO LOGAR")
            setLoadingAuth(false)
        }
    }

    async function signOut(){
        await AsyncStorage.clear().then(() =>{
            setUser(null)
        })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider