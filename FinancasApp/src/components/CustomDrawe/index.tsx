import { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import { AuthContext } from '../../contexts/auth';


export default function CustomDrawer(props: any){

    const {user, signOut} = useContext<any>(AuthContext)

    return (
        <DrawerContentScrollView {...props}>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <Image 
                    source={require('../../assets/Logo.png')} 
                    style={{ width: 90, height: 90 }}
                    resizeMode="contain"
                />

                <Text style={{ fontSize: 18, marginTop: 14 }}>Bem vindo</Text>
                <Text numberOfLines={1}
                    style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 14, paddingHorizontal: 20 }}
                >{user && user.name}</Text>
            </View>

            <DrawerItemList {...props} />
            <DrawerItem { ...props } label="Sair do app" onPress={() => signOut()} />
        </DrawerContentScrollView>
    )
}