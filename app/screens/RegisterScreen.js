import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as Yup from 'yup';


import Screen from '../components/Screen';
import { ErrorMessages, AppForm, AppFormField, SubmitButton } from '../components/forms';
import usersApi from '../api/users';
import authApi from '../api/auth';
import auth from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const RegisterScreen = () => {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);

    const [error, setError] = useState();
    const auth = useAuth();

    const handleSubmit = async (userInfo) => {
        console.log(userInfo);
        const result = await registerApi.request(userInfo);

        console.log(result.ok);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken);
    }

    return (
        <Screen style={styles.container}>
            <ActivityIndicator visible={registerApi.isLoading || loginApi.isLoading} />
            <Image
                style={styles.logo}
                source={require("../assets/Zero1.png")}
            />
            <AppForm
                initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessages error={error} touched={error} />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"

                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton
                    title="Register"
                />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 25,
        alignSelf: "center",
        marginBottom: 10
    }
});

export default RegisterScreen;