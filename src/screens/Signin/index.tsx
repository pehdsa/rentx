import React, { useState } from 'react';
import { View, StatusBar, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/core';
import { useAuth } from '../../hooks/auth';

import {
    Container,
    Header,
    HeaderTitle,
    HeaderSubtitle,
    Form,
    Footer,
} from './styles';

import { 
    Button,
    Input
} from '../../components';

export const Signin = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const { signIn } = useAuth();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);

    async function handleSignIn() {
        setLoading(true);
        try {
            const schema = Yup.object().shape({
                password: Yup.string().required('Senha é obrigatória'),
                email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
            });
    
            await schema.validate({ email, password });

            const result = await signIn({ email, password });
            
        } catch(error) {
            setLoading(false);
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Oops', error.message)
            } else {
                Alert.alert('Oops...','Ocorreu um erro inesperado')    
            }
        }

    }

    function handleSignUp() {
        //@ts-ignore
        navigation.navigate('FirstStep');
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.colors.background_primary }}>
                <Container>
                    <StatusBar 
                        barStyle="dark-content"
                        backgroundColor={ theme.colors.background_primary }
                    />

                    <Header>
                        <HeaderTitle>
                            Estamos{'\n'}
                            quase lá.
                        </HeaderTitle>
                        <HeaderSubtitle>
                            Faça seu login para começar{'\n'}
                            uma experiência incrível.
                        </HeaderSubtitle>
                    </Header>

                    <Form>
                        <Input 
                            iconName="mail"
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCorrect={ false }
                            autoCapitalize="none"
                            onChangeText={ setEmail }
                            value={ email }
                        />
                        <View style={{ height: 8 }} />
                        <Input 
                            iconName="lock"
                            placeholder="Senha"                    
                            autoCapitalize="none"                    
                            isPassword
                            onChangeText={ setPassword }
                            value={ password }
                        />
                    </Form>

                    <Footer>
                        <Button
                            title="Login"
                            onPress={ handleSignIn }
                            enabled={ true }
                            loading={ loading }
                        />
                        <View style={{ height: 8 }} />
                        <Button
                            title="Criar conta gratuita"
                            onPress={ handleSignUp }                            
                            color={ theme.colors.background_secondary }
                            light
                        />
                    </Footer>


                </Container>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}