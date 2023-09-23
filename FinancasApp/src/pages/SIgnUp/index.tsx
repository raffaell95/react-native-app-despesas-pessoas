import { ActivityIndicator, Platform, Text, View } from "react-native";

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from './styles'
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";

export default function SignUp() {

    const { signUp, loadingAuth } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignUp() {

        if(name === '' || email === '' || password === '') return

        signUp(email, password, name)
    }

    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>

                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Seu email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp} activeOpacity={0.7}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>

            </Container>
        </Background>
    )
}