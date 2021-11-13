import React, { useState } from 'react';
import { View, StatusBar, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import { 
    BackButton,
    Bullet,
    Input,
    Button
} from '../../../components';

import {
    Container,
    Header,
    Title,
    Subtitle,
    Steps,
    Form,
    FormTitle
} from './styles';

export const FirstStep = () => {
    const navigation = useNavigation();
    const theme = useTheme();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ driverLicense, setDriverLicense ] = useState('');

    async function handleNextStep() {

        try {

            const schema = Yup.object().shape({
                driverLicense: Yup.string().required('CNH é obrigatória'),
                email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
                name: Yup.string().required('Nome é obrigatório'),
            });
            
            const data = { name, email, driverLicense };
            await schema.validate(data);

            //@ts-ignore
            navigation.navigate('SecondStep', { user: data });

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
                            <Bullet active />
                            <Bullet />                            
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
                        <FormTitle>1. Dados</FormTitle>
                        <Input 
                            placeholder="Nome"
                            iconName="user"
                            onChangeText={ setName }
                            value={ name }
                        />
                        <View style={{ height: 8 }} />
                        <Input 
                            placeholder="E-mail"
                            iconName="mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={ setEmail }
                            value={ email }
                        />
                        <View style={{ height: 8 }} />
                        <Input 
                            placeholder="CNH"
                            iconName="credit-card"
                            keyboardType="numeric"
                            onChangeText={ setDriverLicense }
                            value={ driverLicense }
                        />
                    </Form>

                    <Button 
                        title="Próximo"
                        enabled={ (name && email && driverLicense) ? true : false }
                        onPress={ handleNextStep }
                    />

                </Container>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}