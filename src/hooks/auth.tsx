import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { api } from '../services/api';
import { database } from '../database';
import { User as ModelUser } from '../database/model/User'

type User = {
    id: string,
    user_id: string
    email: string,
    name: string,
    driver_license: string,
    avatar: string,
    token: string,
}

type SignInCredentials = {
    email: string,
    password: string
}

type AuthContextData = {
    user: User,
    signIn: (credentials: SignInCredentials) => Promise<void>,
}

type AuthProviderProps = {
    children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
    
    const [ data, setData ] = useState<User>({} as User);

    useEffect(() => {
        async function loadUserData() {
            const userCollection = database.get<ModelUser>('users');
            const response = await userCollection.query().fetch();
            
            if (response.length > 0) {
                const userData = response[0]._raw as unknown as User;
                //@ts-ignore
                api.defaults.headers.authorization = `Bearer ${ userData.token }`;
                setData(userData)
            }           

        }
        loadUserData();
    },[])

    async function signIn({ email, password }: SignInCredentials){
        try {
            const response = await api.post('/sessions', { email, password });    

            const { token, user } = response.data;    
            //@ts-ignore
            api.defaults.headers.authorization = `Bearer ${ token }`;

            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                await userCollection.create(( newUser ) => {
                    newUser.user_id = user.id,
                    newUser.name = user.name,
                    newUser.email = user.email,
                    newUser.driver_license = user.driver_license,
                    newUser.avatar =  user.avatar,
                    newUser.token = token
                })
            });            
            
            setData({ token, ...user });

        } catch (error) {
            //@ts-ignore
            throw new Error(error);
        }
    }


    return (
        <AuthContext.Provider value={{ user: data, signIn }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}

