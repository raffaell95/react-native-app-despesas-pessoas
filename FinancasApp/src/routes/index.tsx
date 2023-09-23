import { ActivityIndicator, View } from "react-native"
import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"
import { useContext } from "react"
import { AuthContext } from "../contexts/auth"


function Routes(){
    const { signed, loading } = useContext(AuthContext)

    if(loading){
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F0F4FF"
            }}>
                <ActivityIndicator size="large" color="#131313" />
            </View>
        )
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes