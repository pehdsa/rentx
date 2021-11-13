import React, { useState } from 'react';
import { View, StatusBar, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { api } from '../../../services/api';


import { 
    BackButton,
    Bullet,
    Input,
    Button
} from '../../../components';

import {
    Container,
    Header,
    Steps,
    Form,
    FormTitle,
    Title,
    Subtitle
} from './styles';

type Params = {
    user: {
        name: string,
        email: string,
        driverLicense: string
    }
}

export const SecondStep = () => {
    const navigation = useNavigation();
    const theme = useTheme();

    const route = useRoute();
    const { user } = route.params as Params;
    
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);

    async function handleRegister() {

        try {

            const schema = Yup.object().shape({
                password: Yup.string().required('Senha é obrigatória'),
                confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Deve ser igual a Senha').required('Repetir Senha é obrigatório'),
            });
            
            const data = { password, confirmPassword };
            await schema.validate(data);

            await api.post('/users', {
                name: user.name,
                email: user.email,
                password,
                driver_license: user.driverLicense
            })
            .then(() => {
                //@ts-ignore
                navigation.navigate('Confirmation', { 
                    title: 'Feito!', 
                    message: `Agora é só fazer login${'\n'}e aproveitar`, 
                    nextScreenRoute: 'Signin' 
                });
            })
            .catch((erro) => {
                Alert.alert('Oops...', 'Não foi possível cadastrar');
            });


        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Oops', error.message)
            } else {
                Alert.alert('Oops...','Ocorreu um erro inesperado')    
            }
        }

    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: theme.colors.background_primary }}>
                <Container>
                    <StatusBar 
                        barStyle="dark-content"
                        backgroundColor={ theme.colors.background_primary }
                    />

                    <Header>
                        <BackButton onPress={() => navigation.goBack()} />
                        <Steps>
                            <Bullet />
                            <Bullet active />                            
                        </Steps>
                    </Header>

                    <Title>
                        Crie sua{'\n'}
                        conta
                    </Title>
                    <Subtitle>
                        Faça seu cadastro de{'\n'}
                        forma rápida e fácil.
                    </Subtitle>

                    <Form>
                        <FormTitle>2. Senha</FormTitle>
                        <Input 
                            placeholder="Senha"
                            iconName="lock"
                            isPassword
                            onChangeText={ setPassword }
                            value={ password }
                        />
                        <View style={{ height: 8 }} />
                        <Input 
                            placeholder="Repetir Senha"
                            iconName="lock"
                            isPassword
                            onChangeText={ setConfirmPassword }
                            value={ confirmPassword }
                        />                        
                    </Form>

                    <Button 
                        title="Cadastrar"
                        enabled={ (password && confirmPassword) ? true : false }
                        color={ theme.colors.success }
                        onPress={ handleRegister }
                        loading={ loading }
                    />

                </Container>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}